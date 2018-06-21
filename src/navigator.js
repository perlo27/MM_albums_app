import { FluidNavigator } from 'react-navigation-fluid-transitions';
import React from 'react';
import { View, Text } from 'react-native';

import { AlbumsList, Album } from './components';

export const paths = {
  albumList: 'albumList',
  album: 'album',
  photo: 'photo',
};

export default FluidNavigator({
  [paths.albumList]: {
    screen: AlbumsList,
  },
  [paths.album]: Album,
  [paths.photo]: {
    screen: () => (
      <View>
        <Text>photo</Text>
      </View>
    ),
  },
});
