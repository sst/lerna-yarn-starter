import * as sst from "@serverless-stack/resources";

export default class WebsiteStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const site = new sst.StaticSite(this, "Site", {
      path: "frontend",
      buildOutput: "build",
      buildCommand: "npm run build",
      errorPage: sst.StaticSiteErrorOptions.REDIRECT_TO_INDEX_PAGE,
      replaceValues: [
        {
          files: "**/*.js",
          search: "%%SERVICE_1_ENDPOINT%%",
          replace: props.api1.url,
        },
        {
          files: "**/*.js",
          search: "%%SERVICE_2_ENDPOINT%%",
          replace: props.api2.url,
        }
      ],
    });

    // Show the endpoint in the output
    this.addOutputs({
      WebsiteURL: site.url,
    });
  }
}
