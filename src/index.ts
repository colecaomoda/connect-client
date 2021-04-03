import * as request from "request-promise-native"
import Material from "./material"
import Trimming from "./trimming"
import Supplier from "./supplier"
import CustomField from "./customField"
import ThemeClothing from "./themeClothing"
import WorkflowExecution from "./workflowExecution"

export interface IConnectClient {
  upsertMaterials(materials: Array<Material>): Promise<void>;
  upsertTrimmings(trimmings: Array<Trimming>): Promise<void>;
  upsertSuppliers(trimmings: Array<Supplier>): Promise<void>;
  updateCustomFields(customFields: Array<CustomField>): Promise<void>;
  updateThemeClothing(themeClothing: ThemeClothing): Promise<void>;
  updateWorkflowExecution(workflowExecution: WorkflowExecution): Promise<void>;
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

  upsertMaterials(materials: Array<Material>): Promise<void> {
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

  upsertTrimmings(trimmings: Array<Trimming>): Promise<void> {
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

  upsertSuppliers(suppliers: Array<Supplier>): Promise<void> {
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

  updateCustomFields(customFields: Array<CustomField>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/custom_fields`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ customFields })
    }).then((_) => {
      return
    })
  }

  updateThemeClothing(themeClothing: ThemeClothing): Promise<void> {
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

  updateWorkflowExecution(workflowExecution: WorkflowExecution): Promise<void> {
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
