import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, StyleSheet } from 'react-native';
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
        <Header style={styles.header}>
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: headerHeight,
  },
});
