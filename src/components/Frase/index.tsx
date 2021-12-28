import { Flex, Text } from '@chakra-ui/react';

export function Frase() {
  return (
    <Flex
      as='section'
      w='100%'
      maxWidth={839}
      mx='auto'
      mt={{ base: 5, lg: 20 }}
      align='center'
    >
      <Flex w='100%' flexDir='column' justify='center' align='center'>
        <Text fontSize={{ base: '20px', lg: '2.25rem' }} fontWeight={500}>
          Vamos nessa?
        </Text>
        <Text fontSize={{ base: '20px', lg: '2.25rem' }} fontWeight={500}>
          Então escolha seu continente
        </Text>
      </Flex>
    </Flex>
  );
}
