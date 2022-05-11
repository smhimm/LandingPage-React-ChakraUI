import React from "react";

import { Flex, Text } from "@chakra-ui/react";

const InformationSection = ({
  topic,
  header,
  description,
  headerWidth,
  descriptionWidth,
  alignItems,
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems={alignItems ? alignItems : "flex-start"}
      gap="0.625rem"
    >
      <Text
        fontFamily="inter"
        fontStyle="normal"
        fontWeight={700}
        color="#6C757D"
        fontSize="0.875rem"
      >
        {topic}
      </Text>
      <Text
        fontFamily="inter"
        fontStyle="normal"
        fontWeight={500}
        color="#000000"
        fontSize="2.5rem"
        w={headerWidth ? headerWidth : "34.688rem"}
        lineHeight="120%"
        mb="0.625rem"
      >
        {header}
      </Text>
      <Text
        fontFamily="inter"
        fontStyle="normal"
        fontWeight={500}
        color="#000000"
        fontSize="1.25rem"
        w={descriptionWidth ? descriptionWidth : "26.625rem"}
      >
        {description}
      </Text>
    </Flex>
  );
};

export default InformationSection;
