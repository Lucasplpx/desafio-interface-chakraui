import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { ListTravel } from '../components/ListTravel';

import { Container, Divider, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW={1440}>
      <Header />
      <Banner />

      <ListTravel />
      <Flex justify='center' mt={24}>
        <Divider w='90px' color='gray.300' border='2px' />
      </Flex>
    </Container>
  );
}
