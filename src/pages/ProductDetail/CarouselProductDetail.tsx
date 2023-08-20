import { Box, Button, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider, { Settings } from 'react-slick';

import moveToNext from 'src/assets/icons/move-to-next.png';
// import background from 'src/assets/images/background.png';
import PersonalCard from 'src/assets/images/PersonalCard.png';

import './carousel_product_detail.scss';

export default function CarouselProductDetail() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const settings: Settings = {
    dotsClass: 'dots-class',
    className: 'slick-slider-products',
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
    <Box flex={1} position="relative" width="full" overflow="hidden">
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
      {/* Left Icon */}
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
      {/* Slider */}
      <Box marginInline="auto">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {[1, 2, 3, 4, 5, 6, 7].map((_url, index) => (
            <Box key={index}>
              <Image height="50px" width="100px" src={PersonalCard} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
