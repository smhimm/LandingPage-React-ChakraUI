import React from "react";

import { Box, Button, Flex, Stack, Text, Center } from "@chakra-ui/react";

import StarIcon from "./StarIcon/StarIcon";

const Banner = () => {
  return (
    <Box p="4.438rem 29.063rem" bg="#F6F6F6" w="100%">
      <Flex
        position="relative"
        flexDirection="row"
        bg="white"
        h="5.625rem"
        borderRadius="8px"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.075)"
      >
        <Box
          position="absolute"
          left="calc(50% - 1.875rem/2 - 13.75rem)"
          top="calc(50% - 1.875rem/2 - 0.938rem)"
        >
          <StarIcon widthICON="1.875rem" heightICON="1.875rem" />
        </Box>
        <Box
          position="absolute"
          left="calc(50% - 1rem/2 + 12.168rem)"
          top="calc(50% - 1rem/2 + 0.67rem)"
        >
          <StarIcon
            widthICON="1rem"
            heightICON="1rem"
            rotation="rotate(17.03deg)"
          />
        </Box>
        <Box
          position="absolute"
          left="calc(50% - 1.375rem/2 + 13.852rem)"
          top="calc(50% - 1.375rem/2 - 0.188rem)"
        >
          <StarIcon
            widthICON="1.375rem"
            heightICON="1.375rem"
            rotation="rotate(17.03deg)"
            color="#6C757D"
          />
        </Box>
        <Box
          position="absolute"
          right="5.851rem"
          top="calc(50% - 1.521rem/2 - 1.24rem)"
          zIndex="1"
        >
          <StarIcon
            widthICON="1.521rem"
            heightICON="1.521rem"
            rotation="rotate(17.03deg)"
          />
        </Box>

        <Center
          position="absolute"
          top="0"
          left="50.875rem"
          borderBottomLeftRadius="4.25rem"
          borderBottomRightRadius="4.25rem"
          w="8.5rem"
          h="4.25rem"
          background="linear-gradient(180deg, #FFCA2B 0%, #FFC108 100%, #FFC108 100%)"
          zIndex="0"
        ></Center>
        <Button m="1.375rem 0 1.75rem 2.5rem" color="white" bg="#0500DF">
          Get Started
        </Button>
        <Stack
          direction="row"
          spacing="3.5rem"
          m="1.563rem 0  1.438rem 12.125rem"
        >
          <Text
            fontFamily="inter"
            fontStyle="normal"
            color="black"
            fontWeight={500}
            fontSize="2rem"
            lineHeight="120%"
          >
            500K
          </Text>
          <Text
            fontFamily="inter"
            fontStyle="normal"
            color="#212529"
            fontWeight={400}
            fontSize="0.875rem"
            lineHeight="150%"
            w="8.375rem"
          >
            Raised via the solutions we’ve built
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Banner;
