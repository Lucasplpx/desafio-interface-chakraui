import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex as='section'>
      <Box
        w='100%'
        h={368.21}
        bgImage="url('/img/background.png')"
        backgroundRepeat='no-repeat'
        display='flex'
      >
        <SimpleGrid columns={2} spacing={10} w='100%'>
          <Flex direction='column' w='100%' justify='center' align='center'>
            <Text
              mb={5}
              maxWidth={426}
              maxHeight={108}
              fontSize={36}
              lineHeight='54px'
              fontWeight={500}
              color='gray.50'
            >
              5 Continentes, <Text>infinitas possibilidades.</Text>
            </Text>

            <Text color='gray.200'>
              Chegou a hora de tirar do papel a viagem que você
              <Text>sempre sonhou.</Text>
            </Text>
          </Flex>
          <Flex w='100%' justify='center'>
            <Image
              mt={24}
              w={417.15}
              h={270.74}
              src='./img/airplane.png'
              alt='airplane'
            />
          </Flex>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
