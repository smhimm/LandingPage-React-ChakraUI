import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import InformationSection from "../InformationSection/InformationSection";
import GlobalButton from "../GlobalButton/GlobalButton";

import pipeProduction from "../assests/pipeProduction.png";
import greyBall from "../assests/greyBall.png";
import ContendCard from "../ContentCard/ContendCard";

const FeaturesTwo = () => {
  return (
    <Box bg="#F6F6F6" w="100%" h="49rem" p="7.813rem 17.5rem">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={0}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="0.625rem"
        >
          <InformationSection
            topic="LEARN ABOUT US"
            header="Share your product and service in the marketplace"
            description="Anagement involves identifying the mission, objective, procedures, rules and manipulation["
          />
          <GlobalButton
            size="lg"
            color="white"
            variant="solid"
            text="Learn More"
          />
        </Flex>
        <Box position="relative" w="27.5rem" h="31.219rem" p="0.25rem">
          <Box>
            <ContendCard
              title="Product title"
              tag="Sponsored"
              description="An exception to the norm. Extremely soft while providing an extremely
            responsive feeling during runs."
              image={pipeProduction}
            />
          </Box>
          <Box position="absolute" bottom="0" right="0">
            <ContendCard
              title="Product title"
              tag="Sponsored"
              description="An exception to the norm. Extremely soft while providing an extremely
            responsive feeling during runs."
              image={greyBall}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default FeaturesTwo;
