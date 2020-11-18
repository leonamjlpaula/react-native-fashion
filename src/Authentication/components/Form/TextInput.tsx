/* eslint-disable no-nested-ternary */
import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../../../components/Theme";

const SIZE = theme.borderRadii.m * 2;

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched: boolean | undefined;
  error: string | undefined;
}

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const reColor = !touched ? "text" : error ? "danger" : "primary";
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      padding="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <RNTextInput
        style={{ flex: 1 }}
        underlineColorAndroid="transparent"
        placeholderTextColor={color}
        {...props}
      />
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          alignItems="center"
          justifyContent="center"
          backgroundColor={!error ? "primary" : "danger"}
        >
          <Icon name={!error ? "check" : "x"} color="white" size={12} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;