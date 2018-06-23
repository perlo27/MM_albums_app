import React from 'react';
import renderer from 'react-test-renderer';
import { TopSpacer } from '../TopSpacer';



describe('TopSpacer', () => {
  it('should render correctly on ios', () => {
    const tree = renderer
      .create(<TopSpacer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly on android', () => {
    jest.mock('Platform', () => ({
      OS: 'android',
    }));
    const tree = renderer
      .create(<TopSpacer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});