import { NeonGradientBackground } from '@components/NeonGradientBackground';
import { PrimaryButton } from '@components/PrimaryButton';
import { StatusFeedback } from '@components/StatusFeedback';
import { StackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootStackParamList } from '../types/navigation';

export const ResultScreen = ({ route, navigation }: StackScreenProps<RootStackParamList, 'Result'>) => {
  const { entry } = route.params;
  const { t } = useTranslation();
  const isActive = entry.status === 'Ativa' || entry.status === 'Active';

  return (
    <NeonGradientBackground>
      <View style={styles.container} className="items-center gap-4">
        <Text accessibilityRole="header" style={styles.title} className="text-center">
          {t('result.title')}
        </Text>
        <Text style={styles.subtitle} className="text-center">
          @{entry.username}
        </Text>
        <Text style={styles.appLabel} className="text-center">
          {t(`apps.${entry.app}`)}
        </Text>
        <StatusFeedback
          status={isActive ? 'success' : 'error'}
          message={isActive ? t('result.active') : t('result.inactive')}
        />
        <PrimaryButton
          label={t('result.tryAgain')}
          onPress={() => navigation.replace('CheckAccount')}
        />
      </View>
    </NeonGradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 30,
    textAlign: 'center'
  },
  subtitle: {
    color: '#AAB3FF',
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    textAlign: 'center'
  },
  appLabel: {
    color: '#6C7393',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    textAlign: 'center'
  }
});
