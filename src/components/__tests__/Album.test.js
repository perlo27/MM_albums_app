import React from 'react';
import renderer from 'react-test-renderer';
import { Album } from '../Album';
import { navigation, store } from './moks';

describe('Album', function() {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Album navigation={navigation} store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});