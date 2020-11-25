/* eslint-disable no-nested-ternary */
import React, { forwardRef } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, theme } from "../Theme";
import RoundedIcon from "../RoundedIcon";

const SIZE = theme.borderRadii.m * 2;

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched: boolean | undefined;
  error: string | undefined;
}
const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, error, touched, ...props }, ref) => {
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
          {...{ ref }}
          {...props}
        />
        {touched && (
          <RoundedIcon
            name={!error ? "check" : "x"}
            color="white"
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
