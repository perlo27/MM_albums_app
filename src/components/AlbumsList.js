import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text } from 'react-native';
import { ListItem, Header, Title, Spinner } from 'native-base';

import { withDataLoader } from '../decorators';
import { navigationPaths } from '../navigator';
import { album } from './propTypes';
import { headerHeight } from '../config';

@withDataLoader
export class AlbumsList extends PureComponent {
  static propTypes = {
    albums: PropTypes.arrayOf(album),
  };

  static defaultProps = {
    albums: [],
  };

  onPress = (id, title) => () =>
    this.props.navigation.navigate(navigationPaths.album, { id, title });

  keyExtractor = item => `${item.id}`;

  renderAlbum = ({ item: { title, id } }) => (
    <ListItem onPress={this.onPress(id, title)}>
      <Text>{title}</Text>
    </ListItem>
  );

  render() {
    const { albums } = this.props;
    return (
      <View>
        <Header style={{ backgroundColor: 'white', height: headerHeight }}>
          <Title>Albums</Title>
        </Header>
        <FlatList
          data={albums}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderAlbum}
          ListEmptyComponent={<Spinner color="green" />}
        />
      </View>
    );
  }
}
