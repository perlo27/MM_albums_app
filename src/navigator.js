import { FluidNavigator } from 'react-navigation-fluid-transitions';

import { AlbumsList, Album, Photo } from './components';

export const navigationPaths = {
  albumList: 'albumList',
  album: 'album',
  photo: 'photo',
};

export default FluidNavigator({
  [navigationPaths.albumList]: {
    screen: AlbumsList,
  },
  [navigationPaths.album]: {
    screen: Album,
  },
  [navigationPaths.photo]: {
    screen: Photo
  },
});
