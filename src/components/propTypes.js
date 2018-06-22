import PropTypes from 'prop-types';

export const album = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});

export const photo = PropTypes.shape({
  albumId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
});

export const navigation = PropTypes.shape({
  navigate: PropTypes.func,
});
