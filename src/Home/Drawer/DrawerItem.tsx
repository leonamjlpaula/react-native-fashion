import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Theme } from "../../components/Theme";
import { Box, RoundedIcon, Text } from "../../components";

export interface DrawerItemProps {
  icon: string;
  label: string;
  screen: string;
  color: keyof Theme["colors"];
}

const DrawerItem = ({ icon, label, screen, color }: DrawerItemProps) => {
  return (
    <RectButton>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          name={icon}
          backgroundColor={color}
          iconRatio={0.5}
          color="white"
          size={36}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
