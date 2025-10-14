import { NeonGradientBackground } from '@components/NeonGradientBackground';
import { HistoryCard } from '@components/HistoryCard';
import { PrimaryButton } from '@components/PrimaryButton';
import { useHistory } from '@hooks/useHistory';
import { StackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootStackParamList } from '../types/navigation';

export const HistoryScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'History'>) => {
  const { entries, clearHistory } = useHistory();
  const { t } = useTranslation();

  return (
    <NeonGradientBackground>
      <View style={styles.header} className="flex-row gap-3">
        <PrimaryButton
          label={t('check.button')}
          onPress={() => navigation.navigate('CheckAccount')}
          style={styles.flexButton}
        />
        <PrimaryButton
          label={t('history.clear')}
          onPress={clearHistory}
          style={[styles.flexButton, styles.clearButton]}
        />
      </View>
      <FlatList
        accessibilityRole="list"
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <HistoryCard entry={item} index={index} />}
        contentContainerStyle={[styles.list, entries.length === 0 && styles.centerEmpty]}
        ListHeaderComponent={
          entries.length > 0 ? (
            <Text accessibilityRole="header" style={styles.headerTitle} className="text-white text-xl font-bold">
              {t('history.title')}
            </Text>
          ) : null
        }
        ListEmptyComponent={
          <Text style={styles.empty} className="text-center">
            {t('history.empty')}
          </Text>
        }
      />
    </NeonGradientBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 16
  },
  clearButton: {
    backgroundColor: '#1D2A5E'
  },
  flexButton: {
    flex: 1
  },
  list: {
    paddingHorizontal: 24,
    paddingBottom: 32
  },
  headerTitle: {
    fontFamily: 'Inter_700Bold',
    marginBottom: 16
  },
  centerEmpty: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  empty: {
    color: '#6C7393',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40
  }
});
