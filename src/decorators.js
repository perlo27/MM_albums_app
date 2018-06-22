import React from 'react';
import { connect } from 'react-redux';
import { dataTypes } from './config';
import { getData } from './thunks';

export const withDataLoader = Component => {
  @connect(
    ({ entities: { albums, areAlbumsLoading } }) => ({
      albums,
      areAlbumsLoading,
    }),
    { getData },
  )
  class Wrapper extends Component {
    componentDidMount() {
      const {albums} = this.props;
      if(!albums) {
        Object.values(dataTypes).forEach(type => {
          this.props.getData(type);
        });
      }
    }
  }
  return Wrapper;
};
