const capitalize = str => (str ? str[0].toUpperCase() + str.slice(1) : '');

export const albumsMapper = albumsArr =>
  albumsArr.map(({ title, ...rest }) => ({
    ...rest,
    title: capitalize(title),
  }));

export const photosMapper = photosArr =>
  photosArr.reduce((acc, photo) => {
    return {
      ...acc,
      [photo.albumId]: [...(acc[photo.albumId] ? acc[photo.albumId] : []), photo],
    };
  }, {});
