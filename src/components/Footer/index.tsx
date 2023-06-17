import { Box, Center, Flex, Image, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';

import bidv from 'src/assets/icon/bidv.png';
import copyright from 'src/assets/icon/copyright.png';
import facebook from 'src/assets/icon/facebook.png';
import gmail from 'src/assets/icon/gmail.png';
import locationPin from 'src/assets/icon/location-pin.png';
import momo from 'src/assets/icon/momo.png';
import myViettel from 'src/assets/icon/my-viettel.png';
import receiver from 'src/assets/icon/receiver.png';
import tiktok from 'src/assets/icon/tiktok.png';
import visa from 'src/assets/icon/visa.png';
import youtube from 'src/assets/icon/youtube.png';

const Footer = () => {
  return (
    <footer>
      <Box bg="#000" color="#fff" paddingY={10} paddingX={5}>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box flex="1" minWidth="350px">
            <Center flexDirection="column">
              <Text
                as="b"
                fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1.3rem', sm: '1rem' }}
              >
                <Center mb={5}>Thông tin liên lạc</Center>
              </Text>
              <List spacing={3}>
                <ListItem display="flex" gap={5}>
                  <Image height="50px" src={locationPin} />
                  <Box
                    fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1.3rem', sm: '1rem' }}
                  >
                    Địa chỉ: Quận 1 - TP.HCM
                  </Box>
                </ListItem>
                <ListItem display="flex" gap={5}>
                  <Image height="50px" src={gmail} />
                  <Box
                    fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1.3rem', sm: '1rem' }}
                  >
                    Email: starunboy@gmail.com
                  </Box>
                </ListItem>
                <ListItem display="flex" gap={5}>
                  <Image height="50px" src={receiver} />
                  <Box
                    fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1.3rem', sm: '1rem' }}
                  >
                    Số điện thoại: 09462375432
                  </Box>
                </ListItem>
              </List>
            </Center>
          </Box>

          <Box flex="1" minWidth="350px">
            <Center flexDirection="column">
              <Box>
                <Text
                  as="b"
                  fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1.3rem', sm: '1rem' }}
                >
                  <Center mb={5}>Thanh toán</Center>
                </Text>

                <Center>
                  <Box width="40%" display="flex" justifyContent="space-around" gap={5}>
                    <Image height="65px" src={momo} />
                    <Image height="65px" src={bidv} />
                    <Image height="65px" src={visa} />
                  </Box>
                </Center>
              </Box>

              <Box mt={5}>
                <Text
                  as="b"
                  fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1.3rem', sm: '1rem' }}
                >
                  <Center mb={5}>Vận chuyển</Center>
                </Text>

                <Center>
                  <Box display="flex" justifyContent="space-around">
                    <Image width="130px" src={myViettel} />
                    <Image width="130px" src={myViettel} />
                    <Image width="130px" src={myViettel} />
                  </Box>
                </Center>
              </Box>
            </Center>
          </Box>

          <Box flex="1" minWidth="350px">
            <Center flexDirection="column">
              <Text
                as="b"
                fontSize={{ xl: '1.9rem', lg: '1.5rem', md: '1.3rem', sm: '1rem' }}
              >
                <Center mb={5}>Theo dõi</Center>
              </Text>
              <Center>
                <Box width="40%" display="flex" justifyContent="space-around" gap={5}>
                  <Image height="65px" src={facebook} />
                  <Image height="65px" src={tiktok} />
                  <Image height="65px" src={youtube} />
                </Box>
              </Center>
            </Center>
          </Box>
        </Flex>

        <Box display="flex" alignItems="center" justifyContent="center" mt={10}>
          <Image height="65px" src={copyright} />
          <Text as="b" ms={3}>
            Bản quyèn thuộc về Starunboy
          </Text>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
