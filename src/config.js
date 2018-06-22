import { albumsMapper, photosMapper } from './mappers';
import { getAlbumsAction, getPhotosAction } from './actions/entities';

export const endpoint = 'https://jsonplaceholder.typicode.com';

export const dataTypes = {
  albums: {
    path: '/albums',
    mapper: albumsMapper,
    action: getAlbumsAction,
  },
  photos: {
    path: '/photos',
    mapper: photosMapper,
    action: getPhotosAction,
  },
};

export const headerHeight = 50;
export const imageMargin = 2;

export const orientationTypes = {
  portrait: 'portrait',
  landscape: 'landscape',
};

export const columnsNumberMapping = {
  [orientationTypes.landscape]: 4,
  [orientationTypes.portrait]: 3,
};
