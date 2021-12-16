import { Container } from '@chakra-ui/react';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';

export default function Home() {
  return (
    <Container maxW={1440}>
      <Header />
      <ContinentBanner />
    </Container>
  );
}
