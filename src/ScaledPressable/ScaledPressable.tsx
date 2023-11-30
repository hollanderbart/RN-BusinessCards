import React, { useEffect, useState } from 'react';
import { Pressable, Animated } from 'react-native';
import { HapticFeedbackTypes, trigger } from 'react-native-haptic-feedback';

type ScaledPressableProps = {
  children: React.ReactNode;
  isScalingActive: boolean;
  onLongPress?: () => void;
  onPress?: () => void;
  onPressOut?: () => void;
};

const CARD_SORT_ACTIVE = 1.06;
const SCALE_DURATION = 200;

export const ScaledPressable = ({
  children,
  isScalingActive,
  onLongPress,
  onPress,
  onPressOut,
}: ScaledPressableProps) => {
  const [isLongPressActive, setIsLongPressActive] = useState(false);
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isScalingActive) {
      Animated.timing(scaleValue, {
        toValue: CARD_SORT_ACTIVE,
        duration: SCALE_DURATION,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: SCALE_DURATION,
        useNativeDriver: true,
      }).start();
    }
  }, [scaleValue, isScalingActive]);

  useEffect(() => {
    const beginningToLongPress = !isLongPressActive && isScalingActive;
    const endOfLongPress = isLongPressActive && !isScalingActive;

    if (beginningToLongPress || endOfLongPress) {
      trigger(HapticFeedbackTypes.impactMedium);
    }
    setIsLongPressActive(!!isScalingActive);
  }, [isLongPressActive, isScalingActive]);

  return (
    <Pressable
      onLongPress={onLongPress}
      onPress={onPress}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={{
          transform: [
            {
              scale: scaleValue,
            },
          ],
        }}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};
