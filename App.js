import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Navigator from './src/navigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
