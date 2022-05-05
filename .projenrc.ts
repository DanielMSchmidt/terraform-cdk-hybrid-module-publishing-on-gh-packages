import { HybridModule } from "projen-cdktf-hybrid-construct";
const project = new HybridModule({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],
  name: "terraform-cdk-hybrid-module-publishing-on-gh-packages",
  repositoryUrl: "https://github.com/danielmschmidt92/terraform-cdk-hybrid-module-publishing-on-gh-packages.git",

  // cdktfVersion: "^0.10.1",       /* Minimum target version of this library. */
  // constructExamples: undefined,  /* If set a construct examples folder will be created. */
  // deps: [],                      /* Runtime dependencies of this module. */
  // description: undefined,        /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,        /* The "name" in package.json. */
  // terraformExamples: undefined,  /* If set a terraform examples folder will be created. */
});
project.synth();