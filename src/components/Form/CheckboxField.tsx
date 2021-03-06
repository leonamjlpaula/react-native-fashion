import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../Theme";

interface CheckBoxFieldProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBoxField = ({ label, checked, onChange }: CheckBoxFieldProps) => {
  return (
    <BorderlessButton onPress={onChange} style={{ justifyContent: "center" }}>
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="s"
          width={20}
          height={20}
          justifyContent="center"
          alignItems="center"
          borderRadius="s"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default CheckBoxField;
