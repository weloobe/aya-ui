import { ThemeProvider } from '@ayahub/ui';
import { Button } from 'antd';

export default () => {
  return (
    <ThemeProvider>
      <Button type="primary">AyaHub</Button>
    </ThemeProvider>
  );
};
