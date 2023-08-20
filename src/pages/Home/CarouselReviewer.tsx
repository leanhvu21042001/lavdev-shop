import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider, { Settings } from 'react-slick';

import moveToNext from 'src/assets/icon/move-to-next.png';
import starEmpty from 'src/assets/icon/star-empty.png';
import starYellow from 'src/assets/icon/star-yellow.png';
import myfriend from 'src/assets/image/myfriend.png';
import { useMediaQueryLarger1142 } from 'src/hooks/useMediaQuery';

import './carousel_reviewer.scss';

export default function CarouselReviewer() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const isLargerThan1142 = useMediaQueryLarger1142();

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
      {isLargerThan1142 && (
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
          {[1, 2, 3, 4, 5, 6, 7].map((_url, index) => (
            <Box key={index}>
              <Flex flexDirection={isLargerThan1142 ? 'row' : 'column'}>
                <Box flex="1">
                  <Image
                    width="390px"
                    src={myfriend}
                    margin={isLargerThan1142 ? 0 : 'auto'}
                  />
                </Box>
                <Box flex="1" marginLeft={isLargerThan1142 ? 10 : 0}>
                  <Text textAlign="center" fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
                    &ldquo;Thẻ quá hay chơi game nhận thưởng quá đã, xin info quá tiện
                    lợi&rdquo;
                  </Text>

                  <Text
                    textAlign="center"
                    fontWeight="bold"
                    fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
                    display="flex"
                    gap={4}
                    justifyContent="center"
                  >
                    <span>Lê Anh Vũ</span> <IconStarRating rating={5} />
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

const IconStarRating = ({ rating = 0 }) => {
  return (
    <HStack>
      {[...Array(5)].map((_value, index) => {
        if (rating - 1 >= index) {
          return <Image width="35px" height="35px" key={index} src={starYellow} />;
        }
        return <Image width="35px" height="35px" key={index} src={starEmpty} />;
      })}
    </HStack>
  );
};
