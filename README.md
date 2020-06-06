# connect-client

## Install

```sh
$ npm install
```

## Usage

```js
const ConnectClient = require("connect-client")

const connectClient = new ConnectClient({
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