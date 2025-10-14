import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { HistoryEntry } from '@utils/types';
import { useTranslation } from 'react-i18next';

interface HistoryCardProps {
  entry: HistoryEntry;
  index: number;
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const HistoryCard = ({ entry, index }: HistoryCardProps) => {
  const { t } = useTranslation();
  const isActive = entry.status === 'Ativa' || entry.status === 'Active';
  return (
    <AnimatedView entering={FadeInDown.delay(index * 50)} style={styles.card}>
      <View style={styles.row}>
        <Text accessibilityLabel={t(`apps.${entry.app}`)} style={styles.app}>
          {t(`apps.${entry.app}`)}
        </Text>
        <Text style={[styles.status, isActive ? styles.active : styles.inactive]}>
          {isActive ? t('result.active') : t('result.inactive')}
        </Text>
      </View>
      <Text style={styles.username}>@{entry.username}</Text>
      <Text style={styles.timestamp}>
        {t('result.timestamp', { date: new Date(entry.timestamp).toLocaleString() })}
      </Text>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#131A2E',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1D2A5E'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  app: {
    color: '#FFFFFF',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16
  },
  status: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14
  },
  active: {
    color: '#6BFFB8'
  },
  inactive: {
    color: '#FF8A8A'
  },
  username: {
    color: '#AAB3FF',
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    marginBottom: 4
  },
  timestamp: {
    color: '#6C7393',
    fontFamily: 'Inter_400Regular',
    fontSize: 12
  }
});
