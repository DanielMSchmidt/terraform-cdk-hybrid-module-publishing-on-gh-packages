import { AwsProvider } from "@cdktf/provider-aws";
import { LambdaFunction } from "@cdktf/provider-aws/lib/lambdafunction";
import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { S3Bucket } from "..";

// To learn more about testing see cdk.tf/testing
describe("MyConstruct", () => {
  it("should synthesize", () => {
    expect(
      Testing.synthScope((scope) => {
        new AwsProvider(scope, "aws", {
          region: "us-east-1",
        });
        new S3Bucket(scope, "my-bucket", {
          bucket: "my-bucket",
        });
      })
    ).toMatchSnapshot();
  });

  it("can add a lambda trigger", () => {
    expect(
      Testing.synthScope((scope) => {
        new AwsProvider(scope, "aws", {
          region: "us-east-1",
        });
        const bucket = new S3Bucket(scope, "my-bucket", {
          bucket: "my-bucket",
        });
        const lambda = new LambdaFunction(scope, "my-lambda", {
          functionName: "my-lambda",
          role: "my-role",
        });

        bucket.notifyLambda(lambda, "Post", {
          filterPrefix: "my-upload",
          filterSuffix: ".png",
        });
      })
    ).toMatchSnapshot();
  });
});
