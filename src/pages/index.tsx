import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW={1440}>
      <Header />
      <Banner />
    </Container>
  );
}
