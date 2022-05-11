import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import InformationSection from "../InformationSection/InformationSection";
import AvatarComp from "./AvatarComp/AvatarComp";
import CircleComp from "./CircleComp/CircleComp";

const FeaturesFour = () => {
  return (
    <Flex
      bg="#FFFFFF"
      w="100%"
      flexDirection="column"
      alignContent="center"
      p="6.188rem 6.688rem 12.313rem 4.125rem"
      textAlign="center"
      alignItems="center"
      position="relative"
    >
      <InformationSection
        headerWidth="53.75rem"
        descriptionWidth="53.75rem"
        header="Biztonet, from business to networking"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis"
      />
      <Flex
        position="relative"
        h="41.958rem"
        w="120rem"
        bg="white"
        mt="3.438rem"
      >
        <CircleComp />
      </Flex>
      <AvatarComp />
    </Flex>
  );
};

export default FeaturesFour;
