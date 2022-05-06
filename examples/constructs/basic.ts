import { LambdaFunction } from "@cdktf/provider-aws/lib/lambdafunction";
import { TerraformStack } from "cdktf";
import { Construct } from "constructs";

import { S3Bucket } from "../../src/";
import { AwsProvider } from "@cdktf/provider-aws";

export class BasicExample extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws");

    const bucket = new S3Bucket(this, "my-construct", {
      bucket: "my-bucket",
    });

    const itemCreatedLambda = new LambdaFunction(this, "my-lambda", {
      functionName: "my-lambda",
      role: "my-role",
    });

    const itemDeletedLambda = new LambdaFunction(this, "my-other-lambda", {
      functionName: "my-deletion-lambda",
      role: "my-role",
    });

    bucket.notifyLambda(itemCreatedLambda, "Post");
    bucket.notifyLambda(itemDeletedLambda, "Delete");
  }
}
