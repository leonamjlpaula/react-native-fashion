/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
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
  validator: (input: string) => boolean;
}
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(null);
  const reColor: keyof typeof theme.colors =
    state === Pristine ? "text" : state === Valid ? "primary" : "danger";

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };

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
        onBlur={validate}
        {...{ onChangeText }}
        {...props}
      />
      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          alignItems="center"
          justifyContent="center"
          backgroundColor={state === Valid ? "primary" : "danger"}
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={12}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
