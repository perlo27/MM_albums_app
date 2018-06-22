import React, { PureComponent } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Transition } from 'react-navigation-fluid-transitions';

import { photo } from './propTypes';
import { Header } from './Header';
import { headerHeight } from '../config';

@connect(({ entities: { photos } }, { navigation: { state: { params } } }) => ({
  photo: photos[params.albumId].find(({ id }) => id === params.id),
}))
export class Photo extends PureComponent {
  static propTypes = { photo };

  render() {
    const { photo, navigation } = this.props;
    if (!photo) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Transition anchor={`image${photo.id}`}>
          <Header title={photo.title} navigation={navigation} />
        </Transition>
        <Transition shared={`image${photo.id}`}>
          <Image style={styles.image} source={{ uri: photo.url }} />
        </Transition>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - getStatusBarHeight() - headerHeight,
  },
});
