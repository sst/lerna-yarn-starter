import Service1Stack from "./Service1Stack";
import Service2Stack from "./Service2Stack";
import WebsiteStack from "./WebsiteStack";

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x"
  });

  const service1 = new Service1Stack(app, "service1-stack");
  const service2 = new Service2Stack(app, "service2-stack");
  new WebsiteStack(app, "website-stack", {
    api1: service1.api,
    api2: service2.api,
  });

  // Add more stacks
}
