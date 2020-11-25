import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BorderlessButton } from "react-native-gesture-handler";

import {
  StackNavigationProps,
  AuthenticationRoutes,
} from "../components/Navigation";
import { Button, Container } from "../components";
import { Box, Text } from "../components/Theme";
import TextInput from "../components/Form/TextInput";
import CheckBoxField from "../components/Form/CheckboxField";

import Footer from "./components/Footer";

const LoginSchema = Yup.object().shape({
  password: Yup.string().min(6, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "Login">) => {
  const password = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      action="Sign Up here."
      title=" Don't have an account? "
      onPress={() => {
        navigation.navigate("SignUp");
      }}
    />
  );

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: () => navigation.navigate("Home"),
  });

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            secureTextEntry
            onSubmitEditing={() => handleSubmit()}
          />
          <Box flexDirection="row" justifyContent="space-between" marginTop="m">
            <CheckBoxField
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <BorderlessButton
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text color="primary">Forgot password</Text>
            </BorderlessButton>
          </Box>
          <Box alignItems="center" marginTop="xl">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Log into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
