import { ConfigProvider, Logo } from '@ayahub/ui';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }}>
      <Logo />
    </ConfigProvider>
  );
};
