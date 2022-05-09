#!/bin/bash
# This script is created by projen, do not edit it directly.
set -e

terraform -chdir=examples/terraform init --upgrade
terraform -chdir=examples/terraform fmt
terraform -chdir=examples/terraform validate

          