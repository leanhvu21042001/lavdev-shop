import React from 'react';

import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height={{ lg: '100vh', sm: '100%' }}
      position="relative"
    >
      <Header />
      <Container maxW="container.2xl" as="main">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
