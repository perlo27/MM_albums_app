import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { AlbumsList } from '../AlbumsList';
import { navigation, store } from './moks';
import { navigationPaths } from '../../navigator';

jest.mock('../Header', () => ({
  Header: 'Header',
}));

describe('AlbumsList', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<AlbumsList navigation={navigation} store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should navigate to album page on listItem press', () => {
    const wrapper = shallow(<AlbumsList navigation={navigation} store={store} />);

    const testItem = { item: { title: 'test', id: 1 } };
    const a = wrapper
      .dive()
      .find('FlatList')
      .first()
      .prop('renderItem')(testItem);

    a.props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith(navigationPaths.album, testItem.item);
  });
});
