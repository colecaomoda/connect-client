import Material from "./material"
import Trimming from "./trimming"
import Supplier from "./supplier"

export default interface ConnectClient {
  createMaterials(materials: Array<Material>): Promise<void>;
  createTrimmings(trimmings: Array<Trimming>): Promise<void>;
  createSuppliers(trimmings: Array<Supplier>): Promise<void>;
}