import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { CardCity } from './Card';

export function Cities() {
  return (
    <Flex flexDir='column' maxWidth={1160} h={700} mx='auto' mt='4rem'>
      <Text fontSize='2rem'>Cidades +100</Text>

      <Grid templateColumns='repeat(4, 1fr)' gap={8} mt='2rem'>
        <GridItem>
          <CardCity
            city='Londres'
            country='Reino Unido'
            cityImg='londres'
            countryLogo='logo_londres'
          />
        </GridItem>
        <GridItem>
          <CardCity
            city='Paris'
            country='França'
            cityImg='paris'
            countryLogo='logo_paris'
          />
        </GridItem>
        <GridItem>
          <CardCity
            city='Roma'
            country='Itália'
            cityImg='roma'
            countryLogo='logo_roma'
          />
        </GridItem>
        <GridItem>
          <CardCity
            city='Praga'
            country='República Tcheca'
            cityImg='praga'
            countryLogo='logo_praga'
          />
        </GridItem>
        <GridItem>
          <CardCity
            city='Amsterdã'
            country='Holanda'
            cityImg='amsterda'
            countryLogo='logo_amsterda'
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}
