import { FluidNavigator } from 'react-navigation-fluid-transitions';
import React from 'react';
import { View, Text } from 'react-native';

import { AlbumsList, Album } from './components';

export const navigationPaths = {
  albumList: 'albumList',
  album: 'album',
  photo: 'photo',
};

export default FluidNavigator({
  [navigationPaths.albumList]: {
    screen: AlbumsList,
  },
  [navigationPaths.album]: Album,
  [navigationPaths.photo]: {
    screen: () => (
      <View>
        <Text>photo</Text>
      </View>
    ),
  },
});
