import { Flex, ListItem, List, Icon, HStack, Text } from "@chakra-ui/react";
import React from "react";

const LeadsInfo = ({ text, percent, colorPalette }) => {
  return (
    <Flex>
      <List spacing={3}>
        <ListItem>
          <HStack spacing="4px">
            <Icon boxSize="11px" viewBox="0 0 200 200" color={colorPalette}>
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Text
              fontFamily="inter"
              fontStyle="normal"
              color="#1B2432"
              fontWeight={400}
              fontSize="0.75rem"
            >
              {text}
            </Text>
            <Text
              fontFamily="inter"
              fontStyle="normal"
              color={colorPalette}
              fontWeight={700}
              fontSize="0.875rem"
            >
              {percent}
            </Text>
          </HStack>
        </ListItem>
      </List>
    </Flex>
  );
};

export default LeadsInfo;
