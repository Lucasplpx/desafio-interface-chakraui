import { Box, Flex, Image, Text } from '@chakra-ui/react';

type CardCityProps = {
  city: string;
  country: string;
  cityImg: string;
  countryLogo: string;
};

export function CardCity({
  city,
  country,
  cityImg,
  countryLogo,
}: CardCityProps) {
  return (
    <Flex flexDir='column'>
      <Image objectFit='cover' src={`./img/cities/${cityImg}.png`} alt='logo' />
      <Flex
        w='100%'
        h='106px'
        align='center'
        justify='space-around'
        bg='white'
        border='1px'
        borderTop='none'
        borderColor='yellow.100'
      >
        <Flex flexDir='column' h='100%' justify='space-evenly'>
          <Text
            fontFamily='Barlow'
            fontWeight={600}
            fontSize='20px'
            lineHeight='25px'
          >
            {city}
          </Text>
          <Text
            fontFamily='Barlow'
            fontWeight={600}
            color='gray.250'
            fontSize='16px'
            lineHeight='25px'
          >
            {country}
          </Text>
        </Flex>
        <Box>
          <Image
            objectFit='cover'
            src={`./img/cities/${countryLogo}.png`}
            alt='logo londres'
          />
        </Box>
      </Flex>
    </Flex>
  );
}
