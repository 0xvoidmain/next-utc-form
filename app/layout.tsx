import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import AppShellWrapper from '@/components/AppShellWrapper';

export const metadata = {
  title: 'TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI',
  description: 'Nghiên cứu về dịch vụ logistics của Trường Đại học Giao thông vận tải.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/assets/images/LogoUTC.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShellWrapper>{children}</AppShellWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
