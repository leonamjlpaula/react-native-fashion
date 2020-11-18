import React from "react";
import { Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { StackNavigationProps, Routes } from "../../components/Navigation";
import { Button, Container } from "../../components";
import { Box, Text } from "../../components/Theme";
import TextInput from "../components/Form/TextInput";
import CheckBoxField from "../components/Form/CheckboxField";
import SocialLogin from "../components/SocialLogin";

const LoginSchema = Yup.object().shape({
  password: Yup.string().min(6, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

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
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your e-mail"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock"
                placeholder="Enter your e-password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={errors.password}
                touched={touched.password}
              />
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginTop="s"
              >
                <CheckBoxField
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Button
                  variant="transparent"
                  onPress={() => console.log("forgot")}
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
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
