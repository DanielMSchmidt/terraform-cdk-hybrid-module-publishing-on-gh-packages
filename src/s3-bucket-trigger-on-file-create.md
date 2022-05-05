# S3 Bucket Trigger on File Create

## Usage

Triggers a lambda function if a file is created within the created S3 bucket.

```hcl
module "my_file_upload_trigger" {
  source = "danielmschmidt92/terraform-cdk-hybrid-module-publishing-on-gh-packages.git//modules/s3-bucket-trigger-on-file-create"

}
```
