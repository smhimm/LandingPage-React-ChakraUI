import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Center,
  Image,
  Divider,
  Input,
} from "@chakra-ui/react";

import InteractionSection from "./InteractionSection/InteractionSection";
import GlobalButton from "../GlobalButton/GlobalButton";

import carProduction from "../assests/carProduction.png";
import avatar from "../assests/avatar.png";
import likeSmall from "../assests/likeSmall.png";
import comment from "../assests/comment.png";
import share from "../assests/share.png";
import like from "../assests/like.png";
import InformationSection from "../InformationSection/InformationSection";

const FeaturesOne = () => {
  return (
    <Box bg="#FFFFFF" w="100%" h="49rem">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={0}
        margin="7.813rem 17.5rem"
      >
        <Flex
          flexDirection="column"
          w="25rem"
          h="34.375rem"
          borderRadius="8px"
          boxShadow="0px 0px 2px rgba(0, 0, 0, 0.06), 0px 14px 32px rgba(0, 0, 0, 0.12)"
        >
          <Flex flexDirection="row" padding="1rem 1rem 0.25rem">
            <Avatar w="3rem" h="3rem" name="user" src={avatar} />
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              margin="0 0.75rem"
            >
              <Flex flexDirection="row" m="0 0.25rem">
                <Text
                  fontFamily="inter"
                  fontStyle="normal"
                  fontWeight={700}
                  color="#212529"
                  fontSize="1rem"
                >
                  Khoi Anh Nguyen
                </Text>
                <Text
                  fontFamily="inter"
                  fontStyle="normal"
                  fontWeight={400}
                  color="#6C757D"
                  fontSize="1rem"
                  m="0 0.25rem"
                >
                  created a
                </Text>
                <Text
                  fontFamily="inter"
                  fontStyle="normal"
                  fontWeight={600}
                  color="#050505"
                  fontSize="1rem"
                  m="0 0.25rem"
                >
                  Post
                </Text>
              </Flex>
              <Flex flexDirection="row" m="0.25rem 0" alignItems="center">
                <Text
                  fontFamily="inter"
                  fontStyle="normal"
                  fontWeight={400}
                  color="#6C757D"
                  fontSize="0.75rem"
                >
                  4h •{" "}
                </Text>
                <Center borderRadius="34px" bg="#F8F9FA" p="4px 8px 4px 6px">
                  <Text
                    fontFamily="inter"
                    fontStyle="normal"
                    fontWeight={400}
                    color="#6C757D"
                    fontSize="0.75rem"
                  >
                    Design Group
                  </Text>
                </Center>
              </Flex>
            </Flex>
            <Box marginTop="0 0.75rem">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </Box>
          </Flex>
          <Text
            fontFamily="inter"
            fontStyle="normal"
            fontWeight={400}
            color="#212529"
            fontSize="1rem"
            p="0.75rem 1rem"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Text>
          <Box>
            <Image
              w="25rem"
              h="13.125rem"
              p="0rem 1rem 0.75rem 1rem"
              src={carProduction}
              alt="image"
              borderRadius="4px"
            />
          </Box>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            p="0.25rem 1rem"
          >
            <Flex flexDirection="row" alignItems="center" p="2px 2px 2px 2px">
              <Center
                w="1rem"
                h="1rem"
                background="linear-gradient(180deg, #18AFFF 0%, #0062DF 100%)"
                borderRadius="1rem"
              >
                <Image src={likeSmall} alt="Small like icon" />
              </Center>
              <Text
                fontFamily="inter"
                fontStyle="normal"
                fontWeight={400}
                color="#495057"
                fontSize="0.875rem"
                m="0 0.25rem"
              >
                0
              </Text>
            </Flex>
            <Text
              fontFamily="inter"
              fontStyle="normal"
              fontWeight={400}
              color="#495057"
              fontSize="0.875rem"
            >
              <a href="/">0 comment</a>
            </Text>
          </Flex>
          <Divider color="#DEE2E6" h="1px" />
          <Flex flexDirection="row" justifyContent="space-evenly">
            <InteractionSection text="Like" icon={like} />
            <InteractionSection text="Comment" icon={comment} />
            <InteractionSection text="Share" icon={share} />
          </Flex>
          <Divider color="#DEE2E6" h="1px" />
          <Flex flexDirection="row" p="1rem">
            <Avatar w="2.5rem" h="2.5rem" name="user" src={avatar} />
            <Box p="0 0.75rem">
              <Input
                w="20rem"
                background="#F8F9FA"
                color="#495057"
                borderRadius="4px"
                placeholder="Your Comment..."
                _placeholder={{ color: "#495057" }}
              />
            </Box>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="0.625rem"
        >
          <InformationSection
            topic="Learn about us"
            header="Easily Publish your business information"
            description=" Anagement involves identifying the mission, objective, procedures, rules
  and manipulation["
          />
          <GlobalButton
            size="lg"
            text="Learn More"
            color="white"
            variant="solid"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default FeaturesOne;
