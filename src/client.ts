import Material from "./material"
import Trimming from "./trimming"

export default interface ConnectClient {
  createMaterials(materials: Array<Material>): Promise<void>;
  createTrimmings(trimmings: Array<Trimming>): Promise<void>;
}