import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const PrimaryButton = ({ label, onPress, disabled, icon, style }: PrimaryButtonProps) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  return (
    <AnimatedPressable
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[styles.button, disabled ? styles.disabled : null, animatedStyle, style]}
      onPress={() => {
        if (!disabled) {
          onPress();
        }
      }}
      onPressIn={() => {
        if (!disabled) {
          scale.value = withSpring(0.96, { damping: 10 });
        }
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 10 });
      }}
    >
      {icon}
      <Text style={styles.label}>{label}</Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 24,
    backgroundColor: '#7A5CFF',
    shadowColor: '#7A5CFF',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5
  },
  disabled: {
    opacity: 0.5
  },
  label: {
    color: 'white',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    letterSpacing: 0.5
  }
});
