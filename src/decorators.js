import React from 'react';
import { connect } from 'react-redux';
import {dataTypes} from './config';
import {getData} from './thunks'

export const withDataLoader = Component => {
  class Wrapper extends Component {
    componentDidMount() {
      Object.values(dataTypes).forEach(type => {
        this.props.getData(type);
      })
    }
  }
  return connect(state => ({...state.entities}), {getData})(Wrapper);
};
