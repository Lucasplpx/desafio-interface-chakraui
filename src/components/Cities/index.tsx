import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { CardCity } from './Card';

export function Cities() {
  return (
    <Flex
      flexDir='column'
      maxWidth={1160}
      h={700}
      mx='auto'
      mt={['2rem', '4rem']}
    >
      <Text fontSize='2rem' fontWeight={500}>
        Cidades +100
      </Text>

      <Flex flexDir='column' align='center'>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
          gap={8}
          mt='2rem'
          pb={['40px', 0]}
        >
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
    </Flex>
  );
}
