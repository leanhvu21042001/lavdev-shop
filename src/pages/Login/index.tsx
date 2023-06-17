import { Button, Card, CardBody, Center, FormLabel, Input, Text } from '@chakra-ui/react';
import { FormikValues, useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
      maxW="container.lg"
      margin="auto"
      my={20}
    >
      <Center>
        <Text mb={2} fontSize="3xl" fontWeight="bold">
          ĐĂNG NHẬP
        </Text>
      </Center>
      <CardBody>
        <form onSubmit={formik.handleSubmit}>
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

          <Text mb={8} fontSize="1.7rem" color="#1e00ff" textAlign="right">
            <Link to="#">Quên mật khẩu?</Link>
          </Text>

          <Center>
            <Button bg="#ff7d55" border="1px solid #000" fontSize="1.7rem" size="lg">
              Đăng Nhập
            </Button>
          </Center>

          <Center>
            <Text mt={10} fontSize="1.7rem">
              <Link to="#">Chưa có tài khoản?</Link>
            </Text>
          </Center>

          <Center>
            <Text mb={8} fontSize="1.7rem" color="#1e00ff">
              <Link to="#">Đăng ký ngay</Link>
            </Text>
          </Center>
        </form>
      </CardBody>
    </Card>
  );
};

export default Login;
