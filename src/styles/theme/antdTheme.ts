import { ThemeConfig } from 'antd';
import { ThemeAppearance } from 'antd-style';

import { NeutralColors, PrimaryColors } from '@/styles';

import { darkAlgorithm } from './algorithms/darkAlgorithm';
import { lightAlgorithm } from './algorithms/lightAlgorithm';
import { baseToken } from './token/base';

export interface AyaAntdThemeParams {
  appearance: ThemeAppearance;
  neutralColor?: NeutralColors;
  primaryColor?: PrimaryColors;
}

/**
 * create A AyaHub Style Antd Theme Object
 * @param neutralColor
 * @param appearance
 * @param primaryColor
 */
export const createAyaAntdTheme = ({
  neutralColor,
  appearance,
  primaryColor,
}: AyaAntdThemeParams): ThemeConfig => {
  const isDark = appearance === 'dark';

  return {
    algorithm: isDark ? darkAlgorithm : lightAlgorithm,
    token: {
      ...baseToken,
      // @ts-ignore
      neutralColor,
      primaryColor,
    },
  };
};
