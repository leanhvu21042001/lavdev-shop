import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const CardCategory = () => {
  return (
    <Card border="3px solid #00deff" borderRadius="30px">
      <CardBody textAlign="center">
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

export default CardCategory;
