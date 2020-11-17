/* eslint-disable max-len */
import React from "react";
import { Alert } from "react-native";

import { StackNavigationProps, Routes } from "../../components/Navigation";
import { Button, Container, SocialLogin } from "../../components";
import { Box, Text } from "../../components/Theme";
import TextInput from "../components/Form/TextInput";
import CheckBoxField from "../components/Form/CheckboxField";

const emailValidator = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const passwordValidator = (password: string) => true;
const handleSubmit = () => {};
const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button
          onPress={() => {
            Alert.alert("fish");
          }}
          variant="transparent"
        >
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here.
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your e-mail"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your e-password"
          validator={passwordValidator}
        />
        <Box flexDirection="row" justifyContent="space-between" marginTop="s">
          <CheckBoxField label="Remember me" />
          <Button
            variant="transparent"
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="xl">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
