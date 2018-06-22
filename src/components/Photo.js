import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { photo } from './propTypes';


@connect(({ entities: { photos } }, { navigation: { state: { params } } }) => {
  console.log('params', params);
  return {
    photo: photos[params.albumId].find(({ id }) => id === params.id),
  };
})
export class Photo extends Component {

  static propTypes = { photo };

  render() {
    console.log(this.props);
    return <Image style={{ width: '100%', height: '50%' }} source={{ uri: this.props.photo.url }} />;
  }
}
