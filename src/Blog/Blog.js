import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import InformationSection from "../InformationSection/InformationSection";
import ContendCardLarge from "./ContendCardLarge/ContendCardLarge";

import pipeProductionLarge from "../assests/pipeProductionLarge.png";
import shipLoadingLarge from "../assests/shipLoadingLarge.png";
import steelProductionLarge from "../assests/steelProductionLarge.png";

const Blog = () => {
  return (
    <Box bg="#F6F6F6" w="100%" p="7.813rem 17.5rem">
      <Flex flexDirection="column" textAlign="center" alignItems="center">
        <InformationSection
          headerWidth="38rem"
          descriptionWidth="38rem"
          header="Find contents that can improve your business"
          description="Anagement involves identifying the mission, objective, procedures, rules and manipulation"
        />
        <Flex
          flexDirection="row"
          alignContent="space-between"
          textAlign="left"
          mt="5rem"
          gap="5rem"
        >
          <ContendCardLarge
            title="Heading"
            tag="Sub Head"
            description="Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta."
            image={shipLoadingLarge}
          />
          <ContendCardLarge
            title="Heading"
            tag="Sub Head"
            description="Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta."
            image={pipeProductionLarge}
          />
          <ContendCardLarge
            title="Heading"
            tag="Sub Head"
            description="Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta."
            image={steelProductionLarge}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Blog;
