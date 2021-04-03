import Price from './price'
import Color from './color'
import Composition from './composition'

export default class ThemeClothing {
  integration_id: string | undefined;
  name: string | undefined;
  code: string | undefined;
  description: string | undefined;
  weight: number | undefined;
  width: number | undefined;
  construction: string | undefined;
  shrinkage: string | undefined;
  stretch: string | undefined;
  prices: Array<Price> | undefined;
  colors: Array<Color> | undefined;
  compositions: Array<Composition> | undefined;
  supplier_integration_ids: Array<string> | undefined;
}