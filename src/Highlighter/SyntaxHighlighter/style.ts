import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, cx, prefixCls, stylish }) => {
  const prefix = `${prefixCls}-highlighter`;

  return {
    loading: cx(
      stylish.blur,
      css`
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;

        height: 34px;
        padding: 0 8px;

        font-family: ${token.fontFamilyCode};
        color: ${token.colorTextTertiary};

        border-radius: ${token.borderRadius};
      `,
    ),
    prism: css`
      pre {
        overflow: auto;
        font-family: ${token.fontFamilyCode} !important;
      }
    `,
    shiki: cx(
      `${prefix}-shiki`,
      css`
        margin: 0;
        padding: 0;

        .shiki {
          overflow-x: auto;
          margin: 0;
          padding: 0;
          background: none !important;
        }
      `,
    ),
    unshiki: css`
      color: ${token.colorTextDescription};
    `,
  };
});
