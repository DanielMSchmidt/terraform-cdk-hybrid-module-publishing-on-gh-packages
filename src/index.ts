import {
  LambdaFunction,
  DataAwsLambdaFunction,
} from "@cdktf/provider-aws/lib/lambdafunction";
import { Construct } from "constructs";
import { S3Bucket as S3BucketModule } from "./.gen/modules/terraform-aws-modules/aws/s3-bucket";
import { Notification } from "./.gen/modules/terraform-aws-modules/aws/s3-bucket/modules/notification";

export interface S3BucketOptions {
  // Name of the bucket
  readonly bucket: string;
}

export interface NotificationOptions {
  readonly filterPrefix?: string;
  readonly filterSuffix?: string;
}

export class S3Bucket extends Construct {
  public s3Module: S3BucketModule;
  private constructIndex = 0;
  constructor(scope: Construct, id: string, public config: S3BucketOptions) {
    super(scope, id);

    this.s3Module = new S3BucketModule(this, "bucket", {
      ...config,
      forceDestroy: true,
    });
  }

  public notifyLambda(
    lambda: LambdaFunction | DataAwsLambdaFunction,
    eventType: "Put" | "Post" | "Delete",
    options: NotificationOptions = {}
  ) {
    const id = this.constructIndex++;
    new Notification(this, `notification-${id}`, {
      bucket: this.s3Module.s3BucketIdOutput,
      eventbridge: true,
      lambdaNotifications: [
        {
          lambda: {
            ...options,
            function_arn: lambda.arn,
            function_name: lambda.functionName,
            event_type:
              eventType === "Delete"
                ? `s3:ObjectRemoved:${eventType}`
                : `s3:ObjectCreated:${eventType}`,
          },
        },
      ],
    });
  }
}
