import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import active from 'src/assets/Icon/active.png';
import messenger from 'src/assets/Icon/messenger.png';

const Header = () => {
  return (
    <header>
      <Box textAlign="center" fontWeight="bold" fontSize="5xl">
        STARUNBOY
      </Box>
      <Box
        bg="#61def8"
        display="flex"
        alignItems="center"
        padding="10px"
        paddingX={{ lg: 40, md: 10 }}
        justifyContent="space-between"
      >
        <div className="left">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box me="1rem">
              <Link to="/">
                <Button fontSize={{ xl: '1.5rem', lg: '1rem', md: '1rem', sm: '0.8rem' }} variant="link" color="#000">
                  Trang chủ
                </Button>
              </Link>
            </Box>
            <Box me="1rem">
              <Link to="/san-pham">
                <Button fontSize={{ xl: '1.5rem', lg: '1rem', md: '1rem', sm: '0.8rem' }} variant="link" color="#000">
                  Sản phẩm
                </Button>
              </Link>
            </Box>

            <Box me="1rem">
              <Link to="/huong-dan-su-dung">
                <Button fontSize={{ xl: '1.5rem', lg: '1rem', md: '1rem', sm: '0.8rem' }} variant="link" color="#000">
                  Hướng dẫn sử dụng
                </Button>
              </Link>
            </Box>
          </Box>
        </div>
        <Box height="40px" width="3px" bg="#fff" />
        <div className="right">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box ms="1rem">
              <Image width="30px" src={active} alt="active" />
            </Box>
            <Box ms="1rem">
              <Image width="30px" src={messenger} alt="messenger" />
            </Box>

            <Box ms="1rem">
              <Link to="/dang-nhap">
                <Button
                  fontSize={{ xl: '1.5rem', lg: '1rem', md: '1rem', sm: '0.8rem' }}
                  bg="#000"
                  color="#fff"
                  _hover={{ bg: '#ebedf0', color: '#000' }}
                >
                  Đăng nhập
                </Button>
              </Link>
            </Box>
            <Box ms="1rem">
              <Link to="/dang-ky">
                <Button
                  fontSize={{ xl: '1.5rem', lg: '1rem', md: '1rem', sm: '0.8rem' }}
                  bg="#000"
                  color="#fff"
                  _hover={{ bg: '#ebedf0', color: '#000' }}
                >
                  Đăng ký
                </Button>
              </Link>
            </Box>
          </Box>
        </div>
      </Box>
    </header>
  );
};

export default Header;
