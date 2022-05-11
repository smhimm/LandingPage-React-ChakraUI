import React from "react";

import ServiceCard from "./ServiceCard/ServiceCard";

import { Box, Flex } from "@chakra-ui/react";
import InformationSection from "../InformationSection/InformationSection";

import presentationIcon from "../assests/presentationIcon.png";
import lamIcon from "../assests/lamIcon.png";
import peopleIcon from "../assests/peopleIcon.png";
import checkIcon from "../assests/checkIcon.png";
import lamIcon2 from "../assests/lamIcon2.png";

const Services = () => {
  return (
    <Box bg="#F6F6F6" p={4} w="100%" h="49rem">
      <Flex m="3.688rem 15rem" direction="column" alignItems="flex-start">
        <InformationSection
          topic="LEARN ABOUT US"
          header=" Know more about our Potentiality"
        />
        <Flex
          w="100%"
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          gap="6rem"
        >
          <ServiceCard
            icon={presentationIcon}
            iconBackgroundColor="#F8D7DA"
            iconColor="#DC3545"
            title="Creating broad stakegolder"
            description="The top or senior layer of management consists of the board of directors."
          />
          <ServiceCard
            icon={lamIcon}
            iconBackgroundColor="#D2F4EA"
            iconColor="#20C997"
            title="Boost your inspiration"
            description="Consist of general managers, branch managers and department managers."
          />
          <ServiceCard
            icon={peopleIcon}
            iconBackgroundColor="#E2D9F3"
            iconColor="#6F42C1"
            title="Gathering user opinions"
            description="above the deepest levels of operational members. An operational"
          />
        </Flex>
        <Flex
          w="100%"
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          gap="6rem"
        >
          <ServiceCard
            icon={checkIcon}
            iconBackgroundColor="#FFE5D0"
            iconColor="#FD7E14"
            title="Make you success"
            description="their colleges of business, business schools or faculty of management but also"
          />
          <ServiceCard
            icon={lamIcon2}
            iconBackgroundColor="#CFE2FF"
            iconColor="#0A58CA"
            title="Solid outputs"
            description="front line managers may also do some of the same tasks that employees"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Services;
