import { createSelector } from 'reselect';

const albumsSelector = state => state.entities.albums;
export const photosSelector = state => state.entities.photos;

const navigationParamsSelector = (
  _,
  {
    navigation: {
      state: { params },
    },
  },
) => params;

export const albumsListSelector = createSelector(
  albumsSelector,
  state => state.entities.areAlbumsLoading,
  (albums, areAlbumsLoading) => ({
    albums,
    areAlbumsLoading,
  }),
);

export const photoSelector = createSelector(
  photosSelector,
  navigationParamsSelector,
  (photos, { albumId, id }) => ({
    photo: photos[albumId].find(p => p.id === id),
  }),
);

export const albumAndPhotosSelector = createSelector(
  albumsSelector,
  photosSelector,
  navigationParamsSelector,
  (albums, photos, { id }) => ({
    photos: photos[id],
    album: albums.find(a => a.id === id),
  }),
);
