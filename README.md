# connect-client

## Install

```sh
$ npm install
```

## Usage

```js
import ConnectClient from "@colecaomoda/connect-client"

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

## Test

```sh
$ npm test
```