import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ItemTravel } from './ItemTravel';
import { Pointer } from './Pointer';

export function ListTravel() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as='section'
      w='100%'
      maxWidth={{ base: 275, lg: 1160 }}
      mx='auto'
      mt={{ base: 5, lg: 10 }}
    >
      {isWideVersion ? (
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
      ) : (
        <Flex w='100%' h={120} flexDir='column' justify='space-between'>
          <Flex justify='space-between'>
            <ItemTravel sizeW={136} title='vida noturna' />
            <ItemTravel sizeW={68} title='praia' />
          </Flex>
          <Flex justify='space-between'>
            <ItemTravel sizeW={103} title='moderno' />
            <ItemTravel sizeW={93} title='clássico' />
          </Flex>
          <Flex justify='center'>
            <ItemTravel sizeW={96} title='e mais...' />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
