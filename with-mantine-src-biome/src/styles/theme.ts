import {
  createTheme,
  type MantineColorsTuple,
  type MantineThemeOverride,
} from '@mantine/core';

const primaryColor: MantineColorsTuple = [
  '#f4ecfd',
  '#e4d4f7',
  '#c8a5f1',
  '#aa74eb',
  '#914ae7',
  '#8231e4',
  '#7a24e4',
  '#6819cb',
  '#5d15b5',
  '#500e9f',
];

export const theme: MantineThemeOverride = createTheme({
  colors: {
    primaryColor,
  },
  primaryColor: 'primaryColor',
});
