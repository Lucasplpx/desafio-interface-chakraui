import { Box, Flex, Text } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex as='section'>
      <Box
        w='100%'
        h={500}
        bgImage="url('/img/banner_europa.png')"
        backgroundRepeat='no-repeat'
      >
        <Flex align='end' h={400} pl='11rem'>
          <Text color='gray.200' fontSize='4xl' fontWeight={500}>
            Europa
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
