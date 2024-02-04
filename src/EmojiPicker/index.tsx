import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Popover } from 'antd';
import { memo } from 'react';
import useSWR from 'swr';
import useMergeState from 'use-merge-value';

import Avatar from '@/Avatar';

import { useStyles } from './style';

export interface EmojiPickerProps {
  backgroundColor?: string;
  defaultAvatar?: string;
  locale?: string;
  onChange?: (emoji: string) => void;
  value?: string;
}

const EmojiPicker = memo<EmojiPickerProps>(
  ({
    value,
    defaultAvatar = '🤖',
    backgroundColor = 'rgba(0,0,0,0)',
    onChange,
    locale = 'en-US',
  }) => {
    const { styles } = useStyles();

    const { data: i18n } = useSWR(
      locale,
      async () => await import(`@emoji-mart/data/i18n/${locale.split('-')[0]}.json`),
      { revalidateOnFocus: false },
    );

    const [ava, setAva] = useMergeState('🤖', {
      defaultValue: defaultAvatar,
      onChange,
      value,
    });

    return (
      <Popover
        content={
          <div className={styles.picker}>
            <Picker
              data={data}
              i18n={i18n}
              locale={locale.split('-')[0]}
              onEmojiSelect={(e: any) => setAva(e.native)}
              skinTonePosition={'none'}
              theme={'auto'}
            />
          </div>
        }
        placement={'left'}
        rootClassName={styles.popover}
        trigger={'click'}
      >
        <div className={styles.avatar} style={{ width: 'fit-content' }}>
          <Avatar avatar={ava} background={backgroundColor} size={44} />
        </div>
      </Popover>
    );
  },
);

export default EmojiPicker;
