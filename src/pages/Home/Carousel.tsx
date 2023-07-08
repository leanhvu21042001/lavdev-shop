import {
  Box,
  Button,
  Heading,
  IconButton,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider, { Settings } from 'react-slick';

import moveToNext from 'src/assets/icon/move-to-next.png';
import background from 'src/assets/image/background.png';
import { useMediaQueryLargerTablet } from 'src/hooks/useMediaQuery';

import './carousel.scss';

export default function Carousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const isLargerThanTablet = useMediaQueryLargerTablet();
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const settings: Settings = {
    dotsClass: 'dots-class',
    dots: true,
    arrows: false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots: React.ReactElement[]) => (
      <Box display="flex" justifyContent="center" gap={4} my={5}>
        {dots.map((dot: React.ReactElement) => {
          return dot.props.className.includes('active') ? (
            <Button
              width="35px"
              height="35px"
              borderRadius="100%"
              border="3px solid #000"
              position="relative"
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                width="50%"
                height="50%"
                backgroundColor="#000"
                borderRadius="100%"
                transform="translate(-50%, -50%)"
              />
            </Button>
          ) : (
            dot
          );
        })}
      </Box>
    ),
    customPaging: () => (
      <Button
        width="35px"
        height="35px"
        borderRadius="100%"
        border="3px solid #000"
        position="relative"
      />
    ),
  };

  return (
    <Box position="relative" width="full" overflow="hidden">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {isLargerThanTablet && (
        <>
          <IconButton
            aria-label="left-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%) rotate(180deg)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${moveToNext})`}
            variant="ghost"
            _hover={{
              backgroundColor: 'unset',
            }}
            rotate="180deg"
          />
          <IconButton
            aria-label="right-arrow"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${moveToNext})`}
            variant="ghost"
            _hover={{
              backgroundColor: 'unset',
            }}
          />
        </>
      )}

      {/* Slider */}
      <Box width="82%" marginInline="auto">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {[1, 2, 3].map((_url, index) => (
            <Box
              key={index}
              height="xl"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={background}
            >
              <Box display="flex" justifyContent="center">
                <Stack
                  spacing={6}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                  textAlign="center"
                  align="center"
                >
                  <Heading
                    fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
                    background="#fff"
                    color="#000"
                    padding="20px 20px 30px 20px"
                    borderRadius="20px"
                    fontWeight="bold"
                  >
                    Giảm giá cho 50 khách hàng đầu tiên
                  </Heading>
                  <Button
                    fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
                    border="2px solid #fff"
                    backgroundColor="#000"
                    color="#fff"
                    padding="30px 40px 40px 40px"
                    fontWeight="bold"
                    _hover={{
                      backgroundColor: '#fff',
                      color: '#000',
                      borderColor: '#000',
                    }}
                  >
                    Mua ngay
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
