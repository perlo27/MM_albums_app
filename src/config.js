import { albumsMapper, photosMapper } from './mappers';
import {getAlbumsAction, getPhotosAction} from './actions/entities';
export const endpoint = 'https://jsonplaceholder.typicode.com';

export const dataTypes = {
  albums: {
    path: '/albums',
    mapper: albumsMapper,
    action: getAlbumsAction
  },
  photos: {
    path: '/photos',
    mapper: photosMapper,
    action: getPhotosAction
  },
};
