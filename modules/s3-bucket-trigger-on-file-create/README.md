# S3 Bucket Trigger on File Create

## Usage

Triggers a lambda function if a file is created within the created S3 bucket.

```hcl
module "my_file_upload_trigger" {
  source = "danielmschmidt92/terraform-cdk-hybrid-module-publishing-on-gh-packages.git//modules/s3-bucket-trigger-on-file-create"

}
```

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | 4.12.1 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 4.12.1 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_s3buckettriggeronfilecreate_s3bucket_EDD4003A"></a> [s3buckettriggeronfilecreate\_s3bucket\_EDD4003A](#module\_s3buckettriggeronfilecreate\_s3bucket\_EDD4003A) | terraform-aws-modules/s3-bucket/aws | n/a |
| <a name="module_s3buckettriggeronfilecreate_s3bucket_notification0_5CA04471"></a> [s3buckettriggeronfilecreate\_s3bucket\_notification0\_5CA04471](#module\_s3buckettriggeronfilecreate\_s3bucket\_notification0\_5CA04471) | terraform-aws-modules/s3-bucket/aws//modules/notification | n/a |

## Resources

| Name | Type |
|------|------|
| [aws_lambda_function.s3buckettriggeronfilecreate_lambda_CA384CDE](https://registry.terraform.io/providers/aws/4.12.1/docs/data-sources/lambda_function) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_bucket_name"></a> [bucket\_name](#input\_bucket\_name) | The name of the S3 bucket | `string` | n/a | yes |
| <a name="input_lambda_function_name"></a> [lambda\_function\_name](#input\_lambda\_function\_name) | The function name of the Lambda function | `string` | n/a | yes |

## Outputs

No outputs.
<!-- END_TF_DOCS -->