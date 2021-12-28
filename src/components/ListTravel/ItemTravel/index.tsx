import { Flex, Text } from '@chakra-ui/react';
import { Pointer } from '../Pointer';

type ItemTravelProps = {
  title: string;
  sizeW: number;
};

export function ItemTravel({ title, sizeW }: ItemTravelProps) {
  return (
    <Flex justify='space-between' align='center' width={sizeW + 'px'}>
      <Pointer />
      <Text color='gray.300' fontSize='18px' lineHeight='27px' fontWeight={500}>
        {title}
      </Text>
    </Flex>
  );
}
