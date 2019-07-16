import ConnectClientConfig from "./connectClientConfig"
import Material from "./material"

export default interface ConnectClient {
  createMaterials(config: ConnectClientConfig, materials: Array<Material>): Promise<void>;
}

