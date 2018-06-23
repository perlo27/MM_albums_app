import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
  'Spinner': 'Spinner'
}));