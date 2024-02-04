import { useResponsive } from 'antd-style';
import { forwardRef } from 'react';
import { Flexbox } from 'react-layout-kit';

import FluentEmoji from '@/FluentEmoji';
import { DivProps } from '@/types';

import { ICON_SIZE, useStyles } from './style';

export interface TokenTagProps extends DivProps {
  /**
   * @default 'left'
   */
  displayMode?: 'remained' | 'used';
  /**
   * @description Maximum value for the token
   */
  maxValue: number;
  shape?: 'round' | 'square';
  text?: {
    overload?: string;
    remained?: string;
    used?: string;
  };
  /**
   * @description Current value of the token
   */
  value: number;
}

const TokenTag = forwardRef<HTMLDivElement, TokenTagProps>(
  (
    { className, displayMode = 'remained', maxValue, value, text, shape = 'round', ...rest },
    ref,
  ) => {
    const { mobile } = useResponsive();
    const valueLeft = maxValue - value;
    const percent = valueLeft / maxValue;
    let type: 'normal' | 'low' | 'overload';
    let emoji;

    if (percent > 0.3) {
      type = 'normal';
      emoji = '😀';
    } else if (percent > 0) {
      type = 'low';
      emoji = '😅';
    } else {
      type = 'overload';
      emoji = '🤯';
    }

    const { styles, cx } = useStyles({ shape, type });

    return (
      <Flexbox
        align={'center'}
        className={cx(styles.container, className)}
        flex={'none'}
        gap={4}
        horizontal
        ref={ref}
        {...rest}
      >
        <FluentEmoji emoji={emoji} size={ICON_SIZE} />
        {valueLeft > 0
          ? [
              mobile
                ? ''
                : displayMode === 'remained'
                ? text?.remained || 'Remained'
                : text?.used || 'Used',
              displayMode === 'remained' ? valueLeft : value,
            ].join(' ')
          : text?.overload || 'Overload'}
      </Flexbox>
    );
  },
);

export default TokenTag;
