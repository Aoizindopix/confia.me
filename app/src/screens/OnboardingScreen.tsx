import { NeonGradientBackground } from '@components/NeonGradientBackground';
import { PrimaryButton } from '@components/PrimaryButton';
import { StackScreenProps } from '@react-navigation/native-stack';
import AnimatedLottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootStackParamList } from '../types/navigation';

export const OnboardingScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'Onboarding'>) => {
  const { t } = useTranslation();

  return (
    <NeonGradientBackground>
      <View className="flex-1 justify-center">
        <AnimatedLottieView
          source={require('@assets/lottie/onboarding.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
        <Text accessibilityRole="header" style={styles.title} className="text-center">
          {t('onboarding.title')}
        </Text>
        <Text style={styles.subtitle} className="text-center">
          {t('onboarding.subtitle')}
        </Text>
        <PrimaryButton
          label={t('onboarding.cta')}
          onPress={() => navigation.replace('CheckAccount')}
          style={styles.button}
        />
      </View>
    </NeonGradientBackground>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 260,
    height: 260,
    alignSelf: 'center',
    marginBottom: 48
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16
  },
  subtitle: {
    color: '#AAB3FF',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 48
  },
  button: {
    marginTop: 24
  }
});
