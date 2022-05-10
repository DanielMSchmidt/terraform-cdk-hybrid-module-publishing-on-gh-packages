import {
  HybridModule,
  publishToGithubPackages,
  publishToRegistries,
} from "projen-cdktf-hybrid-construct";

const repositoryOwner = "danielmschmidt";
const publishConfig = publishToGithubPackages({
  repositoryName: "terraform-cdk-hybrid-module-publishing-on-gh-packages",
  repositoryOwner,
  registries: ["npm", "maven"],
});

const nugetConf = publishToRegistries({
  name: "terraform-cdk-hybrid-module-publishing-on-gh-packages",
  namespace: repositoryOwner,
  registries: ["nuget"],
}).publishToNuget!;
publishConfig.publishToNuget = {
  dotNetNamespace: nugetConf.dotNetNamespace,
  packageId: nugetConf.packageId,
  nugetServer: `https://nuget.pkg.github.com/${repositoryOwner}`,
};

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

project.addDevDeps("jest@=28.1.0");
project.addBundledDeps("cdktf-tf-module-stack");
project.addPeerDeps("cdktf@^0.10.4");
project.addPeerDeps("@cdktf/provider-aws@^7.0.45");

project.synth();
