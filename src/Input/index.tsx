import { Input as AntInput, type InputProps as AntdInputProps, type InputRef } from 'antd';
import { TextAreaProps as AntdTextAreaProps, type TextAreaRef } from 'antd/es/input/TextArea';
import { forwardRef } from 'react';

import { useStyles } from './style';

export interface InputProps extends AntdInputProps {
  /**
   * @description Type of the input
   * @default 'ghost'
   */
  type?: 'ghost' | 'block' | 'pure';
}

export const Input = forwardRef<InputRef, InputProps>(
  ({ className, type = 'ghost', ...rest }, ref) => {
    const { styles, cx } = useStyles({ type });

    return (
      <AntInput
        bordered={type !== 'pure'}
        className={cx(styles.input, className)}
        ref={ref}
        {...rest}
      />
    );
  },
);

export interface TextAreaProps extends AntdTextAreaProps {
  /**
   * @description Whether to enable resizing of the textarea
   * @default true
   */
  resize?: boolean;
  /**
   * @description Type of the textarea
   * @default 'ghost'
   */
  type?: 'ghost' | 'block' | 'pure';
}

export const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
  ({ className, type = 'ghost', resize = true, style, ...rest }, ref) => {
    const { styles, cx } = useStyles({ type });

    return (
      <AntInput.TextArea
        bordered={type !== 'pure'}
        className={cx(styles.textarea, className)}
        ref={ref}
        style={resize ? style : { resize: 'none', ...style }}
        {...rest}
      />
    );
  },
);
