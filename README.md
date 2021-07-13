# SST Lerna + Yarn Workspaces Starter [![Seed Status](https://api.seed.run/serverless-stack/lerna-yarn-starter/stages/dev/build_badge)](https://console.seed.run/serverless-stack/lerna-yarn-starter)

A [Serverless Stack Framework (SST)](https://github.com/serverless-stack/serverless-stack) monorepo starter that uses [Lerna](https://lerna.js.org) and [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

- A full-stack serverless app
- Designed to scale for larger teams
- Maintains internal dependencies as packages
- Supports publishing dependencies as private NPM packages
- Uses Yarn Workspaces to hoist packages to the root `node_modules/` directory

-----

## Installation

Start by cloning this repo

``` bash
$ git clone https://github.com/serverless-stack/lerna-yarn-starter my-project
```

Enter the new directory

``` bash
$ cd my-project
```

Install npm packages for the entire project

``` bash
$ yarn
```

## How It Works

The directory structure roughly looks like:

```
package.json
/lib
/frontend
  package.json
/src
  /services
    /service1
      handler.js
      package.json
    /service2
      handler.js
      package.json
  /packages
    /sample-package
      index.js
      package.json
  /util
```

This repo is split into a few parts. Each with a different purpose:

- `lib/`

  This is where the CDK code for your app lives. It defines the infrastructure of your serverless app.

- `src/`

  This is where the code for your Lambda function are. It is further organized into services. Where each service is a collection of Lambda functions.

- `src/services/`

  These are services that are deployed as Lambda functions. Has a `package.json` and an entry point. There are two sample services.

  1. `service1`: Depends on the `sample-package`.
  2. `service2`: Does not depend on any internal packages.

- `src/packages/`

  These are internal packages that are used in our services. Each contains a `package.json` and can be optionally published to npm.

- `src/util/`

  Any common code that you might not want to maintain as a package. Does NOT have a `package.json`.

- `frontend/`

  A sample frontend React app that is a part of our serverless app.

The `src/packages/`, `src/services/`, and `frontend/` directories are Yarn Workspaces.

### Services

Each service is a collection of Lambda functions with a similar purpose. They are meant to be managed on their own. They each have their own `package.json` and the versions of the dependencies should be kept separate from the other services. SST internally uses [esbuild](https://github.com/evanw/esbuild) to optimally package each Lambda function in a service.

This is good for keeping your Lambda packages small. But Yarn Workspaces also ensures that it hoists all your npm packages to the project root.

### Packages

Since each package has its own `package.json`, you can manage it just like you would any other npm package.

To add a new package:

``` bash
$ mkdir src/packages/new-package
$ yarn init
```

Packages can also be optionally published to npm.

To use a package:

```bash
$ yarn add new-package@1.0.0
```

Note that packages should be added by specifying the version number declared in their `package.json`. Otherwise, Yarn tries to find the dependency in the registry.

### Util

If you need to add any other common code in your repo that won't be maintained as a package, add it to the util directory. It does not contain a `package.json`. This means that you'll need to install any npm packages as dependencies in the root.

To install an npm package at the root.

``` bash
$ yarn add -W some-npm-package
```

While it's convenient to add all the common code to the util, it has a downside. If a team updates the util, all the services that are dependent on it will need to test this change before deploying. In contrast, a package can be locked to a specific version and can be upgraded when the team chooses to.

## Deployment

SST will handle all the dependencies internally and deploy all the services (and the frontend) in order.

## Deploying Through Seed

[Seed](https://seed.run) supports deploying SST monorepo projects that use Lerna and Yarn Workspaces out of the box.

-------

This repo is maintained by [Serverless Stack](https://serverless-stack.com/).
