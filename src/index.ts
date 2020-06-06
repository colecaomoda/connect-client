import * as request from "request-promise-native"
import Material from "./material"
import Trimming from "./trimming"
import Supplier from "./supplier"

export interface IConnectClient {
  createMaterials(materials: Array<Material>): Promise<void>;
  createTrimmings(trimmings: Array<Trimming>): Promise<void>;
  createSuppliers(trimmings: Array<Supplier>): Promise<void>;
}

export class ConnectConfig {
  apiUrl: string | undefined;
  authToken: string | undefined;
}

export default class ConnectClient implements IConnectClient {
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

  createSuppliers(suppliers: Array<Supplier>): Promise<void> {
    return request.post({
      url: `${this.config.apiUrl}/suppliers`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ suppliers })
    }).then((_) => {
      return
    })
  }
}
