import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';

export function ListTravel() {
  return (
    <Flex as='section' w='100%' maxWidth={1160} mx='auto' mt={10}>
      <Flex w='100%' justify='space-between'>
        <Center flexDir='column'>
          <Image objectFit='cover' src='./img/cocktail.png' alt='coktail' />
          <Text mt={5} color='gray.300' fontWeight={600}>
            vida noturna
          </Text>
        </Center>
        <Center flexDir='column'>
          <Image objectFit='cover' src='./img/surf.png' alt='surf' />
          <Text mt={5} color='gray.300' fontWeight={600}>
            praia
          </Text>
        </Center>
        <Center flexDir='column'>
          <Image objectFit='cover' src='./img/building.png' alt='building' />
          <Text mt={5} color='gray.300' fontWeight={600}>
            moderno
          </Text>
        </Center>
        <Center flexDir='column'>
          <Image objectFit='cover' src='./img/museum.png' alt='museum' />
          <Text mt={5} color='gray.300' fontWeight={600}>
            clássico
          </Text>
        </Center>
        <Center flexDir='column'>
          <Image objectFit='cover' src='./img/earth.png' alt='earth' />
          <Text mt={5} color='gray.300' fontWeight={600}>
            e mais...
          </Text>
        </Center>
      </Flex>
    </Flex>
  );
}
