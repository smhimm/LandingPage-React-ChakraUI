import React from "react";

import {
  Flex,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Input,
} from "@chakra-ui/react";

import NavBar from "./NavBar/NavBar";
import CompanyStats from "./CompanyStats/CompanyStats";
import Form from "./Form/Form";

const Header = () => {
  return (
    <Flex
      flexDirection="column"
      p="2.5rem 15rem 5.931rem 15rem"
      bg="#0500DF"
      w="100%"
    >
      <NavBar />
      <Flex
        flexDirection="row"
        alignItems="center"
        mt="6.563rem"
        justifyContent="space-around"
      >
        <Stack spacing="2.5rem">
          <Text
            fontFamily="inter"
            fontStyle="normal"
            color="white"
            fontWeight={700}
            fontSize="5rem"
            lineHeight="120%"
            w="46.875rem"
            letterSpacing="-0.01em"
          >
            Welcome to your Business Network
          </Text>
          <Text
            fontFamily="inter"
            fontStyle="normal"
            color="white"
            fontWeight={400}
            fontSize="1rem"
            lineHeight="150%"
            w="43.5rem"
          >
            Establish your vision and value proposition and turn Establish your
            vision and value proposition and turn them into testable
            prototypes.them into testable prototypes.
          </Text>
          <InputGroup size="lg" w="43.5rem">
            <Input
              border="1px solid #CED4DA"
              type="text"
              background="white"
              placeholder="Your email"
              _placeholder={{ color: "#6C757D" }}
            />
            <InputRightElement width="7.125rem">
              <Button
                background="linear-gradient(180deg, #FFCA2B 0%, #FFC108 100%, #FFC108 100%)"
                border="1px solid #CED4DA"
                size="lg"
                borderRadius="0px 4px 4px 0px"
                color="#343A40"
                p="0.688rem 0.75rem"
                fontFamily="inter"
                fontStyle="normal"
                fontWeight={400}
                fontSize="1rem"
              >
                Get Started
              </Button>
            </InputRightElement>
          </InputGroup>
          <Stack direction="row" spacing="3.031rem">
            <CompanyStats title="500K" content="Successfully users done" />
            <CompanyStats
              title="350"
              content="Raised via the solutions we’ve built"
            />
            <CompanyStats title="100+" content="Qualified specialists" />
          </Stack>
        </Stack>
        <Form />
      </Flex>
    </Flex>
  );
};

export default Header;
