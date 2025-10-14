import { StyleSheet, Text } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

interface StatusFeedbackProps {
  status: 'loading' | 'success' | 'error';
  message?: string;
}

export const StatusFeedback = ({ status, message }: StatusFeedbackProps) => {
  const { t } = useTranslation();
  const animation = useMemo(() => {
    switch (status) {
      case 'success':
        return require('@assets/lottie/success.json');
      case 'error':
        return require('@assets/lottie/error.json');
      default:
        return require('@assets/lottie/loading.json');
    }
  }, [status]);

  const defaultMessage =
    status === 'loading' ? t('status.loading') : status === 'error' ? t('status.error') : undefined;

  return (
    <>
      <AnimatedLottieView
        source={animation}
        autoPlay
        loop={status === 'loading'}
        style={styles.lottie}
      />
      {message || defaultMessage ? (
        <Text style={styles.message}>{message || defaultMessage}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 220,
    height: 220,
    alignSelf: 'center'
  },
  message: {
    color: '#FFFFFF',
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12
  }
});
