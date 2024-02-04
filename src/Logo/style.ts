import { createStyles } from 'antd-style';

export const LOGO_3D = {
  path: 'assets/logo-3d.webp',
  pkg: '@ayahub/assets-logo',
  version: 'latest',
};
export const LOGO_FLAT = {
  path: 'assets/logo-flat.svg',
  pkg: '@ayahub/assets-logo',
  version: 'latest',
};
export const LOGO_TEXT = {
  path: 'assets/logo-text.svg',
  pkg: '@ayahub/assets-logo',
  version: 'latest',
};
export const LOGO_HIGH_CONTRAST = {
  path: 'assets/logo-high-contrast.svg',
  pkg: '@ayahub/assets-logo',
  version: 'latest',
};

export const useStyles = createStyles(({ css }) => {
  return {
    extraTitle: css`
      font-weight: 300;
      white-space: nowrap;
    `,
  };
});
