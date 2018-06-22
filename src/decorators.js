import React from 'react';
import { connect } from 'react-redux';

import { dataTypes } from './config';
import { getData } from './thunks';
import { albumsListSelector } from './selectors';

export const withDataLoader = Component => {
  @connect(
    albumsListSelector,
    { getData },
  )
  class Wrapper extends Component {
    componentDidMount() {
      const { albums, getData } = this.props;
      if (!albums) {
        Object.values(dataTypes).forEach(getData);
      }
    }
  }
  return Wrapper;
};
