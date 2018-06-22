import React, { PureComponent } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Transition } from 'react-navigation-fluid-transitions';

import { photo } from '../propTypes';
import { Header } from './Header';
import { headerHeight } from '../config';
import { withOrientationChangeHandler } from '../decorators';

import { photoSelector } from '../selectors';

@connect(photoSelector)
@withOrientationChangeHandler
export class Photo extends PureComponent {
  static propTypes = { photo };

  render() {
    const { photo, navigation } = this.props;
    if (!photo) {
      return null;
    }
    return (
      <View style={{flex: 1}}>
        <Transition anchor={`image${photo.id}`}>
          <Header title={photo.title} navigation={navigation} />
        </Transition>
        <Transition shared={`image${photo.id}`}>
          <Image
            style={{
              width: this.state.width,
              height: this.state.height - getStatusBarHeight() - headerHeight,
            }}
            source={{ uri: photo.url }}
          />
        </Transition>
      </View>
    );
  }
}
