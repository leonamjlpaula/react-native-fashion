import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Text, Theme } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.7;
  return (
    <Box
      height={size}
      width={size}
      style={{ borderRadius: size / 2 }}
      justifyContent="center"
      alignItems="center"
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;