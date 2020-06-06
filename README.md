# connect-client

## Install

```sh
$ npm install
```

## Usage

```js
const { ConnectClientImpl } = require("connect-client")

const connectClient = new ConnectClientImpl({
  apiUrl: process.env.CONNECT_URL,
  authToken: process.env.CONNECT_AUTH_TOKEN
})

connectClient.createSuppliers([...])
connectClient.createTrimmings([...])
connectClient.createMaterials([...])
```

## Release

```sh
$ GITHUB_TOKEN=... npm run release
```

> Don't forget to increment the `package.json` version (major or minor)

## Test

```sh
$ npm test
```