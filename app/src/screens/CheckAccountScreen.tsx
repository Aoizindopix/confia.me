import { NeonGradientBackground } from '@components/NeonGradientBackground';
import { PrimaryButton } from '@components/PrimaryButton';
import { NeonTextInput } from '@components/NeonTextInput';
import { AppSelector } from '@components/AppSelector';
import { StatusFeedback } from '@components/StatusFeedback';
import { useCheckAccount } from '@hooks/useCheckAccount';
import { DEFAULT_APP } from '@utils/constants';
import { DatingApp } from '@utils/types';
import { StackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootStackParamList } from '../types/navigation';

export const CheckAccountScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'CheckAccount'>) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [selectedApp, setSelectedApp] = useState<DatingApp>(DEFAULT_APP);
  const { checkAccount, isPending, isSuccess, isError, data, reset } = useCheckAccount({
    onSuccess: (entry) => {
      navigation.navigate('Result', { entry });
    }
  });

  const isButtonDisabled = !username.trim().length || isPending;

  return (
    <NeonGradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
        style={{ flex: 1 }}
      >
        <View style={styles.container} className="gap-4">
          <Text accessibilityRole="header" style={styles.title}>
            {t('check.title')}
          </Text>
          <NeonTextInput
            accessibilityLabel={t('check.placeholder')}
            placeholder={t('check.placeholder')}
            value={username}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {
              setUsername(text);
              if (isSuccess || isError) {
                reset();
              }
            }}
          />
          <AppSelector value={selectedApp} onChange={setSelectedApp} />
          <Text style={styles.hint}>{t('check.hint')}</Text>
          <PrimaryButton
            label={isPending ? t('status.loading') : t('check.button')}
            onPress={() => checkAccount(username.trim(), selectedApp)}
            disabled={isButtonDisabled}
          />
          <PrimaryButton
            label={t('history.title')}
            onPress={() => navigation.navigate('History')}
            style={styles.secondaryButton}
          />
          <View accessibilityLiveRegion="polite" style={styles.feedbackContainer} className="items-center">
            {isPending && <StatusFeedback status="loading" />}
            {isError && <StatusFeedback status="error" />}
            {isSuccess && data && (
              <StatusFeedback
                status="success"
                message={
                  data.status === 'Ativa' ? t('result.active') : t('result.inactive')
                }
              />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </NeonGradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    marginBottom: 8
  },
  hint: {
    color: '#6C7393',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    marginBottom: 12
  },
  secondaryButton: {
    backgroundColor: '#1D2A5E'
  },
  feedbackContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
