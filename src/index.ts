import * as request from "request-promise-native"
import MaterialInput from "./materialInput"
import TrimmingInput from "./trimmingInput"
import SupplierInput from "./supplierInput"
import CustomFieldInput from "./customFieldInput"
import ThemeClothingInput from "./themeClothingInput"
import WorkflowExecutionInput from "./workflowExecutionInput"

export interface IConnectClient {
  upsertMaterials(materials: Array<MaterialInput>): Promise<void>;
  upsertTrimmings(trimmings: Array<TrimmingInput>): Promise<void>;
  upsertSuppliers(trimmings: Array<SupplierInput>): Promise<void>;
  updateCustomFields(customFields: Array<CustomFieldInput>): Promise<void>;
  updateThemeClothings(themeClothing: Array<ThemeClothingInput>): Promise<void>;
  updateThemeClothing(themeClothings: ThemeClothingInput): Promise<void>;
  updateWorkflowExecution(workflowExecution: WorkflowExecutionInput): Promise<void>;
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

  upsertMaterials(materials: Array<MaterialInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/materials`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ materials })
    }).then((_) => {
      return
    })
  }

  upsertTrimmings(trimmings: Array<TrimmingInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/trimmings`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ trimmings })
    }).then((_) => {
      return
    })
  }

  upsertSuppliers(suppliers: Array<SupplierInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/suppliers`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ suppliers })
    }).then((_) => {
      return
    })
  }

  updateCustomFields(customFields: Array<CustomFieldInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/custom_fields`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ custom_fields: customFields })
    }).then((_) => {
      return
    })
  }

  updateThemeClothings(themeClothings: Array<ThemeClothingInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/theme_clothings`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ theme_clothings: themeClothings })
    }).then((_) => {
      return
    })
  }

  updateThemeClothing(themeClothing: ThemeClothingInput): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/theme_clothings/${themeClothing.id}`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify(themeClothing)
    }).then((_) => {
      return
    })
  }

  updateWorkflowExecution(workflowExecution: WorkflowExecutionInput): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/workflow_executions/${workflowExecution.uuid}`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify(workflowExecution)
    }).then((_) => {
      return
    })
  }
}
