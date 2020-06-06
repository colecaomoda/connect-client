import Price from './price'
import Color from './color'
import Composition from './composition'

export default class Trimming {
  integration_id: string | undefined;
  name: string | undefined;
  code: string | undefined;
  description: string | undefined;
  width: number | undefined;
  prices: Array<Price> | undefined;
  colors: Array<Color> | undefined;
  compositions: Array<Composition> | undefined;
  supplier_integration_ids: Array<string> | undefined;
}