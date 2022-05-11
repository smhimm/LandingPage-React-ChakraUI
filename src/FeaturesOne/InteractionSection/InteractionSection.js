import React from "react";
import { Flex, Image, Button } from "@chakra-ui/react";

const InteractionSection = ({ text, icon }) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      m="0.35rem 0.5rem"
    >
      <Button
        variant="ghost"
        fontFamily="inter"
        fontStyle="normal"
        fontWeight={400}
        color="#495057"
        fontSize="0.875rem"
      >
        <Image m="0 8px" src={icon} alt="Like icon" />
        {text}
      </Button>
    </Flex>
  );
};

export default InteractionSection;
