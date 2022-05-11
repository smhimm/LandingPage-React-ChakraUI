import React from "react";
import { Image } from "@chakra-ui/react";
import starIcon from "../../assests/starIcon.png";

const StarIcon = ({ widthICON, heightICON, rotation, color }) => {
  return (
    <Image
      w={widthICON}
      h={heightICON}
      transform={rotation}
      src={starIcon}
      color={color}
    />
  );
};

export default StarIcon;
