import { ConfigProvider, type InputRef, Space } from 'antd';
import { RotateCcw, Save } from 'lucide-react';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import ActionIcon from '@/ActionIcon';
import { Input, InputProps } from '@/Input';

export interface ControlInputProps extends Omit<InputProps, 'onChange' | 'value' | 'onAbort'> {
  /**
   * @description Callback function that is triggered when the input value changes
   */
  onChange?: (value: string) => void;
  /**
   * @description Callback function that is triggered when the input value has stopped changing
   */
  onChangeEnd?: (value: string) => void;
  /**
   * @description Callback function that is triggered when the input value is changing
   */
  onValueChanging?: (value: string) => void;
  /**
   * @description The initial value of the input
   */
  value?: string;
}

export const ControlInput = forwardRef<InputRef, ControlInputProps>(
  ({ value, onChange, onValueChanging, onChangeEnd, ...rest }, ref) => {
    const [input, setInput] = useState<string>(value || '');

    const isChineseInput = useRef(false);
    const isFocusing = useRef(false);

    const updateValue = useCallback(() => {
      onChange?.(input);
    }, [input]);

    useEffect(() => {
      if (value !== undefined) setInput(value);
    }, [value]);

    return (
      <Input
        autoFocus
        onBlur={() => {
          isFocusing.current = false;
          onChangeEnd?.(input);
        }}
        onChange={(e) => {
          setInput(e.target.value);
          onValueChanging?.(e.target.value);
        }}
        onCompositionEnd={() => {
          isChineseInput.current = false;
        }}
        onCompositionStart={() => {
          isChineseInput.current = true;
        }}
        onFocus={() => {
          isFocusing.current = true;
        }}
        onPressEnter={(e) => {
          if (!e.shiftKey && !isChineseInput.current) {
            e.preventDefault();
            updateValue();
            isFocusing.current = false;
            onChangeEnd?.(input);
          }
        }}
        ref={ref}
        suffix={
          value === input ? (
            <span />
          ) : (
            <ConfigProvider theme={{ token: { fontSize: 14 } }}>
              <Space size={2}>
                <ActionIcon
                  icon={RotateCcw}
                  onClick={() => {
                    setInput(value as string);
                  }}
                  size="small"
                  title="Reset"
                />
                <ActionIcon icon={Save} onClick={updateValue} size="small" title="✅ Save" />
              </Space>
            </ConfigProvider>
          )
        }
        value={input}
        {...rest}
      />
    );
  },
);
