import React from 'react';
import '@mantine/core/styles.css';
import '~/styles/global.css';
import { theme } from '~/styles/theme';
import { Button, MantineProvider } from '@mantine/core';

function IndexPopup() {
  return (
    <MantineProvider theme={theme}>
      <Button>Hello</Button>
    </MantineProvider>
  );
}

export default IndexPopup;
