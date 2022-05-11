import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const CircleComp = () => {
  return (
    <Box>
      <Box
        position="absolute"
        borderRadius="19rem"
        opacity="0.2"
        border="2px"
        w="37.5rem"
        h="37.5rem"
        color="#6C757D"
        top="calc(50% - 37.5rem/2 + 4.313rem)"
        left="calc(50% - 37.5rem/2 + 0.062rem)"
      />
      <Box
        position="absolute"
        borderRadius="19rem"
        opacity="0.2"
        border="2px"
        w="28.063rem"
        h="28.063rem"
        top="calc(50% - 28.063rem/2 + 6.719rem)"
        left="calc(50% - 28.063rem/2 + 0.031rem)"
      />
      <Box
        position="absolute"
        borderRadius="19rem"
        opacity="0.2"
        border="2px"
        w="16.438rem"
        h="16.438rem"
        top="calc(50% - 16.438rem/2 + 6.719rem)"
        left="calc(50% - 16.438rem/2 + 0.031rem)"
      />
      <Box
        position="absolute"
        borderRadius="19rem"
        border="2px"
        w="28.063rem"
        h="28.063rem"
        color="#F6F6F6"
        top="calc(50% - 30.708rem/2 + 12.166rem)"
        left="calc(50% - 30.164rem/2 + 57.395rem)"
      />
      <Box
        position="absolute"
        borderRadius="19rem"
        border="2px"
        w="28.063rem"
        h="28.063rem"
        color="#F6F6F6"
        top="calc(50% - 30.708rem/2 + 10.916rem)"
        left="calc(50% - 30.164rem/2 + 46.145rem)"
      />
      <Box
        position="absolute"
        borderRadius="19rem"
        border="2px"
        w="28.063rem"
        h="28.063rem"
        color="#F6F6F6"
        top="calc(50% - 30.708rem/2 + 7.729rem)"
        left="calc(50% - 30.164rem/2 - 57.418rem)"
      />
    </Box>
  );
};

export default CircleComp;
