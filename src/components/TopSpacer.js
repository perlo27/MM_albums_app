import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const TopSpacer = () =>
  Platform.OS === 'android' ? null : <View style={styles.topSpacer} />;

const styles = StyleSheet.create({
  topSpacer: {
    height: getStatusBarHeight(),
  },
});
