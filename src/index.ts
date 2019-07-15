import * as request from "request-promise-native"

declare const Promise: any;

export class ConnectClientConfig {
  apiUrl: string;
  authToken: string;

  constructor(apiUrl: string, authToken: string) {
    this.apiUrl = apiUrl
    this.authToken = authToken
  }
}

interface ConnectClient {
  createMaterials(config: ConnectClientConfig): void;
}

export class ConnectClientImpl implements ConnectClient {
  createMaterials(config: ConnectClientConfig): void {
    throw new Error("Method not implemented.");
  }
}
