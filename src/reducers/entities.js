import { GET_ALBUMS, GET_PHOTOS, successType } from '../actions';

export default (state = {}, { type, response }) => {
  switch (type) {
    case successType(GET_ALBUMS):
      return { ...state, albums: response };
    case successType(GET_PHOTOS):
      return { ...state, photos: response };
    default:
      return state;
  }
};
