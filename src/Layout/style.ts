import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, stylish, responsive }, headerHeight: number) => {
  const baseGlass = css`
    pointer-events: none;
    content: '';
    user-select: none;

    position: absolute;
    z-index: -1;
    inset: -1px 0 ${responsive.mobile ? '-25%' : '-50%'};
  `;
  return {
    app: css`
      overflow-x: hidden;
      overflow-y: auto;
      height: 100dvh;
    `,
    aside: css`
      position: sticky;
      z-index: 2;
      height: 100%;
    `,
    asideInner: css`
      overflow-x: hidden;
      overflow-y: auto;
      width: 100%;
      height: calc(100dvh - ${headerHeight}px);
    `,
    content: css`
      position: relative;
      flex: 1;
      max-width: 100%;
    `,

    footer: css`
      position: relative;
      max-width: 100%;
    `,
    glass: css`
      z-index: 0;

      &::before {
        ${stylish.blur};
        ${baseGlass};
        mask-image: linear-gradient(to bottom, black ${headerHeight}px, transparent);
      }

      &::after {
        ${baseGlass};
      }
    `,
    header: css`
      position: sticky;
      z-index: 999;
      top: 0;
      max-width: 100%;
    `,
    main: css`
      position: relative;
      display: flex;
      align-items: stretch;
      max-width: 100vw;
    `,
    toc: css``,
  };
});
