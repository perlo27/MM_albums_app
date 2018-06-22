import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { navigationPaths } from '../navigator';
import { photo } from './propTypes';


@connect(({ entities: { photos } }, { navigation: { state: { params } } }) => ({
  photos: photos[params.id],
}))
export class Album extends PureComponent {
  static propTypes = {
    photos: PropTypes.arrayOf(photo)
  };

  static defaultProps = {
    photos: [],
  };

  onPress = (id, albumId) => () =>
    this.props.navigation.navigate(navigationPaths.photo, { id, albumId });

  keyExtractor = item => `${item.id}`;

  renderPhoto = ({ item: { title, id, thumbnailUrl, albumId } }) => (
    <TouchableOpacity onPress={this.onPress(id, albumId)}>
      <Image style={{ width: 150, height: 150 }} source={{ uri: thumbnailUrl }} />
    </TouchableOpacity>
  );

  render() {
    console.log('in Album!!!!!', this.props);
    if (this.props.isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <FlatList
        data={this.props.photos}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderPhoto}
      />
    );
  }
}
