// import { AwsProvider } from "@cdktf/provider-aws";
import { AwsProvider } from "@cdktf/provider-aws";
import { DataAwsLambdaFunction } from "@cdktf/provider-aws/lib/lambdafunction";
import { App } from "cdktf";
import { TFModuleStack, TFModuleVariable } from "cdktf-tf-module-stack";
import { Construct } from "constructs";
import { S3Bucket } from "./index";

class S3BucketTriggerOnFileCreate extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // This going to be stripped from the result
    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });
    const bucketName = new TFModuleVariable(this, "bucket_name", {
      type: "string",
      nullable: false,
      description: "The name of the S3 bucket",
    });

    const lambdaFunctionName = new TFModuleVariable(
      this,
      "lambda_function_name",
      {
        type: "string",
        nullable: false,
        description: "The function name of the Lambda function",
      }
    );

    const s3Bucket = new S3Bucket(this, "s3_bucket", {
      bucket: bucketName.value,
    });

    const lambda = new DataAwsLambdaFunction(this, "lambda", {
      functionName: lambdaFunctionName.value,
    });

    s3Bucket.notifyLambda(lambda, "Post", {});
  }
}

const app = new App();
// This is the name the module can be found under.
// We expect a "s3-bucket-trigger-on-file-create.md" file in this directory.
// The README.md file will be generated from this file.
new S3BucketTriggerOnFileCreate(app, "s3-bucket-trigger-on-file-create");
app.synth();
