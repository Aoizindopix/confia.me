import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const colors = ['#0B0F1A', '#1A1446', '#261255'];

export const NeonGradientBackground = ({ children }: PropsWithChildren) => (
  <View style={styles.wrapper}>
    <LinearGradient colors={colors} style={styles.gradient}>
      {children}
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0B0F1A'
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 32
  }
});
