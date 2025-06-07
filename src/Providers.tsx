import type { PropsWithChildren } from 'react';
import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider } from 'styled-components';

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ConfigProvider>
  );
};

export default Providers;
