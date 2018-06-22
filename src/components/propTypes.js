import PropTypes from 'prop-types';

export const album = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
});

export const photo =  PropTypes.shape({
  albumId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
});