export default class ConnectClientConfig {
  apiUrl: string;
  authToken: string;

  constructor(apiUrl: string, authToken: string) {
    this.apiUrl = apiUrl
    this.authToken = authToken
  }
}