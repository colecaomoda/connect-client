import CustomFieldInput from './customFieldInput'

export default class ThemeClothingInput {
  id: number | undefined;
  code?: string | undefined;
  custom_fields?: Array<CustomFieldInput> | undefined;
}