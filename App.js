import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './src/navigator';
import store from './src/store';

console.ignoredYellowBox = [
  'Warning: isMounted(...) is deprecated'
];

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
