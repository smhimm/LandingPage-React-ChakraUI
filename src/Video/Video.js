import React from "react";
import { Center, Container, Flex, Image } from "@chakra-ui/react";

import InformationSection from "../InformationSection/InformationSection";

import videoImage from "../assests/videoImage.png";
import playIcon from "../assests/playIcon.png";

const Video = () => {
  return (
    <Flex
      bg="#FFFFFF"
      w="100%"
      h="60rem"
      position="relative"
      zIndex="-2"
      justifyContent="space-around"
      p="3.125rem "
    >
      <Container
        position="absolute"
        top="0"
        bg="#F6F6F6"
        h="35rem"
        maxWidth="100%"
        zIndex="-1"
      />
      <Flex flexDirection="column" w="50.5rem">
        <Flex
          flexDirection="column"
          // margin="7.813rem 17.5rem 4rem 17.5rem"
          textAlign="center"
        >
          <InformationSection
            alignItems="center"
            topic="LEARN ABOUT US"
            header="We build competitive
          solutions for specific needs"
            description="Anagement involves identifying the mission, objective, procedures, rules and manipulation["
          />
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="4rem">
          <Image
            borderRadius="4px"
            position="relative"
            src={videoImage}
            filter="drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.15))"
          />
          <Center
            position="absolute"
            w="5rem"
            h="5rem"
            background="white"
            borderRadius="2.5rem"
          >
            <Image src={playIcon}></Image>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Video;
