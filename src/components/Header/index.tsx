import { Box, Flex, Image } from '@chakra-ui/react';
import { ButtonBack } from '../ButtonBack';

type HeaderProps = {
  isBtnBack?: boolean;
};

export function Header({ isBtnBack = false }: HeaderProps) {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1440}
      h='20'
      mx='auto'
      my='2'
      align='center'
      px='6'
    >
      <Flex w='100%' justify='space-around' align='center'>
        {isBtnBack && <ButtonBack />}
        <Image
          objectFit='cover'
          h={{ base: '40px', lg: '100%' }}
          src='./img/logo.png'
          alt='logo'
        />
        {isBtnBack && <Box />}
      </Flex>
    </Flex>
  );
}
