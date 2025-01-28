import { HelloWave } from '@/components/HelloWave';
import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types';

const TabTwoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TabTwoScreen</Text>
      <HelloWave />
    </View>
  );
};

export default TabTwoScreen;

const styles = StyleSheet.create((theme: UnistylesTheme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
