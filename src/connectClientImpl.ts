import ConnectClientConfig from "./connectClientConfig"
import ConnectClient from "./connectClient"
import Material from "./material"
import * as request from "request-promise-native"

export default class ConnectClientImpl implements ConnectClient {
  createMaterials(config: ConnectClientConfig, materials: Array<Material>): Promise<void> {
    return request.post({
      url: `${config.apiUrl}/materials`,
      headers: {
        "Authorization": config.authToken,
      },
      body: JSON.stringify(materials)
    }).then((_) => {
      return
    })
  }
}
