import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '300': '#47585B',
      '250': '#999999',
      '200': '#DADADA',
      '50': '#F5F8FA',
    },
    yellow: {
      '450': '#FFBA08',
      '100': '#ffdd84',
      '50': '#ffeab1',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.300',
        '--swiper-navigation-color': '#FFBA08',
        '--swiper-pagination-color': '#FFBA08',
      },
    },
  },
});
