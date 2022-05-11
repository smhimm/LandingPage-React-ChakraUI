import React from "react";
import { Flex, Text, Center, Image, Box } from "@chakra-ui/react";

const ContendCardLarge = ({ title, tag, image, description }) => {
  return (
    <Flex
      background="white"
      flexDirection="column"
      alignItems="flex-start"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.075)"
      borderRadius="8px"
      w="22.5rem"
      h="30rem"
    >
      <Image borderTopRadius="8px" src={image} alt="Content Card Large Image" />
      <Text
        color="#212529"
        fontFamily="Open Sans"
        fontStyle="normal"
        fontWeight={400}
        fontSize="1.25rem"
        m="0.938rem 0.938rem 0.5rem 0.938rem"
      >
        {title}
      </Text>
      <Center m="0 0.938rem">
        <Text
          fontFamily="Open Sans"
          fontStyle="normal"
          color="#ADB5BD"
          fontWeight={600}
          fontSize="1rem"
        >
          {tag}
        </Text>
      </Center>
      <Text
        color="#212529"
        fontFamily="inter"
        fontStyle="normal"
        fontWeight={400}
        fontSize="1rem"
        m="0.5rem 0.938rem"
      >
        {description}
      </Text>
      <Text
        color="#0500DF"
        fontFamily="inter"
        fontStyle="normal"
        fontWeight={400}
        fontSize="1rem"
        m="0.5rem 0.938rem"
      >
        <a href="/">Read More</a>
      </Text>
    </Flex>
  );
};

export default ContendCardLarge;
