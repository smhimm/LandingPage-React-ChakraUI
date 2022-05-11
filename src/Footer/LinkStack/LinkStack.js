import React from "react";
import { Stack, Heading, Link } from "@chakra-ui/react";
const LinkStack = ({ title, element }) => {
  return (
    <Stack spacing="1.25rem">
      <Heading
        fontFamily="inter"
        fontStyle="normal"
        color="white"
        fontWeight={400}
        fontSize="1.25rem"
        lineHeight="150%"
      >
        {title}
      </Heading>
      {element.map((elementSingular) => (
        <Link
          fontFamily="inter"
          fontStyle="normal"
          color="white"
          fontWeight={400}
          fontSize="0.875rem"
          lineHeight="150%"
        >
          {elementSingular}
        </Link>
      ))}
    </Stack>
  );
};

export default LinkStack;
