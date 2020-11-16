import React from "react";
import { Alert, View } from "react-native";

import { StackNavigationProps, Routes } from "../../components/Navigation";
import { Button, Container, SocialLogin } from "../../components";
import { Box, Text } from "../../components/Theme";

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

  return <Container {...{ footer }} />;
};

export default Login;
