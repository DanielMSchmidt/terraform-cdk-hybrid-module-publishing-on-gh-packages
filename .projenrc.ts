import {
  HybridModule,
  publishToGithubPackages,
} from "projen-cdktf-hybrid-construct";

const publishConfig = publishToGithubPackages({
  name: "cdktf-s3-hybrid-module",
  namespace: "DanielMSchmidt",
  registries: ["npm", "maven"],
});

publishConfig.publishToMaven!.javaPackage = "com.danielmschmidt.cdktf";

console.log(publishConfig);

const project = new HybridModule({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],
  name: "@danielmschmidt/cdktf-s3-hybrid-module",
  repositoryUrl:
    "https://github.com/danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.git",

  cdktfVersion: "^0.10.4",
  constructExamples: {
    enabled: true,
    folder: "examples/constructs",
  },
  terraformExamples: {
    enabled: true,
    folder: "examples/terraform",
    providerConfig: `   
provider "aws" {
  region = "eu-central-1"
}
  `,
  },
  ...publishConfig,
});

project.addBundledDeps("cdktf-tf-module-stack");
project.addPeerDeps("cdktf@^0.10.4");
project.addPeerDeps("@cdktf/provider-aws@^7.0.45");

project.synth();
