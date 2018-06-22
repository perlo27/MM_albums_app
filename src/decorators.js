import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { dataTypes, columnsNumberMapping, orientationTypes, imageMargin } from './config';
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

const getParamsFromDimensions = ({ width, height }) => {
  const orientation = height > width ? orientationTypes.portrait : orientationTypes.landscape;
  const columnsNumber = columnsNumberMapping[orientation];
  const imageSize = width / columnsNumber - imageMargin * 2;
  return {
    width,
    height,
    imageSize,
    columnsNumber,
    orientation,
  };
};

export const withOrientationChangeHandler = Component => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = getParamsFromDimensions(Dimensions.get('window'));
    }

    handleRotation = () => this.setState(getParamsFromDimensions(Dimensions.get('window')));

    componentDidMount() {
      Dimensions.addEventListener('change', this.handleRotation);
    }

    componentWillUnmount() {
      Dimensions.removeEventListener('change', this.handleRotation);
    }
  }
  return Wrapper;
};
