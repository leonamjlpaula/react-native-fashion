import React from "react";
import { Dimensions, Image } from "react-native";

import { StackNavigationProps, Routes } from "../components/Navigation";
import { Button } from "../components";
import { Box, Text } from "../components/Theme";

const picture = {
  src: require("./assets/5.png"),
  width: 3383,
  height: 5074,
};
const { width } = Dimensions.get("window");

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - 75,
            height: ((width - 75) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        />
        <Box
          flex={1}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Lets's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            variant="default"
            label="Join us, it's Free"
            onPress={() => console.log("f")}
          />
          <Button
            variant="transparent"
            label="Forgot password"
            onPress={() => console.log("ff")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
