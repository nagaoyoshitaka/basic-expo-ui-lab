import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
});

export default function ButtonsScreen() {
  return (
    <View style={styles.container}>
      <Text>ボタン機能一覧</Text>
      <View style={styles.button}>
        <Button
          title="ボタン1"
          onPress={() => console.log('ボタン1が押されました')}
        />
      </View>
    </View>
  );
}