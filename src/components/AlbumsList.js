import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { withDataLoader } from '../decorators';

@withDataLoader
export class AlbumsList extends PureComponent {
  static propTypes = {
    albums: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.number,
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ),
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    albums: [],
  };

  onPress = id => () => this.props.navigation.navigate('album', { id });

  keyExtractor = item => `${item.id}`;

  renderAlbum = ({ item: { title, id } }) => (
    <TouchableOpacity onPress={this.onPress(id)}>
      <Text>{title}</Text>
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
        renderItem={this.renderAlbum}
      />
    );
  }
}