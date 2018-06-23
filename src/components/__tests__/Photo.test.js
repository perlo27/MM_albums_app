import React from 'react';
import renderer from 'react-test-renderer';
import { Photo } from '../Photo';

import { store, navigation, storeWithoutPhoto } from '../../../jest/moks';

jest.mock('../Header', () => ({
  'Header': 'Header'
}));



describe('Photo', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Photo navigation={navigation} store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without image', () => {
    const tree = renderer
      .create(<Photo navigation={navigation} store={storeWithoutPhoto} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});