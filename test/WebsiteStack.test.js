import { expect, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";
import Service1Stack from "../lib/Service1Stack";
import Service2Stack from "../lib/Service2Stack";
import WebsiteStack from "../lib/WebsiteStack";

test("Test Service1 Stack", () => {
  const app = new sst.App();
  // WHEN
  const service1 = new Service1Stack(app, "test-service1-stack");
  const service2 = new Service2Stack(app, "test-service2-stack");
  const stack = new WebsiteStack(app, "test-website-stack", {
    api1: service1.api,
    api2: service2.api,
  });
  // THEN
  expect(stack).to(haveResource("AWS::Lambda::Function"));
});
