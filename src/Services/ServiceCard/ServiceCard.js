import React from "react";

import { Box, Flex, Text, Center, Image } from "@chakra-ui/react";

const ServiceCard = ({
  icon,
  iconBackgroundColor,
  iconColor,
  title,
  description,
}) => {
  return (
    <Flex
      flexDirection="row"
      alignItems="flex-start"
      padding="40px"
      background="#FFFFFF"
      boxShadow="0px 0px 1px rgba(0, 0, 0, 0.06), 0px 2px 2px rgba(0, 0, 0, 0.1)"
      marginTop="1.25rem"
      marginBottom="1.25rem"
    >
      <Box>
        <Center
          mr="1.875rem"
          w="2.5rem"
          h="2.5rem"
          bg={iconBackgroundColor}
          color={iconColor}
          borderRadius="11px"
        >
          <Image src={icon}></Image>
        </Center>
      </Box>
      <Flex direction="column" alignItems="flex-start">
        <Text
          fontFamily="inter"
          fontStyle="normal"
          fontWeight={500}
          color="#000000"
          fontSize="1.22rem"
        >
          {title}
        </Text>
        <Text
          fontFamily="inter"
          fontWeight={400}
          color="#212529"
          fontSize="1rem"
          mt="1rem"
          w="16rem"
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ServiceCard;
