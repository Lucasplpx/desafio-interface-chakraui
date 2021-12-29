import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as='section'>
      <Box
        w='100%'
        h={{ base: 163, lg: 368.21 }}
        bgImage="url('/img/background.png')"
        backgroundRepeat='no-repeat'
        display='flex'
      >
        <SimpleGrid columns={isWideVersion ? 2 : 1} spacing={10} w='100%'>
          <Flex
            direction='column'
            w='100%'
            justify='center'
            align={{ base: 'left', lg: 'center' }}
            pl={{ base: 4, lg: 0 }}
          >
            <Text
              mb={5}
              maxWidth={{ base: 238, lg: 426 }}
              maxHeight={{ base: 58, lg: 108 }}
              fontSize={{ base: '20px', lg: 36 }}
              lineHeight={{ base: '30px', lg: '54px' }}
              fontWeight={500}
              color='gray.50'
            >
              5 Continentes, <Text as='span'>infinitas possibilidades.</Text>
            </Text>

            <Text
              maxHeight={{ base: 58, lg: 108 }}
              maxWidth={{ base: '100%', lg: '417px' }}
              color='gray.200'
              fontSize={{ base: '14px', lg: 'inherit' }}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          {isWideVersion && (
            <Flex w='100%' justify='center'>
              <Image
                mt={24}
                w={417.15}
                h={270.74}
                src='./img/airplane.png'
                alt='airplane'
              />
            </Flex>
          )}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
