import CustomFieldValueInput from './customFieldValueInput'

export default class CustomFieldInput {
  integration_id: string | undefined;
  alias: string | undefined;
  values: Array<CustomFieldValueInput> | undefined;
}