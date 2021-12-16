import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Flex, Text } from '@chakra-ui/react';

import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation]);

export function SlideContinents() {
  return (
    <Flex h={450} as='section' w='100%' maxWidth={1240} mx='auto' my={10}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <Box
            w='100%'
            h='100%'
            bgImage="url('/img/europa.png')"
            backgroundRepeat='no-repeat'
          >
            <Flex
              w='100%'
              h='100%'
              flexDir='column'
              justify='center'
              align='center'
            >
              <Text fontSize='1.5rem' color='gray.200'>
                Europa
              </Text>
              <Text fontSize='1.5rem' color='gray.200'>
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w='100%'
            h='100%'
            bgImage="url('/img/america_norte.png')"
            backgroundRepeat='no-repeat'
          >
            <Flex
              w='100%'
              h='100%'
              flexDir='column'
              justify='center'
              align='center'
            >
              <Text fontSize='1.5rem' color='gray.200'>
                América do Norte
              </Text>
              <Text fontSize='1.5rem' color='gray.200'>
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w='100%'
            h='100%'
            bgImage="url('/img/america_sul.png')"
            backgroundRepeat='no-repeat'
          >
            <Flex
              w='100%'
              h='100%'
              flexDir='column'
              justify='center'
              align='center'
            >
              <Text fontSize='1.5rem' color='gray.200'>
                América do Sul
              </Text>
              <Text fontSize='1.5rem' color='gray.200'>
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w='100%'
            h='100%'
            bgImage="url('/img/asia.png')"
            backgroundRepeat='no-repeat'
          >
            <Flex
              w='100%'
              h='100%'
              flexDir='column'
              justify='center'
              align='center'
            >
              <Text fontSize='1.5rem' color='gray.200'>
                Ásia
              </Text>
              <Text fontSize='1.5rem' color='gray.200'>
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w='100%'
            h='100%'
            bgImage="url('/img/africa.png')"
            backgroundRepeat='no-repeat'
          >
            <Flex
              w='100%'
              h='100%'
              flexDir='column'
              justify='center'
              align='center'
            >
              <Text fontSize='1.5rem' color='gray.200'>
                África
              </Text>
              <Text fontSize='1.5rem' color='gray.200'>
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w='100%'
            h='100%'
            bgImage="url('/img/oceania.png')"
            backgroundRepeat='no-repeat'
          >
            <Flex
              w='100%'
              h='100%'
              flexDir='column'
              justify='center'
              align='center'
            >
              <Text fontSize='1.5rem' color='gray.200'>
                Oceania
              </Text>
              <Text fontSize='1.5rem' color='gray.200'>
                O continente mais antigo.
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
