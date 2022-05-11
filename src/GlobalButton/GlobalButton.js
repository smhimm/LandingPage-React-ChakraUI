import { Button } from "@chakra-ui/react";
import React from "react";

const GlobalButton = ({ icon, size, text, variant, color, width }) => {
  return (
    <Button
      leftIcon={icon}
      size={size}
      background="#0500DF"
      color={color}
      variant={variant}
      mt="0.75rem"
      w={width}
    >
      {text}
    </Button>
  );
};

export default GlobalButton;
