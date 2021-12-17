import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

export function ContinentInfo() {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={2} mt='4rem'>
      <GridItem>
        <Text pl='16rem' pr='2.5rem' textAlign='justify'>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </GridItem>
      <GridItem>
        <Flex align='center' justify='space-between' maxW={490} h='100%'>
          <Box textAlign='center'>
            <Text fontSize='2.5rem' fontWeight={600} color='yellow.450'>
              50
            </Text>
            <Text fontSize='1.5rem' fontWeight={600}>
              países
            </Text>
          </Box>
          <Box textAlign='center'>
            <Text fontSize='2.5rem' fontWeight={600} color='yellow.450'>
              60
            </Text>
            <Text fontSize='1.5rem' fontWeight={600}>
              línguas
            </Text>
          </Box>
          <Box textAlign='center'>
            <Text fontSize='2.5rem' fontWeight={600} color='yellow.450'>
              27
            </Text>
            <Text fontSize='1.5rem' fontWeight={600}>
              cidades +100
            </Text>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
