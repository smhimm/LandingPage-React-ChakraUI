import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const LeadsInfoCard = ({ colorPalette }) => {
  return (
    <Flex
      flexDirection="column"
      border="1px solid #CED4DA"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.075)"
      borderRadius="8px"
      p="1.5rem"
      m="1rem 1rem 1rem 0"
    >
      <Text
        fontFamily="inter"
        fontStyle="normal"
        color="#1B2432"
        fontWeight={700}
        fontSize="1rem"
        mb="0.875rem"
      >
        My Shared Leads
      </Text>
      <Flex flexDirection="row">
        <Text
          fontFamily="inter"
          fontStyle="normal"
          color={colorPalette}
          fontWeight={700}
          fontSize="1.75rem"
        >
          252
        </Text>
        <Text
          fontFamily="inter"
          fontStyle="normal"
          color="#1B2432"
          fontWeight={700}
          fontSize="1rem"
          mt="0.8rem"
          ml="0.3rem"
        >
          Leads
        </Text>
      </Flex>
      <Text
        fontFamily="inter"
        fontStyle="normal"
        color="#172B4D"
        fontWeight={400}
        fontSize="0.875rem"
        w="8.438rem"
        mt="0.875rem"
      >
        +10 new Shared Leads for this week
      </Text>
    </Flex>
  );
};

export default LeadsInfoCard;
