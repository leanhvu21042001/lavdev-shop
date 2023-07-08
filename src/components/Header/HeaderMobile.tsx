import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import active from 'src/assets/icon/active.png';
import messenger from 'src/assets/icon/messenger.png';

const HeaderMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <header>
        <Box textAlign="center" fontWeight="bold" fontSize="4xl">
          STARUNBOY
        </Box>
        <Box
          bg="#61def8"
          display="flex"
          alignItems="center"
          padding="10px"
          paddingX={7}
          justifyContent="flex-end"
        >
          <Button colorScheme="teal" onClick={onOpen}>
            <HamburgerIcon />
          </Button>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>

              <DrawerBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={4}
              >
                <Box me="1rem">
                  <Link to="/">
                    <Button
                      fontSize={{
                        xl: '1.9rem',
                        lg: '1.5rem',
                        md: '1rem',
                        sm: '1rem',
                      }}
                      fontWeight="bold"
                      variant="link"
                      color="#000"
                    >
                      Trang chủ
                    </Button>
                  </Link>
                </Box>
                <Box me="1rem">
                  <Link to="/san-pham">
                    <Button
                      fontSize={{
                        xl: '1.9rem',
                        lg: '1.5rem',
                        md: '1rem',
                        sm: '1rem',
                      }}
                      fontWeight="bold"
                      variant="link"
                      color="#000"
                    >
                      Sản phẩm
                    </Button>
                  </Link>
                </Box>

                <Box me="1rem">
                  <Link to="/user-guide">
                    <Button
                      fontSize={{
                        xl: '1.9rem',
                        lg: '1.5rem',
                        md: '1rem',
                        sm: '1rem',
                      }}
                      fontWeight="bold"
                      variant="link"
                      color="#000"
                    >
                      Hướng dẫn sử dụng
                    </Button>
                  </Link>
                </Box>

                <Box>
                  <Image width="30px" src={active} alt="active" />
                </Box>
                <Box>
                  <Image width="30px" src={messenger} alt="messenger" />
                </Box>

                <Box>
                  <Link to="/dang-nhap">
                    <Button
                      fontSize={{
                        xl: '1.9rem',
                        lg: '1.5rem',
                        md: '1rem',
                        sm: '0.8rem',
                      }}
                      fontWeight="bold"
                      bg="#000"
                      color="#fff"
                      padding="30px 20px"
                      borderRadius="15px"
                      border="2px solid #fff"
                      _hover={{ bg: '#ebedf0', color: '#000' }}
                    >
                      Đăng nhập
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link to="/dang-ky">
                    <Button
                      fontSize={{
                        xl: '1.9rem',
                        lg: '1.5rem',
                        md: '1rem',
                        sm: '0.8rem',
                      }}
                      fontWeight="bold"
                      bg="#000"
                      color="#fff"
                      padding="30px 20px"
                      borderRadius="15px"
                      border="2px solid #fff"
                      _hover={{ bg: '#ebedf0', color: '#000' }}
                    >
                      Đăng ký
                    </Button>
                  </Link>
                </Box>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </header>
    </>
  );
};

export default HeaderMobile;
