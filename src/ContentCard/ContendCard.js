import React from "react";
import { Flex, Text, Center, Image } from "@chakra-ui/react";

const ContendCard = ({ title, tag, image, description }) => {
  return (
    <Flex
      background="white"
      flexDirection="column"
      alignItems="flex-start"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.075)"
      borderRadius="8px"
      w="18.125rem"
      h="23.719rem"
    >
      <Image borderTopRadius="8px" src={image} alt="Content Card Image" />
      <Text
        color="#212529"
        fontFamily="inter"
        fontStyle="normal"
        fontWeight={700}
        fontSize="1rem"
        m="0.938rem 0.938rem 0.5rem 0.938rem"
      >
        {title}
      </Text>
      <Center
        m="0 0.938rem"
        borderRadius="34px"
        bg="#F8F9FA"
        p="4px 8px 4px 6px"
      >
        <Text
          fontFamily="inter"
          fontStyle="normal"
          color="#6C757D"
          fontWeight={400}
          fontSize="0.75rem"
        >
          {tag}
        </Text>
      </Center>
      <Text
        color="#212529"
        fontFamily="inter"
        fontStyle="normal"
        fontWeight={400}
        fontSize="0.875rem"
        m="0.5rem 0.938rem"
      >
        {description}
      </Text>
    </Flex>
  );
};

export default ContendCard;
