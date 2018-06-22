import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Navigator from './src/navigator';
import { TopSpacer } from './src/components';
import store from './src/store';

console.ignoredYellowBox = ['Warning: isMounted(...) is deprecated'];

export default () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <TopSpacer />
      <Navigator />
    </View>
  </Provider>
);
