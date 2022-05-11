import React from "react";

import { Flex, Text } from "@chakra-ui/react";

const CompanyStats = ({ title, content }) => {
  return (
    <Flex flexDirection="column">
      <Text
        fontFamily="inter"
        fontStyle="normal"
        color="white"
        fontWeight={500}
        fontSize="2rem"
        lineHeight="120%"
      >
        {title}
      </Text>
      <Text
        fontFamily="inter"
        fontStyle="normal"
        color="white"
        fontWeight={400}
        fontSize="1rem"
        lineHeight="150%"
      >
        {content}
      </Text>
    </Flex>
  );
};

export default CompanyStats;
