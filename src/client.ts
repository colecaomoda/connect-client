import Material from "./material"

export default interface ConnectClient {
  createMaterials(materials: Array<Material>): Promise<void>;
}

