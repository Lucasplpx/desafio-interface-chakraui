import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

export function ContinentInfo() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      gap={2}
      mt='4rem'
    >
      <GridItem>
        <Text
          pl={{ base: 0, lg: '16rem' }}
          pr={{ base: 0, lg: '2.5rem' }}
          textAlign='justify'
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </GridItem>
      <GridItem>
        <Flex align='center' justify='space-between' maxW={490} h='100%'>
          <Box textAlign={['left', 'center']}>
            <Text
              fontSize={['24px', '2.5rem']}
              fontWeight={[600]}
              color='yellow.450'
            >
              50
            </Text>
            <Text fontSize={['18px', '1.5rem']} fontWeight={[400, 600]}>
              países
            </Text>
          </Box>
          <Box textAlign={['left', 'center']}>
            <Text
              fontSize={['24px', '2.5rem']}
              fontWeight={600}
              color='yellow.450'
            >
              60
            </Text>
            <Text fontSize={['18px', '1.5rem']} fontWeight={[400, 600]}>
              línguas
            </Text>
          </Box>
          <Box textAlign={['left', 'center']}>
            <Text
              fontSize={['24px', '2.5rem']}
              fontWeight={600}
              color='yellow.450'
            >
              27
            </Text>
            <Text fontSize={['18px', '1.5rem']} fontWeight={[400, 600]}>
              cidades +100
            </Text>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
