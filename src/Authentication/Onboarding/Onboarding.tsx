import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { onScrollEvent, useValue, interpolateColor } from "react-native-redash";
import Animated, { multiply } from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subtitle: "Hear ir First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas.",
  },
  {
    title: "Excentric",
    color: "#FFE4D9",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday.",
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality.",
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.getNode().scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;