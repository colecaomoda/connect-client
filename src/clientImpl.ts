import ConnectConfig from "./config"
import ConnectClient from "./client"
import Material from "./material"
import Trimming from "./trimming"
import * as request from "request-promise-native"

export default class ConnectClientImpl implements ConnectClient {
  config: ConnectConfig;

  constructor(config: ConnectConfig) {
    this.config = config
  }

  createMaterials(materials: Array<Material>): Promise<void> {
    return request.post({
      url: `${this.config.apiUrl}/materials`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ materials })
    }).then((_) => {
      return
    })
  }

  createTrimmings(trimmings: Array<Trimming>): Promise<void> {
    return request.post({
      url: `${this.config.apiUrl}/trimmings`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ trimmings })
    }).then((_) => {
      return
    })
  }
}
