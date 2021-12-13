import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '300': '#47585B',
      '50': '#F5F8FA',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.300',
      },
    },
  },
});
