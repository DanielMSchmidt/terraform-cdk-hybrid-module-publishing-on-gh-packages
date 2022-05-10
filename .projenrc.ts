import {
  HybridModule,
  publishToGithubPackages,
} from "projen-cdktf-hybrid-construct";

const publishConfig = publishToGithubPackages({
  repositoryName: "terraform-cdk-hybrid-module-publishing-on-gh-packages",
  repositoryOwner: "danielmschmidt",
  registries: ["npm", "maven", "nuget"],
});

const project = new HybridModule({
  ...publishConfig,
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],

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
});

project.addBundledDeps("cdktf-tf-module-stack");
project.addPeerDeps("cdktf@^0.10.4");
project.addPeerDeps("@cdktf/provider-aws@^7.0.45");

project.synth();
