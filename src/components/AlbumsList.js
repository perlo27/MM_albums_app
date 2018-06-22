import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import { ListItem, Header, Title } from 'native-base';


import { withDataLoader } from '../decorators';
import { navigationPaths } from '../navigator';
import { album } from './propTypes';
import { headerHeight } from '../config';



@withDataLoader
export class AlbumsList extends PureComponent {
  static propTypes = {
    albums: PropTypes.arrayOf(album),
    isLoading: PropTypes.bool,
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
    console.log('in Albums', this.props);
    if (this.props.isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <View>
        <Header style={{backgroundColor: 'white', height: headerHeight}}>
          <Title>Albums</Title>
        </Header>
        <FlatList
          data={this.props.albums}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderAlbum}
          ListEmptyComponent={ActivityIndicator}
        />
      </View>
    );
  }
}
