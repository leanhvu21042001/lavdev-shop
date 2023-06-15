import { Box, Center, Flex, Image, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';

import bidv from 'src/assets/Icon/bidv.png';
import copyright from 'src/assets/Icon/copyright.png';
import facebook from 'src/assets/Icon/facebook.png';
import gmail from 'src/assets/Icon/gmail.png';
import locationPin from 'src/assets/Icon/location-pin.png';
import momo from 'src/assets/Icon/momo.png';
import myViettel from 'src/assets/Icon/my-viettel.png';
import receiver from 'src/assets/Icon/receiver.png';
import tiktok from 'src/assets/Icon/tiktok.png';
import visa from 'src/assets/Icon/visa.png';
import youtube from 'src/assets/Icon/youtube.png';

const Footer = () => {
  return (
    <footer>
      <Box bg="#000" color="#fff" paddingY={10} paddingX={5}>
        <Flex justifyContent="space-between">
          <Box flex="1">
            <Center flexDirection="column">
              <Text as="b">
                <Center mb={5}>Thông tin liên lạc</Center>
              </Text>
              <List spacing={3}>
                <ListItem display="flex" gap={5}>
                  <Image width="30px" src={locationPin} />
                  <span>Địa chỉ: Quận 1 - TP.HCM</span>
                </ListItem>
                <ListItem display="flex" gap={5}>
                  <Image width="30px" src={gmail} />
                  <span>Email: starunboy@gmail.com</span>
                </ListItem>
                <ListItem display="flex" gap={5}>
                  <Image width="30px" src={receiver} />
                  <span>Số điện thoại: 09462375432</span>
                </ListItem>
              </List>
            </Center>
          </Box>

          <Box flex="1">
            <Center flexDirection="column">
              <Box>
                <Text as="b">
                  <Center mb={5}>Thanh toán</Center>
                </Text>

                <Center>
                  <Box width="40%" display="flex" justifyContent="space-around" gap={5}>
                    <Image width="30px" src={momo} />
                    <Image width="30px" src={bidv} />
                    <Image width="30px" src={visa} />
                  </Box>
                </Center>
              </Box>

              <Box mt={5}>
                <Text as="b">
                  <Center mb={5}>Vận chuyển</Center>
                </Text>

                <Center>
                  <Box width="40%" display="flex" justifyContent="space-around">
                    <Image width="60px" src={myViettel} />
                    <Image width="60px" src={myViettel} />
                    <Image width="60px" src={myViettel} />
                  </Box>
                </Center>
              </Box>
            </Center>
          </Box>

          <Box flex="1">
            <Center flexDirection="column">
              <Text as="b">
                <Center mb={5}>Theo dõi</Center>
              </Text>
              <Center>
                <Box width="40%" display="flex" justifyContent="space-around" gap={5}>
                  <Image width="30px" src={facebook} />
                  <Image width="30px" src={tiktok} />
                  <Image width="30px" src={youtube} />
                </Box>
              </Center>
            </Center>
          </Box>
        </Flex>

        <Box display="flex" alignItems="center" justifyContent="center" mt={10}>
          <Image width="30px" src={copyright} />
          <Text as="b">Bản quyèn thuộc về Starunboy</Text>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
