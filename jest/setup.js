import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

Enzyme.configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');

jest.mock('react-navigation-fluid-transitions', () => ({
  'Transition': 'Transition',
  'FluidNavigator': jest.fn()
}));

jest.mock('native-base', () => ({
  'Header': 'Header',
  'Body': 'Body',
  'Left': 'Left',
  'Button': 'Button',
  'Icon': 'Icon',
}));