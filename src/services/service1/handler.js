import sample from "sample";
import util from "../../util";

export async function main(event) {
  return {
    statusCode: 200,
    body: `Hello World! Via ${sample()} and ${util()} at ${event.requestContext.time}.`,
  };
}
