import { App } from 'antd';
import {
  ThemeProvider as AntdThemeProvider,
  ThemeProviderProps as AntdThemeProviderProps,
  CustomStylishParams,
  CustomTokenParams,
  GetAntdTheme,
  StyleProvider,
} from 'antd-style';
import { memo, useCallback } from 'react';

import { useCdnFn } from '@/ConfigProvider';
import FontLoader from '@/FontLoader';
import { NeutralColors, PrimaryColors, ayaCustomStylish, ayaCustomToken } from '@/styles';
import { createAyaAntdTheme } from '@/styles/theme/antdTheme';
import { AyaCustomToken } from '@/types/customToken';

import GlobalStyle from './GlobalStyle';

export interface ThemeProviderProps extends Omit<AntdThemeProviderProps<any>, 'theme'> {
  customStylish?: (theme: CustomStylishParams) => { [key: string]: any };

  customTheme?: {
    neutralColor?: NeutralColors;
    primaryColor?: PrimaryColors;
  };
  /**
   * @description Custom extra token
   */
  customToken?: (theme: CustomTokenParams) => { [key: string]: any };

  enableWebfonts?: boolean;
  /**
   * @description Webfont loader css strings
   */
  webfonts?: string[];
}

const ThemeProvider = memo<ThemeProviderProps>(
  ({
    children,
    customStylish,
    customToken,
    enableWebfonts = true,
    webfonts,
    customTheme = {},
    ...res
  }) => {
    const genCdnUrl = useCdnFn();
    const webfontUrls = webfonts || [
      genCdnUrl({ path: 'css/index.css', pkg: '@ayahub/webfont-mono', version: '1.0.0' }),
      genCdnUrl({
        path: 'css/index.css',
        pkg: '@ayahub/webfont-harmony-sans',
        version: '1.0.0',
      }),
      genCdnUrl({
        path: 'css/index.css',
        pkg: '@ayahub/webfont-harmony-sans-sc',
        version: '1.0.0',
      }),
      genCdnUrl({ path: 'dist/katex.min.css', pkg: 'katex', version: '0.16.8' }),
    ];

    const stylish = useCallback(
      (theme: CustomStylishParams) => ({ ...ayaCustomStylish(theme), ...customStylish?.(theme) }),
      [customStylish],
    );

    const token = useCallback(
      (theme: CustomTokenParams) => ({ ...ayaCustomToken(theme), ...customToken?.(theme) }),
      [customToken],
    );

    const theme = useCallback<GetAntdTheme>(
      (appearance) =>
        createAyaAntdTheme({
          appearance,
          neutralColor: customTheme.neutralColor,
          primaryColor: customTheme.primaryColor,
        }),
      [customTheme.primaryColor, customTheme.neutralColor],
    );

    return (
      <>
        {enableWebfonts &&
          webfontUrls?.length > 0 &&
          webfontUrls.map((webfont) => <FontLoader key={webfont} url={webfont} />)}
        <StyleProvider speedy={process.env.NODE_ENV === 'production'}>
          <AntdThemeProvider<AyaCustomToken>
            customStylish={stylish}
            customToken={token}
            {...res}
            theme={theme}
          >
            <GlobalStyle />
            <App style={{ minHeight: 'inherit', width: 'inherit' }}>{children}</App>
          </AntdThemeProvider>
        </StyleProvider>
      </>
    );
  },
);

export default ThemeProvider;
