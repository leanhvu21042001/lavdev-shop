import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { range, uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import promotional from 'src/assets/icon/promotional.png';
import starEmpty from 'src/assets/icon/star-empty.png';
import starYellow from 'src/assets/icon/star-yellow.png';
import PersonalCard3 from 'src/assets/image/PersonalCard3.png';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const listProducts = [...Array(8)].map((_value, index) => <Product key={index} />);

  return (
    <Box>
      <Center>
        <Text py={6} mb={2} fontSize="3xl" fontWeight="bold">
          DANH MỤC SẢN PHẨM
        </Text>
      </Center>

      <Grid templateRows="auto" templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <CardCategory />

          <RatingNow />
        </GridItem>
        <GridItem colSpan={4}>
          <Grid templateRows="auto" templateColumns="repeat(4, 1fr)" gap={4}>
            {listProducts}
          </Grid>
        </GridItem>
      </Grid>

      <Pagination
        perPage={5}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        count={15}
      />
    </Box>
  );
};

interface PaginationProps {
  onPageChange: (page: number) => void;
  currentPage: number;
  perPage: number;
  count: number;
}

const Pagination = ({
  onPageChange,
  currentPage,
  perPage = 5,
  count,
}: PaginationProps) => {
  const [page, setPage] = useState(1);

  const items = range(page * perPage - perPage, page * perPage + 1)
    .filter((value) => value !== 0)
    .map((number) => (
      <Button
        size="lg"
        fontSize="1.4rem"
        fontWeight="bold"
        key={uniqueId()}
        onClick={() => {
          onPageChange(number);
        }}
        bg={currentPage === number ? '#f68e8e' : undefined}
        variant="outline"
        border="1px solid #f68e8e"
      >
        {number}
      </Button>
    ));

  useEffect(() => {
    if (page * perPage - perPage === 0) {
      return onPageChange(1);
    }
    return onPageChange(page * perPage - perPage);
  }, [page]);

  return (
    <Box display="flex" gap={3} justifyContent="center" my={10}>
      <Button
        size="lg"
        fontSize="1.4rem"
        fontWeight="bold"
        disabled={page <= 0}
        onClick={() => {
          setPage((prev) => {
            if (prev - 1 <= 0) return 1;
            return prev - 1;
          });
        }}
        variant="outline"
        border="1px solid #f68e8e"
      >
        Trước
      </Button>
      {items}
      <Button
        size="lg"
        fontSize="1.4rem"
        fontWeight="bold"
        onClick={() => {
          setPage((prev) => {
            if (page >= Math.floor(count / perPage)) return Math.floor(count / perPage);
            return prev + 1;
          });
        }}
        variant="outline"
        border="1px solid #f68e8e"
      >
        Kế tiếp
      </Button>
    </Box>
  );
};

const Product = () => {
  return (
    <Card border="3px solid #00deff" borderRadius="30px">
      <CardBody textAlign="center">
        <Box position="relative" width="fit-content" height="fit-content" marginX="auto">
          <Image src={PersonalCard3} alt="Personal card 3" height="140px" />
          <Image
            height="40px"
            transform="rotate(50deg)"
            src={promotional}
            position="absolute"
            top="0"
            right="-10px"
          />
        </Box>
        <Stack spacing="2">
          <Heading fontSize="1.5rem" fontWeight="bold">
            Thẻ cao cấp
          </Heading>
          <Text fontSize="1.2rem" width="fit-content">
            Thiết kế theo ý của bạn
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
        <Box display="flex" gap={5} padding={0}>
          <Text as="del" fontSize="2xl" display="flex" flexDirection="row">
            <Box>300.000</Box>
            <Box>đ</Box>
          </Text>
          <Text fontWeight="bold" fontSize="2xl" display="flex" flexDirection="row">
            <Box>250.000</Box>
            <Box>đ</Box>
          </Text>
        </Box>
      </CardFooter>
    </Card>
  );
};

const CardCategory = () => {
  return (
    <Card border="3px solid #00deff" borderRadius="20px" marginX={2}>
      <CardBody>
        <Stack spacing="2" textAlign="center">
          <Heading fontSize="1.5rem" fontWeight="bold">
            Danh mục thẻ
          </Heading>
          <Text fontWeight="400" fontSize="1.5rem">
            Thẻ cá nhân
          </Text>
          <Text fontWeight="400" fontSize="1.5rem">
            Thẻ doanh nghiệp
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

const RatingNow = () => {
  return (
    <Card mt={7} border="3px solid #00deff" borderRadius="20px" marginX={2}>
      <CardBody>
        <Stack spacing="2" textAlign="center">
          <Heading fontSize="1.5rem" fontWeight="bold">
            Đánh giá ngay
          </Heading>
          <RadioGroup>
            <Stack direction="column" alignItems="center">
              <Radio
                value="5"
                py="4px"
                marginX="auto"
                _before={{ width: '0px !important', height: '0px !important' }}
                borderRadius="unset"
                transform="scale(1.5)"
                border="1px solid #000"
              >
                <IconStarRating rating={5} />
              </Radio>
              <Radio
                value="4"
                py="4px"
                marginX="auto"
                _before={{ width: '0px !important', height: '0px !important' }}
                borderRadius="unset"
                transform="scale(1.5)"
                border="1px solid #000"
              >
                <IconStarRating rating={4} />
              </Radio>
              <Radio
                value="3"
                py="4px"
                marginX="auto"
                _before={{ width: '0px !important', height: '0px !important' }}
                borderRadius="unset"
                transform="scale(1.5)"
                border="1px solid #000"
              >
                <IconStarRating rating={3} />
              </Radio>
              <Radio
                value="2"
                py="4px"
                marginX="auto"
                _before={{ width: '0px !important', height: '0px !important' }}
                borderRadius="unset"
                transform="scale(1.5)"
                border="1px solid #000"
              >
                <IconStarRating rating={2} />
              </Radio>
              <Radio
                value="1"
                py="4px"
                marginX="auto"
                _before={{ width: '0px !important', height: '0px !important' }}
                borderRadius="unset"
                transform="scale(1.5)"
                border="1px solid #000"
              >
                <IconStarRating rating={1} />
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};

const IconStarRating = ({ rating = 0 }) => {
  return (
    <HStack>
      {[...Array(5)].map((_value, index) => {
        if (rating - 1 >= index) {
          return <Image width="20px" height="20px" key={index} src={starYellow} />;
        }
        return <Image width="20px" height="20px" key={index} src={starEmpty} />;
      })}
    </HStack>
  );
};

export default Products;
