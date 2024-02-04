import 'antd-style';

import { AyaCustomStylish } from './customStylish';
import { AyaCustomToken } from './customToken';

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends AyaCustomToken {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomStylish extends AyaCustomStylish {}
}
