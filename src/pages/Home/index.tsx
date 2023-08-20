import { Box, Center, Flex, Image, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import customerReview from 'src/assets/icon/customer-review.png';
import gameControl from 'src/assets/icon/game-control.png';
import idCard from 'src/assets/icon/id-card.png';
import BackgroundGame from 'src/assets/image/BackgroundGame.png';
import PersonalCard2 from 'src/assets/image/PersonalCard2.png';
import { useMediaQueryLarger750 } from 'src/hooks/useMediaQuery';
import Carousel from './Carousel';
import CarouselProducts from './CarouselProducts';
import CarouselReviewer from './CarouselReviewer';

const Home = () => {
  const isLargerThan750 = useMediaQueryLarger750();

  return (
    <main>
      <Carousel />

      {/* Giới thiệu thẻ */}
      <Box width="82%" marginInline="auto">
        <Center>
          <Text fontWeight="bold" fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} my={10}>
            GIỚI THIỆU
          </Text>
        </Center>

        <Flex flexDirection={isLargerThan750 ? 'row' : 'column'}>
          <Box flex="3">
            <Text fontWeight="bold" fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
              Thẻ cá nhân thông minh tích hợp
            </Text>
            <List spacing={3}>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </Text>
              </ListItem>
            </List>
          </Box>
          <Box flex="2">
            <Image
              src={PersonalCard2}
              height="420px"
              margin={isLargerThan750 ? 0 : '15px auto'}
            />
          </Box>
        </Flex>
      </Box>

      {/* Giới thiệu game */}
      <Box width="82%" marginInline="auto">
        <Center gap={4} my={10}>
          <Image height="60px" src={gameControl} transform="rotate(35deg)" />
          <Text fontWeight="bold" fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
            GIỚI THIỆU VỀ LAVDEV SHOP
          </Text>
          <Image height="60px" src={gameControl} transform="rotate(-35deg)" />
        </Center>

        <Box>
          <Flex flexDirection={isLargerThan750 ? 'row' : 'column'}>
            <List spacing={3} flex={1}>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </Text>
              </ListItem>
            </List>
            <List spacing={3} flex={1}>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '2xl' }}>
                  - Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </Text>
              </ListItem>
            </List>
          </Flex>
          <Box>
            <Center>
              <Image
                width="85%"
                src={BackgroundGame}
                margin={isLargerThan750 ? 0 : '15px auto'}
              />
            </Center>
          </Box>
        </Box>
      </Box>

      {/* Mặt hàng của chúng tôi */}
      <Box marginInline="auto">
        <Center gap={4} my={10}>
          <Image height="60px" src={idCard} />
          <Text fontWeight="bold" fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
            MẶT HÀNG CỦA CHÚNG TÔI
          </Text>
          <Image height="60px" src={idCard} />
        </Center>

        <Box>
          <Text
            width="82%"
            fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
            fontWeight="bold"
            mx="auto"
          >
            Sản phẩm đang hot
          </Text>
          <CarouselProducts />
        </Box>
      </Box>

      {/* Đánh giá từ khách hàng */}
      <Box marginInline="auto">
        <Center gap={4} my={10}>
          <Image height="60px" src={customerReview} />
          <Text fontWeight="bold" fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
            ĐÁNH GIÁ TỪ KHÁCH HÀNG
          </Text>
          <Image height="60px" src={customerReview} />
        </Center>

        <Box width="82%" mx="auto">
          <CarouselReviewer />
        </Box>
      </Box>
    </main>
  );
};

export default Home;
