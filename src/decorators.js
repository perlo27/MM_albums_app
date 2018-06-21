import React from 'react';
// import { connect } from 'react-redux';

export const withDataLoader = Component => {
  class Wrapper extends Component {
    componentDidMount() {
      // add loading data here
    }
  }

  return Wrapper;
};
