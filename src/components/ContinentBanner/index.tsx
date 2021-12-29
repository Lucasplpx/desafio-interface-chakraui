import { Box, Flex, Text } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex as='section'>
      <Box
        w='100%'
        h={[150, 500]}
        bgImage={[
          "url('/img/mobile_banner_europa.png')",
          "url('/img/banner_europa.png')",
        ]}
        backgroundRepeat='no-repeat'
        objectFit='cover'
      >
        <Flex
          align={['center', 'end']}
          justify={['center', 'left']}
          h={['100%', 400]}
          pl={[0, '11rem']}
        >
          <Text color='gray.200' fontSize={['28px', '4xl']} fontWeight={500}>
            Europa
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
