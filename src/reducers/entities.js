import { GET_ALBUMS, GET_PHOTOS, successType, requestType } from '../actions';

const initialState = {
  albums: null,
  photos: null,
  areAlbumsLoading: false,
  arePhotosLoading: false,
};

export default (state = initialState, { type, response }) => {
  switch (type) {
    case requestType(GET_ALBUMS):
      return { ...state, areAlbumsLoading: true };
    case successType(GET_ALBUMS):
      return { ...state, albums: response, areAlbumsLoading: false };
    case successType(GET_PHOTOS):
      return { ...state, photos: response, arePhotosLoading: false,};
    default:
      return state;
  }
};
