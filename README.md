# connect-client

Node HTTP Client for Connect API.

## Install

```sh
$ npm install "@colecaomoda/connect-client"
```

## Usage

```js
import ConnectClient from "@colecaomoda/connect-client"

const connectClient = new ConnectClient({
  apiUrl: process.env.CONNECT_URL,
  authToken: process.env.CONNECT_AUTH_TOKEN
})

connectClient.upsertSuppliers([...])
connectClient.upsertTrimmings([...])
connectClient.upsertMaterials([...])
connectClient.updateCustomFields([...])
connectClient.updateThemeClothing({...})
connectClient.updateWorkflowExecution({...})
```

## Test

```sh
$ npm test
```

## Changelog

[See releases](/CHANGELOG.md)