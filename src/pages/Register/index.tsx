import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { FormikValues, useFormik } from 'formik';
import React from 'react';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      areaCode: 84,
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values: FormikValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card
      border="3px solid #00deff"
      bg="#f3fcfe"
      padding={{ lg: 20, md: 10, sm: 5 }}
      maxW="container.lg
      "
      margin="auto"
    >
      <Center>
        <Text mb={2} fontSize="3xl" fontWeight="bold">
          ĐĂNG KÝ NGAY
        </Text>
      </Center>
      <CardBody>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel mb={7} htmlFor="fullName">
            <Text mb={2} fontSize="1.7rem">
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
              placeholder="Nhập họ và tên của bạn"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
          </FormLabel>

          <FormLabel mb={7} htmlFor="phoneNumber">
            <Text mb={2} fontSize="1.7rem">
              Số điện thoại
            </Text>

            <Flex alignItems="flex-end" gap={3}>
              <Box flex={{ sm: 4, md: 2, lg: 2 }}>
                <Select
                  borderColor="#00deff"
                  borderWidth="3px"
                  bg="#fff"
                  fontSize="1.7rem"
                  size="lg"
                  borderRadius="10px"
                  id="areaCode"
                  name="areaCode"
                  onChange={formik.handleChange}
                  value={formik.values.areaCode}
                >
                  <option value="84">+84</option>
                  <option value="1">+1</option>
                  <option value="2">+2</option>
                </Select>
              </Box>

              <Input
                borderColor="#00deff"
                borderWidth="3px"
                bg="#fff"
                fontSize="1.7rem"
                size="lg"
                borderRadius="10px"
                flex={6}
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Nhập số điện thoại của bạn"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
            </Flex>
          </FormLabel>
          <FormLabel mb={7}>
            <Text mb={2} fontSize="1.7rem">
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
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormLabel>
          <FormLabel mb={7}>
            <Text mb={2} fontSize="1.7rem">
              Mật khẩu
            </Text>
            <Input
              borderColor="#00deff"
              borderWidth="3px"
              bg="#fff"
              fontSize="1.7rem"
              size="lg"
              borderRadius="10px"
              id="password"
              name="password"
              type="text"
              placeholder="Nhập mật khẩu của bạn"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </FormLabel>
          <FormLabel mb={7}>
            <Text mb={2} fontSize="1.7rem">
              Nhập lại mật khẩu
            </Text>
            <Input
              borderColor="#00deff"
              borderWidth="3px"
              bg="#fff"
              fontSize="1.7rem"
              size="lg"
              borderRadius="10px"
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              placeholder="Nhập mật khẩu của bạn"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </FormLabel>

          <Text mb={8} fontSize="1.7rem" color="#000">
            Bằng cách nhấn vào nút &quot;Đăng Ký&quot;, tôi đồn ý với thỏa thuận sử dụng
            và quy định bảo mật của Starunboy
          </Text>

          <Center>
            <Button bg="#ff7d55" border="1px solid #000" fontSize="1.7rem" size="lg">
              Đăng ký
            </Button>
          </Center>
        </form>
      </CardBody>
    </Card>
  );
};

export default Register;
