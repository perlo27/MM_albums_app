import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Album } from '../Album';
import { navigation, store } from '../../../jest/moks';
import { navigationPaths } from '../../navigator';

describe('Album', function() {
  it('should render correctly', () => {
    const tree = renderer.create(<Album navigation={navigation} store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should navigate to photo detail page on thumbnail press', () => {
    const wrapper = shallow(<Album navigation={navigation} store={store} />);

    const testIds = { id: 1, albumId: 1 };
    const testItem = { item: { title: 'test', thumbnailUrl: 'test', ...testIds } };
    const a = wrapper
      .dive()
      .find('FlatList')
      .first()
      .prop('renderItem')(testItem);

    a.props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith(navigationPaths.photo, testIds);
  });
});
