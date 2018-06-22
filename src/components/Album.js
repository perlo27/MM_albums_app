import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList, Dimensions, TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Transition } from 'react-navigation-fluid-transitions';
import { Spinner } from 'native-base';

import { navigationPaths } from '../navigator';
import { photo } from '../propTypes';
import { Header } from './Header';
import { albumAndPhotosSelector } from '../selectors';

@connect(albumAndPhotosSelector)
export class Album extends PureComponent {
  static propTypes = {
    photos: PropTypes.arrayOf(photo),
  };

  static defaultProps = {
    photos: [],
  };

  onThumbnailPress = (id, albumId) => () =>
    this.props.navigation.navigate(navigationPaths.photo, { id, albumId });

  keyExtractor = item => `${item.id}`;

  renderThumbnail = ({ item: { title, id, thumbnailUrl, albumId } }) => (
    <TouchableOpacity style={styles.row} onPress={this.onThumbnailPress(id, albumId)}>
      <Transition shared={`image${id}`}>
        <Image style={styles.image} source={{ uri: thumbnailUrl }} />
      </Transition>
    </TouchableOpacity>
  );

  render() {
    const { album, photos, navigation } = this.props;
    return (
      <View>
        <Header title={album.title} navigation={navigation} />
        <FlatList
          style={{ marginTop: 5 }}
          data={photos}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderThumbnail}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'center' }}
          ListEmptyComponent={<Spinner color="green" />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    margin: 2,
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 18,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 3 - 6, //
    height: Dimensions.get('window').width / 3 - 6,
    borderRadius: 20,
  },
});
