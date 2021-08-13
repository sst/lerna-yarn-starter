import * as sst from "@serverless-stack/resources";

export default class WebsiteStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const site = new sst.ReactStaticSite(this, "ReactSite", {
      path: "frontend",
      environment: {
        REACT_APP_SERVICE_1_ENDPOINT: props.api1.url,
        REACT_APP_SERVICE_2_ENDPOINT: props.api2.url,
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      WebsiteURL: site.url,
    });
  }
}
