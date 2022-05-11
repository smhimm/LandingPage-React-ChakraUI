import React from "react";

import LeadsInfo from "./LeadsInfo/LeadsInfo";
import GlobalButton from "../GlobalButton/GlobalButton";
import { Box, Flex, Image, Text, Center } from "@chakra-ui/react";
import chart from "../assests/chart.png";
import LeadsInfoCard from "./LeadsInfoCard/LeadsInfoCard";
import InformationSection from "../InformationSection/InformationSection";

const FeaturesThree = () => {
  return (
    <Box bg="#FFFFFF" w="100%" p="12.563rem 16.875rem">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={0}
      >
        <Flex flexDirection="column">
          <Flex
            flexDirection="column"
            p="1.5rem"
            border="1px solid #CED4DA"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.075)"
            borderRadius="8px"
          >
            <Text
              fontFamily="inter"
              fontStyle="normal"
              color="#1B2432"
              fontWeight={700}
              fontSize="1rem"
              mb="0.875rem"
            >
              Total Personal Leads
            </Text>
            <Flex flexDirection="row">
              <Image src={chart} />
              <Flex
                flexDirection="column"
                m="0.1rem 0.875rem"
                justifyContent="space-between"
              >
                <LeadsInfo
                  text="In Progress"
                  percent="45%"
                  colorPalette="#FFC107"
                />
                <LeadsInfo
                  text="Refused"
                  percent="30%"
                  colorPalette="#DC3545"
                />
                <LeadsInfo text="To Do" percent="25%" colorPalette="#0D6EFD" />
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                m="0.1rem 0 2.4rem 0"
              >
                <LeadsInfo
                  text="Accepted"
                  percent="45%"
                  colorPalette="#198754"
                />
                <LeadsInfo
                  text="Waiting"
                  percent="30%"
                  colorPalette="#ADB5BD"
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            padding={0}
          >
            <LeadsInfoCard colorPalette="#198754" />
            <LeadsInfoCard colorPalette="#0D6EFD" />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="0.625rem"
        >
          <InformationSection
            topic="LEARN ABOUT US"
            header="Exchange your leads within bizTOnet"
            description="Anagement involves identifying the mission, objective, procedures, rules and manipulation["
          />
          <GlobalButton
            size="lg"
            color="white"
            variant="solid"
            text="Learn More"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default FeaturesThree;
