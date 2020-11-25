import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Button, Container, Text, CloseButton } from "../components";
import { StackNavigationProps, Routes } from "../components/Navigation";

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box alignItems="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
        <Box
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          backgroundColor="primaryLight"
          justifyContent="center"
          alignItems="center"
          marginBottom="m"
        >
          <Text color="primary">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Password changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>
        <Box alignItems="center" marginTop="xl">
          <Button
            variant="primary"
            onPress={() => {
              navigation.navigate("Login");
            }}
            label="Reset password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
