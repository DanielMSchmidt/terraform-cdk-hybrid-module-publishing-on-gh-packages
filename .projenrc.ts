import {
  HybridModule,
  publishToGithubPackages,
} from "projen-cdktf-hybrid-construct";
const project = new HybridModule({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],
  name: "terraform-cdk-hybrid-module-publishing-on-gh-packages",
  repositoryUrl:
    "https://github.com/danielmschmidt92/terraform-cdk-hybrid-module-publishing-on-gh-packages.git",

  cdktfVersion: "^0.10.4",
  constructExamples: {
    enabled: true,
    folder: "./examples/constructs",
  },
  terraformExamples: {
    enabled: true,
    folder: "./examples/terraform",
    providerConfig: "",
  },
  ...publishToGithubPackages({
    name: "terraform-cdk-hybrid-module-publishing-on-gh-packages",
    namespace: "DanielMSchmidt",
    registries: ["npm", "maven"],
  }),
});

project.addPeerDeps("cdktf@^0.10.4");

project.addPeerDeps("@cdktf/provider-aws@^7.0.45");

project.synth();
