import CustomField from './customField'

export default class Price {
  value: number | undefined;
  type: string | undefined;
  supplier_integration_id: string | undefined;
  custom_fields: Array<CustomField> | undefined;
}