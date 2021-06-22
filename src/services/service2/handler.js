export async function main(event) {
  return {
    statusCode: 200,
    body: `Hello World! Via service2 at ${event.requestContext.time}.`,
  };
}
