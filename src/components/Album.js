import React, { PureComponent } from 'react';
import { FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

export class Album extends PureComponent {
  static propTypes = {
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        albumId: PropTypes.number,
        id: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string,
        thumbnailUrl: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    photos: [],
  };

  keyExtractor = item => `${item.id}`;

  renderPhoto = ({ item: { title, id, thumbnailUrl } }) => (
    <TouchableOpacity onPress={this.onPress(id)}>
      <Image style={{ width: 50, height: 50 }} source={{ uri: thumbnailUrl }} />
    </TouchableOpacity>
  );

  render() {
    console.log('in Albums', this.props);
    if (this.props.isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <FlatList
        data={this.props.albums}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderPhoto}
      />
    );
  }
}