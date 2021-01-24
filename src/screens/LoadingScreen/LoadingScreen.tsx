import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {indigo, pink} from 'material-ui-colors';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLoading}>loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textLoading: {
    textAlign: 'center',
    fontSize: 20,
    color: '#999',
  },
});
