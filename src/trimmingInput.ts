import PriceInput from './priceInput'
import ColorInput from './colorInput'
import CompositionInput from './compositionInput'

export default class TrimmingInput {
  integration_id: string | undefined;
  name: string | undefined;
  code: string | undefined;
  description: string | undefined;
  width: number | undefined;
  prices: Array<PriceInput> | undefined;
  colors: Array<ColorInput> | undefined;
  compositions: Array<CompositionInput> | undefined;
  supplier_integration_ids: Array<string> | undefined;
}