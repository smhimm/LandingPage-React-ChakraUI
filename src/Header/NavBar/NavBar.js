import React from "react";
import { Flex, Link, Stack } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex justifyContent="space-around">
      <Stack direction="row" spacing="2.313rem">
        <Link
          fontFamily="inter"
          fontStyle="normal"
          color="white"
          fontWeight={500}
          fontSize="1rem"
          lineHeight="120%"
        >
          Features
        </Link>
        <Link
          fontFamily="inter"
          fontStyle="normal"
          color="white"
          fontWeight={500}
          fontSize="1rem"
          lineHeight="120%"
        >
          Get Our App
        </Link>
        <Stack direction="row" spacing="0.5rem" alignItems="center">
          <Link
            fontFamily="inter"
            fontStyle="normal"
            color="white"
            fontWeight={500}
            fontSize="1rem"
            lineHeight="120%"
          >
            What For
          </Link>
          <i class="fa-solid fa-angle-down" style={{ color: "white" }}></i>
        </Stack>
        <Link
          fontFamily="inter"
          fontStyle="normal"
          color="white"
          fontWeight={500}
          fontSize="1rem"
          lineHeight="120%"
        >
          Resources
        </Link>
      </Stack>
    </Flex>
  );
};

export default NavBar;
