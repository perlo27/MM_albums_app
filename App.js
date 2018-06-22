import React from 'react';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Spinner } from 'native-base';

import Navigator from './src/navigator';
import { TopSpacer } from './src/components';
import createStore from './src/store';

const {store, persistor} = createStore();

console.ignoredYellowBox = ['Warning: isMounted(...) is deprecated'];

export default () => (
  <Provider store={store}>
    <PersistGate
      loading={<Spinner color="green" />}
      persistor={persistor}
    >
      <View style={{ flex: 1 }}>
        <TopSpacer />
        <Navigator />
      </View>
    </PersistGate>
  </Provider>
);
