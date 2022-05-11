import React, { useState } from "react";
import {
  Flex,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Checkbox,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";

import formEyeIcon from "../../assests/formEyeIcon.png";

const Form = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <Flex
      flexDirection="column"
      p="2.5rem"
      w="30rem"
      bg="white"
      alignItems="center"
      boxShadow="0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 4px rgba(0, 0, 0, 0.1)"
      borderRadius="8px"
    >
      <Stack spacing="0.75rem" alignItems="center">
        <Text
          fontFamily="inter"
          fontStyle="normal"
          color="black"
          fontWeight={500}
          fontSize="2rem"
          lineHeight="120%"
        >
          Welcome back!
        </Text>
        <Text
          fontFamily="inter"
          fontStyle="normal"
          color="black"
          fontWeight={400}
          fontSize="1rem"
          lineHeight="150%"
        >
          Login to your account to continue
        </Text>
      </Stack>
      <FormControl isInvalid={isError} mt="1.25rem">
        <FormLabel
          fontFamily="inter"
          fontStyle="normal"
          color="#212529"
          fontWeight={400}
          fontSize="1rem"
          lineHeight="150%"
          htmlFor="email"
        >
          Email Address
        </FormLabel>
        <Input
          h="2.5rem"
          placeholder="john124241@gmail.com"
          _placeholder={{ color: "#495057" }}
          id="email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>
            Email doesn’t exist. Please try again.
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl mt="1.25rem">
        <FormLabel
          htmlFor="password"
          fontFamily="inter"
          fontStyle="normal"
          color="#212529"
          fontWeight={400}
          fontSize="1rem"
          lineHeight="150%"
        >
          Your Password
        </FormLabel>
        <InputGroup>
          <Input
            h="2.5rem"
            id="password"
            type="password"
            placeholder="Your Password"
          />
          <InputRightElement
            children={<Image w="0.902rem" h="0.75rem" src={formEyeIcon} />}
          />
        </InputGroup>
      </FormControl>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        w="25rem"
        mt="1.625rem"
      >
        <Checkbox colorScheme="blue" color="#212529" defaultChecked>
          Remember me
        </Checkbox>
        <Link
          fontFamily="inter"
          fontStyle="normal"
          color="#0500DF"
          fontWeight={400}
          fontSize="1rem"
          lineHeight="150%"
        >
          Forgot Password?
        </Link>
      </Flex>
      <Stack alignItems="center" spacing="1.25rem">
        <Button
          size="lg"
          h="2.5rem"
          background="#0500DF"
          color="white"
          variant="solid"
          width="25rem"
          mt="1.625rem"
        >
          Sign In
        </Button>
        <Text
          fontFamily="inter"
          fontStyle="normal"
          color="#212529"
          fontWeight={400}
          fontSize="0.875rem"
          lineHeight="150%"
        >
          Or
        </Text>
        <Button
          size="lg"
          h="2.5rem"
          background="white"
          borderColor="#0500DF"
          color="#0500DF"
          variant="outline"
          width="25rem"
        >
          Create New Account
        </Button>
        <Button
          leftIcon={<i class="fa-brands fa-linkedin"></i>}
          size="lg"
          h="2.5rem"
          background="#0500DF"
          color="white"
          variant="solid"
          width="25rem"
        >
          Join With Linkedin
        </Button>
      </Stack>
    </Flex>
  );
};

export default Form;
