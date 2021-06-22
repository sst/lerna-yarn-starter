import * as sst from "@serverless-stack/resources";

export default class Service1Stack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new sst.Api(this, "Api", {
      defaultFunctionProps: {
        srcPath: "src/services/service1",
      },
      routes: {
        "GET /": "handler.main",
      },
    });

    this.api = api;

    // Show the endpoint in the output
    this.addOutputs({
      Service1Endpoint: api.url,
    });
  }
}
