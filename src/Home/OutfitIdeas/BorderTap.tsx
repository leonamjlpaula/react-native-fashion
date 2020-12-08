import React, { ReactNode } from "react";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  not,
  eq,
  neq,
  and,
  call,
  clockRunning,
  cond,
  set,
  startClock,
  stopClock,
  useCode,
} from "react-native-reanimated";
import { useClock, useTapGestureHandler, useValue } from "react-native-redash";

interface BorderTapProps {
  children: ReactNode;
  onPress: () => void;
}

const BorderTap = ({ children, onPress }: BorderTapProps) => {
  const clock = useClock();
  const start = useValue(0);
  const { gestureHandler, state } = useTapGestureHandler();
  const opacity = useValue(0);
  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(state, State.BEGAN), [stopClock(clock)]),
      cond(eq(state, State.END), [call([], onPress)]),
    ],
    []
  );

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default BorderTap;
