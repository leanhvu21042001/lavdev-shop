import { Box, Button, Center, Flex, Image, Input, Spacer, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

// import CarouselProductDetail from './CarouselProductDetail';
import creditCard from 'src/assets/icon/credit-card.png';
import pen from 'src/assets/icon/pen.png';
import priceTag from 'src/assets/icon/price-tag.png';
import receiver from 'src/assets/icon/receiver.png';
import PersonalCard from 'src/assets/image/PersonalCard.png';
import CarouselProducts from './CarouselProducts';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <main>
      <Center my={10}>
        <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} fontWeight="bold">
          CHI TIẾT SẢN PHẨM
        </Text>
      </Center>
      {/* Giới thiệu thẻ */}
      <Box width="90%" marginInline="auto" border="4px solid #3ccdf1" borderRadius="20px">
        <Flex>
          <Box flex="6" borderRight="4px solid #3ccdf1" padding="20px">
            <Image borderRadius="20px 20px 0 0" src={PersonalCard} />
          </Box>
          <Box flex="13" padding="20px" display="flex" gap="20px" flexDirection="column">
            <Box display="flex" gap={2}>
              <Image src={creditCard} height="50px" />
              <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} fontWeight="bold">
                Thẻ cao cấp
              </Text>
            </Box>
            <Box display="flex" gap={2}>
              <Image src={priceTag} height="50px" />
              <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>Giá: 250.000 đ</Text>
            </Box>
            <Box display="flex" gap={2}>
              <Image src={pen} height="50px" />
              <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
                Mô tả: Thẻ cá nhân cao cấp giúp bạn có thể tùy chỉnh giao diện thẻ theo ý
                của mình, bạn chỉ cần gửi một mẫu giao diện mà bạn thích hoặc bạn chỉ cần
                gọi ý mẫu giao diện mà bạn cần thì chúng tôi sẽ có thể tự thiết kế riêng
                cho bạn, thẻ cao cấp giúp bạn tùy thích theo phong cách cá nhân của mình a
              </Text>
            </Box>

            <Box display="flex" alignItems="center" flexWrap="wrap" gap={5}>
              <Box display="inline-flex" width="fit-content">
                <Button
                  onClick={() =>
                    setQuantity((prev) => {
                      const value = prev - 1;
                      return value < 0 ? 0 : value;
                    })
                  }
                  size="lg"
                  fontSize="4xl"
                  border="2px solid #000"
                  borderRadius="unset"
                  fontWeight="bold"
                >
                  -
                </Button>
                <Input
                  onChange={({ target }) => setQuantity(Number(target.value))}
                  textAlign="right"
                  width="80px"
                  type="number"
                  value={quantity}
                  size="lg"
                  fontSize="4xl"
                  border="2px solid #000"
                  borderRadius="unset"
                />
                <Button
                  onClick={() => setQuantity((prev) => ++prev)}
                  size="lg"
                  fontSize="4xl"
                  border="2px solid #000"
                  borderRadius="unset"
                  fontWeight="bold"
                >
                  +
                </Button>
              </Box>

              <Button
                size="lg"
                fontSize="2xl"
                border="2px solid #000"
                fontWeight="bold"
                padding="30px"
                backgroundColor="#000"
                color="#fff"
                _hover={{
                  backgroundColor: '#fff',
                  color: '#000',
                }}
              >
                Mua ngay
              </Button>

              <Button
                size="lg"
                fontSize="2xl"
                border="2px solid #000"
                fontWeight="bold"
                padding="30px"
                backgroundColor="#000"
                color="#fff"
                _hover={{
                  backgroundColor: '#fff',
                  color: '#000',
                }}
              >
                Thêm vào giỏ hàng
              </Button>

              <Button
                size="lg"
                fontSize="2xl"
                border="2px solid #000"
                fontWeight="bold"
                padding="30px"
              >
                <Image height="50px" src={receiver} />
                Liên hệ tư vấn
              </Button>

              <Button
                size="lg"
                fontSize="2xl"
                border="2px solid #000"
                fontWeight="bold"
                padding="30px"
              >
                <Image height="50px" src={receiver} />
                Chia sẻ ngay
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Mặt hàng của chúng tôi */}
      <Box marginInline="auto" mt={10}>
        <Box>
          <Flex width="80%" mx="auto">
            <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} fontWeight="bold">
              Sản phẩm liên quan
            </Text>

            <Spacer />
            <Text
              color="#086ef8"
              fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
              fontWeight="bold"
            >
              Xem thêm
            </Text>
          </Flex>
          <CarouselProducts />
        </Box>
      </Box>
    </main>
  );
};

export default ProductDetail;
