import { AliasToken } from 'antd/es/theme/interface';

import { colorScales } from '@/styles/colors/colors';
import {
  generateColorNeutralPalette,
  generateColorPalette,
} from '@/styles/colors/generateColorPalette';

const primaryToken = generateColorPalette({
  appearance: 'light',
  scale: colorScales.bnw,
  type: 'Primary',
});

const neutralToken = generateColorNeutralPalette({
  appearance: 'light',
  scale: colorScales.gray,
});

const successToken = generateColorPalette({
  appearance: 'light',
  scale: colorScales.green,
  type: 'Success',
});

const warningToken = generateColorPalette({
  appearance: 'light',
  scale: colorScales.orange,
  type: 'Warning',
});

const errorToken = generateColorPalette({
  appearance: 'light',
  scale: colorScales.volcano,
  type: 'Error',
});

const infoToken = generateColorPalette({
  appearance: 'light',
  scale: colorScales.geekblue,
  type: 'Info',
});

const lightBaseToken: Partial<AliasToken> = {
  ...primaryToken,
  ...neutralToken,
  ...successToken,
  ...warningToken,
  ...errorToken,
  ...infoToken,

  boxShadow: '0 20px 20px -8px rgba(0, 0, 0, 0.24)',
  boxShadowSecondary: '0 8px 16px -4px rgba(0, 0, 0, 0.2)',
  boxShadowTertiary: '0 3px 1px -1px rgba(26, 26, 26, 0.06)',
  colorLink: infoToken.colorInfoText,
  colorLinkActive: infoToken.colorInfoTextActive,

  colorLinkHover: infoToken.colorInfoTextHover,
  colorTextLightSolid: neutralToken.colorBgLayout,
};

export default lightBaseToken;
