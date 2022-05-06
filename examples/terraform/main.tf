# Configure Terraform
terraform {
  # Terraform binary version constraint
  required_version = "~> 1.1.0"

  # Define all needed providers here, you can find all available providers here:
  # https://registry.terraform.io/
  required_providers {}
}

# Initialize your provider here

module "my_bucket_module" {
  source = "../../modules/s3-bucket-trigger-on-file-create"

  bucket_name          = "my-bucket"
  lambda_function_name = "my-lambda-function"
}