import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ cx, css, token }, { type, resize }: { resize: boolean; type: 'ghost' | 'block' | 'pure' }) => {
    const typeStylish = css`
      padding: 8px 12px;

      background-color: ${type === 'block' ? token.colorFillTertiary : 'transparent'};
      border: 1px solid ${type === 'block' ? 'transparent' : token.colorBorderSecondary};
      border-radius: ${token.borderRadius}px;

      transition:
        background-color 100ms ${token.motionEaseOut},
        border-color 200ms ${token.motionEaseOut};

      &:hover {
        background-color: ${type === 'block'
          ? token.colorFillSecondary
          : token.colorFillQuaternary};
        border-color: ${token.colorBorder};
      }
    `;
    return {
      container: cx(
        type !== 'pure' && typeStylish,
        css`
          overflow-x: hidden;
          overflow-y: auto;
          width: 100%;
          height: fit-content;
        `,
      ),
      editor: css`
        resize: ${resize ? 'vertical' : 'none'};
        height: fit-content;
        min-height: 100%;
        font-family: ${token.fontFamilyCode} !important;

        textarea {
          min-height: 36px !important;
        }

        pre {
          min-height: 36px !important;
          word-break: break-all;
          word-wrap: break-word;
          white-space: pre-wrap;

          &.shiki {
            margin: 0;
          }
        }
      `,
      textarea: css`
        overflow-x: hidden;
        overflow-y: auto;

        height: 100% !important;

        color: transparent !important;
        word-break: break-all !important;
        word-wrap: break-word !important;

        caret-color: ${token.colorText};

        -webkit-text-fill-color: unset !important;

        &::placeholder {
          color: ${token.colorTextQuaternary};
        }

        &:focus {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
      `,
    };
  },
);
