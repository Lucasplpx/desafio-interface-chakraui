import { useRouter } from 'next/router';
import { Button, Image } from '@chakra-ui/react';

export function ButtonBack() {
  const { back } = useRouter();

  function handleBackPage() {
    back();
  }
  return (
    <Button bg='gray.50' onClick={handleBackPage}>
      <Image objectFit='cover' src='./img/btn_back.png' alt='voltar' />
    </Button>
  );
}
