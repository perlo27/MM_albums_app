import React from 'react';
import { View, StyleSheet } from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';


export const TopSpacer = () => <View style={styles.topSpacer} />;

const styles = StyleSheet.create({
  topSpacer: {
    height: getStatusBarHeight(),
  },
});
