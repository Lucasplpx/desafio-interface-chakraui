import { Flex, Image } from '@chakra-ui/react';

export function Header() {
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
      <Flex w='100%' justify='center'>
        <Image objectFit='cover' src='./img/logo.png' alt='logo' />
      </Flex>
    </Flex>
  );
}
