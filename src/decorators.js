import React from 'react';
// import { connect } from 'react-redux';

export const withDataLoader = Component => {
  class Wrapper extends Component {
    async componentDidMount() {
      // add loading data here
    }
  }

  return Wrapper;
};
