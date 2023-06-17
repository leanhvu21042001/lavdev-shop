import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Center my={{ sm: 30, md: 50, lg: 50 }}>
      <Box textAlign="center">
        <Heading my={4}>404 | Page Not</Heading>
        <Text as="p" my={4} fontSize="1.5rem">
          You just hit a route that doesn&apos;t exist... the sadness.😢
        </Text>

        <Link to="/">
          <Button
            colorScheme="teal"
            my={4}
            fontSize="1.5rem"
            size="lg"
            alignItems="center"
          >
            <ArrowBackIcon /> Back to Home
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default PageNotFound;
