import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import avatar1 from "../../assests/avatars/avatar1.png";
import avatar2 from "../../assests/avatars/avatar2.png";
import avatar3 from "../../assests/avatars/avatar3.png";
import avatar4 from "../../assests/avatars/avatar4.png";
import avatar5 from "../../assests/avatars/avatar5.png";
import avatar6 from "../../assests/avatars/avatar6.png";
import avatar7 from "../../assests/avatars/avatar7.png";
import avatar8 from "../../assests/avatars/avatar8.png";
import avatar9 from "../../assests/avatars/avatar9.png";
import avatar10 from "../../assests/avatars/avatar10.png";
import avatar11 from "../../assests/avatars/avatar11.png";

const AvatarComp = () => {
  return (
    <Flex w="109.188rem" h="30.125rem" position="absolute" mt="20.5rem">
      <Box
        position="absolute"
        left="calc(50% - 2.5rem/2 - 54.625rem)"
        top="calc(50% - 2.5rem/2 + 5.375rem)"
        w="2.5rem"
        h="2.5rem"
      >
        <Image src={avatar1} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 5rem/2 - 38.125rem)"
        top="calc(50% - 5rem/2 + 10.25rem)"
        w="5rem"
        h="5rem"
      >
        <Image src={avatar2} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 2.5rem/2 - 34.563rem)"
        top="calc(50% - 2.5rem/2 - 0.125rem)"
        w="2.5rem"
        h="2.5rem"
      >
        <Image src={avatar3} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 2.5rem/2 - 16.5rem)"
        top="calc(50% - 2.5rem/2 + 17.563rem)"
        w="2.5rem"
        h="2.5rem"
      >
        <Image src={avatar4} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 5rem/2 - 22.5rem)"
        top="calc(50% - 5rem/2 + 4.688rem)"
        w="5rem"
        h="5rem"
      >
        <Image src={avatar5} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 3rem/2 - 3.938rem)"
        top="calc(50% - 3rem/2 - 2.625rem)"
        w="3rem"
        h="3rem"
      >
        <Image src={avatar6} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 4rem/2 + 10.25rem)"
        top="calc(50% - 4rem/2 + 19.438rem)"
        w="4rem"
        h="4rem"
      >
        <Image src={avatar7} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 3rem/2 + 18.938rem)"
        top="calc(50% - 3rem/2 + 1.5rem)"
        w="3rem"
        h="3rem"
      >
        <Image src={avatar8} />
      </Box>

      <Box
        position="absolute"
        left="calc(50% - 3rem/2 + 28.688rem)"
        top="calc(50% - 3rem/2 - 7.188rem)"
        w="3rem"
        h="3rem"
      >
        <Image src={avatar9} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 5rem/2 + 38.375rem)"
        top="calc(50% - 5rem/2 + 10.688rem)"
        w="5rem"
        h="5rem"
      >
        <Image src={avatar10} />
      </Box>
      <Box
        position="absolute"
        left="calc(50% - 2.5rem/2 + 52.063rem)"
        top="calc(50% - 2.5rem/2 + 12.188rem)"
        w="2.5rem"
        h="2.5rem"
      >
        <Image src={avatar11} />
      </Box>
    </Flex>
  );
};

export default AvatarComp;
