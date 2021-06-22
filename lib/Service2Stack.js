import * as sst from "@serverless-stack/resources";

export default class Service2Stack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new sst.Api(this, "Api", {
      defaultFunctionProps: {
        srcPath: "src/services/service2",
      },
      routes: {
        "GET /": "handler.main",
      },
    });

    this.api = api;

    // Show the endpoint in the output
    this.addOutputs({
      Service2Endpoint: api.url,
    });
  }
}
