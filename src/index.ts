import * as request from "request-promise-native"
import MaterialInput from "./materialInput"
import TrimmingInput from "./trimmingInput"
import SupplierInput from "./supplierInput"
import CustomFieldInput from "./customFieldInput"
import ThemeClothingInput from "./themeClothingInput"
import WorkflowExecutionInput from "./workflowExecutionInput"
import IntegrationOptionInput from "./integrationOptionInput"

export interface IConnectClient {
  upsertMaterials(materialInputs: Array<MaterialInput>): Promise<void>;
  upsertTrimmings(trimmingInputs: Array<TrimmingInput>): Promise<void>;
  upsertSuppliers(supplierInputs: Array<SupplierInput>): Promise<void>;
  updateCustomFields(customFieldInputs: Array<CustomFieldInput>): Promise<void>;
  updateThemeClothings(themeClothingInputs: Array<ThemeClothingInput>): Promise<void>;
  updateThemeClothing(themeClothingInput: ThemeClothingInput): Promise<void>;
  createProductStages(productIds: Array<number>, stageId: number, endsAt: number): Promise<void>;
  completeProductStages(roductIds: Array<number>, stageId: number): Promise<void>;
  updateWorkflowExecution(workflowExecutionInput: WorkflowExecutionInput): Promise<void>;
  updateIntegrationOptions(integrationOptionInputs: Array<IntegrationOptionInput>): Promise<void>;
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

  updateIntegrationOptions(integrationOptionInputs: Array<IntegrationOptionInput>): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/integration_options`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ options: integrationOptionInputs })
    }).then((_) => {
      return
    })
  }

  createProductStages(productIds: Array<number>, stageId: number, endsAt: number): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/product_stages/create`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ product_ids: productIds, stage_id: stageId, ends_at: endsAt })
    }).then((_) => {
      return
    })
  }

  completeProductStages(productIds: Array<number>, stageId: number): Promise<void> {
    return request.put({
      url: `${this.config.apiUrl}/product_stages/complete`,
      headers: {
        "Authorization": this.config.authToken,
      },
      body: JSON.stringify({ product_ids: productIds, stage_id: stageId })
    }).then((_) => {
      return
    })
  }
}
