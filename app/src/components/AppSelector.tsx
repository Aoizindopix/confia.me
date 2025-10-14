import { useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { DatingApp } from '@utils/types';

interface AppSelectorProps {
  value: DatingApp;
  onChange: (value: DatingApp) => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const AppSelector = ({ value, onChange }: AppSelectorProps) => {
  const { t } = useTranslation();
  const options = useMemo(
    () =>
      [
        { id: 'tinder', label: t('apps.tinder') },
        { id: 'bumble', label: t('apps.bumble') },
        { id: 'badoo', label: t('apps.badoo') },
        { id: 'eden', label: t('apps.eden') },
        { id: 'salt', label: t('apps.salt') },
        { id: 'quimicaCrista', label: t('apps.quimicaCrista') }
      ] as Array<{ id: DatingApp; label: string }>,
    [t]
  );

  return (
    <FlatList
      horizontal
      data={options}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <AnimatedPressable
          entering={FadeInDown.delay(index * 80)}
          exiting={FadeOutUp}
          style={[styles.item, item.id === value ? styles.activeItem : null]}
          onPress={() => onChange(item.id)}
        >
          <Text style={styles.label}>{item.label}</Text>
        </AnimatedPressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingVertical: 8,
    marginBottom: 24
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#1D2A5E',
    backgroundColor: '#131A2E'
  },
  activeItem: {
    borderColor: '#FF4DFF',
    shadowColor: '#FF4DFF',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 4
  },
  label: {
    color: '#FFFFFF',
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    letterSpacing: 0.3
  }
});
