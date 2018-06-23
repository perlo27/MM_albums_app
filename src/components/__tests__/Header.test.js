import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Header } from '../Header';
import { navigation } from '../../../jest/moks';

const title = 'test';

describe('Header', () => {
  it('should render correctly on ios', () => {
    const tree = renderer.create(<Header navigation={navigation} title={title} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly on android', () => {
    jest.mock('Platform', () => ({
      OS: 'android',
    }));

    const tree = renderer.create(<Header navigation={navigation} title={title} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call navigate.goBack on back button press', () => {
    const wrapper = shallow(<Header navigation={navigation} title={title} />);
    wrapper.find('Button').simulate('press');
    expect(navigation.goBack).toHaveBeenCalled();
    console.log(wrapper.find('Button').simulate('press'));
  });
});
