import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Checkout = () => {
  return (
    <main>
      <Center my={10}>
        <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} fontWeight="bold">
          THANH TOÁN
        </Text>
      </Center>
      {/* Giới thiệu thẻ */}
      <Box
        width="90%"
        marginInline="auto"
        border="4px solid #3ccdf1"
        borderRadius="20px"
        padding="30px"
      >
        <Flex gap="30px">
          <Box flex={4}>
            <FormLabel mb={7} display="flex">
              <Text mb={2} fontSize="1.7rem" flex={3}>
                Họ và tên
              </Text>
              <Input
                borderColor="#00deff"
                borderWidth="3px"
                bg="#fff"
                fontSize="1.7rem"
                size="lg"
                borderRadius="10px"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Nhập tên của bạn"
                flex={5}
              />
            </FormLabel>
            <FormLabel mb={7} display="flex">
              <Text mb={2} fontSize="1.7rem" flex={3}>
                Email
              </Text>
              <Input
                borderColor="#00deff"
                borderWidth="3px"
                bg="#fff"
                fontSize="1.7rem"
                size="lg"
                borderRadius="10px"
                id="email"
                name="email"
                type="email"
                placeholder="Nhập email của bạn"
                flex={5}
              />
            </FormLabel>
            <FormLabel mb={7} display="flex">
              <Text mb={2} fontSize="1.7rem" flex={3}>
                Số điện thoại
              </Text>
              <Input
                borderColor="#00deff"
                borderWidth="3px"
                bg="#fff"
                fontSize="1.7rem"
                size="lg"
                borderRadius="10px"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Nhập số điện thoại của bạn"
                flex={5}
              />
            </FormLabel>
            <FormLabel mb={7} display="flex">
              <Text mb={2} fontSize="1.7rem" flex={3}>
                Địa chỉ
              </Text>
              <Input
                borderColor="#00deff"
                borderWidth="3px"
                bg="#fff"
                fontSize="1.7rem"
                size="lg"
                borderRadius="10px"
                id="address"
                name="address"
                type="text"
                placeholder="Nhập địa chỉ của bạn"
                flex={5}
              />
            </FormLabel>
          </Box>
          <Box flex={3}>
            <Grid gridTemplateColumns="1fr 1fr 1fr">
              <GridItem>
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} fontWeight="bold">
                  Sản phẩm
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} fontWeight="bold">
                  Số Lượng
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} fontWeight="bold">
                  Giá tiền
                </Text>
              </GridItem>

              {/* Thẻ cao cấp */}
              <GridItem>
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>Thẻ cao cấp</Text>
              </GridItem>
              <GridItem>
                <Text display="flex">
                  <Button fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>-</Button>
                  <Input
                    fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
                    textAlign="right"
                    type="number"
                    defaultValue={1}
                  />
                  <Button fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>+</Button>
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>500.000 đ</Text>
              </GridItem>

              {/* Thẻ cá nhân */}

              <GridItem>
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>Thẻ cá nhân</Text>
              </GridItem>
              <GridItem>
                <Text display="flex">
                  <Button fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>-</Button>
                  <Input
                    fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
                    textAlign="right"
                    type="number"
                    defaultValue={1}
                  />
                  <Button fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>+</Button>
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>200.000 đ</Text>
              </GridItem>
            </Grid>

            <Grid gridTemplateColumns="1fr 1fr 1fr">
              <GridItem gridColumn="1/3">
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>Tổng tiền thẻ</Text>
              </GridItem>

              <GridItem>
                <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>700.000 đ</Text>
              </GridItem>
            </Grid>

            <Box>
              <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>Mã giảm giá</Text>

              <Flex>
                <Input
                  fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
                  textAlign="right"
                  type="text"
                  size="large"
                  padding="10px"
                />
                <Button
                  size="large"
                  padding="10px"
                  fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
                >
                  Áp dụng
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>

        <Box>
          <Center my={10}>
            <Text fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }} fontWeight="bold">
              PHƯƠNG THỨC THANH TOÁN
            </Text>
          </Center>

          <Box>
            <Center>
              <RadioGroup>
                <VStack alignItems="flex-start" justifyContent="flex-start">
                  <FormLabel fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
                    <Radio value="1" width="50px" height="50px" />
                    Thanh toán khi giao hàng
                  </FormLabel>
                  <FormLabel fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
                    <Radio value="2" width="50px" height="50px" />
                    Thanh toán qua ngân hàng
                  </FormLabel>
                  <FormLabel fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}>
                    <Radio value="3" width="50px" height="50px" />
                    Thanh toán qua MOMO
                  </FormLabel>
                </VStack>
              </RadioGroup>
            </Center>

            <Center>
              <Button
                size="large"
                padding={5}
                fontSize={{ base: 'xl', md: 'lg', lg: '3xl' }}
              >
                Thanh toán
              </Button>
            </Center>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Checkout;
