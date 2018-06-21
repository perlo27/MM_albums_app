import { FluidNavigator } from 'react-navigation-fluid-transitions';
import React from 'react';
import {View, Text} from 'react-native'

export default FluidNavigator({
  albumList: {
    screen: () => <View><Text>albumList</Text></View>
  },
  album: {
    screen: () => <View><Text>album</Text></View>
  },
  photo: {
    screen: () => <View><Text>photo</Text></View>
  }
})