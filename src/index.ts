import * as request from "request-promise-native"
import MaterialInput from "./materialInput"
import TrimmingInput from "./trimmingInput"
import SupplierInput from "./supplierInput"
import CustomFieldInput from "./customFieldInput"
import ThemeClothingInput from "./themeClothingInput"
import WorkflowExecutionInput from "./workflowExecutionInput"

export interface IConnectClient {
  upsertMaterials(materialInputs: Array<MaterialInput>): Promise<void>;
  upsertTrimmings(trimmingInputs: Array<TrimmingInput>): Promise<void>;
  upsertSuppliers(supplierInputs: Array<SupplierInput>): Promise<void>;
  updateCustomFields(customFieldInputs: Array<CustomFieldInput>): Promise<void>;
  updateThemeClothings(themeClothingInputs: Array<ThemeClothingInput>): Promise<void>;
  updateThemeClothing(themeClothingInput: ThemeClothingInput): Promise<void>;
  updateWorkflowExecution(workflowExecutionInput: WorkflowExecutionInput): Promise<void>;
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

  upsertMaterials(materialInputs: Array<MaterialInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/materials`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ materials: materialInputs })
    }).then((_) => {
      return
    })
  }

  upsertTrimmings(trimmingInputs: Array<TrimmingInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/trimmings`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ trimmings: trimmingInputs })
    }).then((_) => {
      return
    })
  }

  upsertSuppliers(supplierInputs: Array<SupplierInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/suppliers`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ suppliers: supplierInputs })
    }).then((_) => {
      return
    })
  }

  updateCustomFields(customFieldInputs: Array<CustomFieldInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/custom_fields`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ custom_fields: customFieldInputs })
    }).then((_) => {
      return
    })
  }

  updateThemeClothings(themeClothingInputs: Array<ThemeClothingInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/theme_clothings`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ theme_clothings: themeClothingInputs })
    }).then((_) => {
      return
    })
  }

  updateThemeClothing(themeClothingInput: ThemeClothingInput): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/theme_clothings/${themeClothingInput.id}`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify(themeClothingInput)
    }).then((_) => {
      return
    })
  }

  updateWorkflowExecution(workflowExecutionInput: WorkflowExecutionInput): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/workflow_executions/${workflowExecutionInput.uuid}`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify(workflowExecutionInput)
    }).then((_) => {
      return
    })
  }
}
