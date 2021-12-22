import { Container } from '@chakra-ui/react';
import { Cities } from '../../components/Cities';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Header } from '../../components/Header';

export default function Home() {
  return (
    <Container maxW={1440}>
      <Header isBtnBack />
      <ContinentBanner />
      <ContinentInfo />
      <Cities />
    </Container>
  );
}
