import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import active from 'src/assets/icon/active.png';
import messenger from 'src/assets/icon/messenger.png';

const Header = () => {
  return (
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
        justifyContent="space-between"
      >
        <Box className="left">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box me="1rem">
              <Link to="/">
                <Button
                  fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1rem', sm: '0.8rem' }}
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
                  fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1rem', sm: '0.8rem' }}
                  fontWeight="bold"
                  variant="link"
                  color="#000"
                >
                  Sản phẩm
                </Button>
              </Link>
            </Box>

            <Box me="1rem">
              <Link to="/huong-dan-su-dung">
                <Button
                  fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1rem', sm: '0.8rem' }}
                  fontWeight="bold"
                  variant="link"
                  color="#000"
                >
                  Hướng dẫn sử dụng
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box height="70px" width="4px" bg="#fff" />
        <Box className="right">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box ms="1rem">
              <Image width="50px" src={active} alt="active" />
            </Box>
            <Box ms="1rem">
              <Image width="50px" src={messenger} alt="messenger" />
            </Box>

            <Box ms="1rem">
              <Link to="/dang-nhap">
                <Button
                  fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1rem', sm: '0.8rem' }}
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
            <Box ms="1rem">
              <Link to="/dang-ky">
                <Button
                  fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1rem', sm: '0.8rem' }}
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
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
