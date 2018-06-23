import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import {
  withDataLoader,
  getParamsFromDimensions,
  withOrientationChangeHandler,
} from '../decorators';
import { navigation, storeWithoutAlbums } from '../../jest/moks';
import { columnsNumberMapping, dataTypes, imageMargin, orientationTypes } from '../config';

jest.mock('../thunks', () => ({
  getData: jest.fn(() => ({ type: 'test' })),
}));

jest.mock('react-native', () => {
  return {
    Dimensions: {
      get(d) {
        if (d === 'window') {
          return { width: 10, height: 20 };
        }
      },
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
  };
});

describe('decorators', () => {
  describe('withDataLoader', () => {
    it('should call loaders', () => {
      const { getData } = require('../thunks');

      @withDataLoader
      class TestClass extends Component {
        render() {
          return null;
        }
      }
      renderer.create(<TestClass navigation={navigation} store={storeWithoutAlbums} />);

      expect(getData.mock.calls[0][0]).toBe(dataTypes.albums);
      expect(getData.mock.calls[1][0]).toBe(dataTypes.photos);
    });
  });

  describe('getParamsFromDimensions', () => {
    it('should return correct values if width < height', () => {
      const testDimensions = { width: 10, height: 20 };

      const expectedOutput = {
        ...testDimensions,
        columnsNumber: columnsNumberMapping[orientationTypes.portrait],
        orientation: orientationTypes.portrait,
        imageSize:
          testDimensions.width / columnsNumberMapping[orientationTypes.portrait] - imageMargin * 2,
      };

      expect(getParamsFromDimensions(testDimensions)).toMatchObject(expectedOutput);
    });

    it('should return correct values if width < height', () => {
      const testDimensions = { width: 20, height: 10 };

      const expectedOutput = {
        ...testDimensions,
        columnsNumber: columnsNumberMapping[orientationTypes.landscape],
        orientation: orientationTypes.landscape,
        imageSize:
          testDimensions.width / columnsNumberMapping[orientationTypes.landscape] - imageMargin * 2,
      };

      expect(getParamsFromDimensions(testDimensions)).toMatchObject(expectedOutput);
    });
  });

  describe('withOrientationChangeHandler', () => {
    @withOrientationChangeHandler
    class TestClass extends Component {
      render() {
        return null;
      }
    }

    it('should set state correctly', () => {
      const wrapper = shallow(<TestClass />);
      expect(wrapper.state()).toMatchObject(getParamsFromDimensions({ width: 10, height: 20 }));

    });

    it('should register and unregister eventListener', () => {
      const { Dimensions } = require('react-native');
      const inst = renderer.create(<TestClass />);
      const handleRotation = inst.root._fiber.stateNode.handleRotation;
      expect(Dimensions.addEventListener).toHaveBeenCalledWith('change', handleRotation);
      inst.unmount();
      expect(Dimensions.removeEventListener).toHaveBeenCalledWith('change', handleRotation);
    });



  });
});
