import React from "react";
import { Box, Divider, Flex, Image, Stack, Text, Link } from "@chakra-ui/react";
import bizTOnetLogo from "../assests/bizTOnetLogo.png";
import cLogo from "../assests/cLogo.png";

import LinkStack from "./LinkStack/LinkStack";

const Footer = () => {
  return (
    <Box p="5.375rem 15rem" bg="#0500DF" w="100%">
      <Stack spacing="3.438rem">
        <Stack direction="row" spacing="13.208rem">
          <Stack spacing="2.375rem" direction="column">
            <Image w="10.875rem" h="3rem" src={bizTOnetLogo} />
            <Text
              fontFamily="inter"
              fontStyle="normal"
              color="white"
              fontWeight={500}
              fontSize="2rem"
              w="30.313rem"
              lineHeight="120%"
            >
              Establish your vision and value proposition and turn them into
              testable prototypes.
            </Text>
            <Stack spacing="0.25rem">
              <Text
                fontFamily="inter"
                fontStyle="normal"
                color="white"
                fontWeight={400}
                fontSize="1.25rem"
              >
                Contact us
              </Text>
              <Text
                fontFamily="inter"
                fontStyle="normal"
                color="white"
                fontWeight={400}
                fontSize="0.875rem"
              >
                contact@company.com
              </Text>
              <Text
                fontFamily="inter"
                fontStyle="normal"
                color="white"
                fontWeight={400}
                fontSize="0.875rem"
              >
                020 - 245 4500
              </Text>
            </Stack>
            <Stack spacing="0.625rem">
              <Text
                fontFamily="inter"
                fontStyle="normal"
                color="white"
                fontWeight={400}
                fontSize="1.25rem"
              >
                Location
              </Text>
              <Text
                fontFamily="inter"
                fontStyle="normal"
                color="white"
                fontWeight={400}
                fontSize="0.875rem"
              >
                Warsaw, Poland
              </Text>
            </Stack>
          </Stack>
          <LinkStack
            title="Company"
            element={[
              "Projects",
              "careers",
              "Blog",
              "About Us",
              "Pricing",
              "Partners",
            ]}
          />
          <LinkStack
            title="Service"
            element={[
              "Products",
              "Visual Design",
              "Web Development",
              "User Testing",
              "Quality Assurance",
              "Cloud Application",
              "Mvp Development",
              "All Service",
            ]}
          />
          <Stack spacing="2.563rem">
            <LinkStack
              title="Workflow"
              element={["Startup", "Scaling", "Transformation"]}
            />
            <LinkStack
              title="Technology"
              element={["React", "Node.js", "Angular"]}
            />
          </Stack>
        </Stack>
        <Divider />
        <Flex flexDirection="row" justifyContent="space-between">
          <Flex flexDirection="row" alignItems="center">
            <Image color="white" w="10px" h="11px" mr="4px" src={cLogo} />
            <Text
              ontFamily="inter"
              fontStyle="normal"
              color="white"
              fontWeight={400}
              fontSize="0.875rem"
              lineHeight="150%"
            >
              2021 Uihut.com
            </Text>
          </Flex>

          <Link
            ontFamily="inter"
            fontStyle="normal"
            color="white"
            fontWeight={400}
            fontSize="0.875rem"
            lineHeight="150%"
          >
            Terms and Condition
          </Link>
          <Link
            ontFamily="inter"
            fontStyle="normal"
            color="white"
            fontWeight={400}
            fontSize="0.875rem"
            lineHeight="150%"
          >
            Privacy Statement
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;
