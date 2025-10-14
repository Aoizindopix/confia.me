import { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

export const NeonTextInput = forwardRef<TextInput, TextInputProps>(function NeonTextInput(
  props,
  ref
) {
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        placeholderTextColor="#6C7393"
        style={styles.input}
        {...props}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#7A5CFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 16
  },
  input: {
    color: '#FFFFFF',
    fontFamily: 'Inter_400Regular',
    fontSize: 16
  }
});
