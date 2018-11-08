import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

it('Renders full dom', () => {
  const tree = mount(<App/>);
  expect(tree).toMatchSnapshot();
});

it('Renders App', () => {
  const tree = shallow(<App/>);
  expect(tree).toMatchSnapshot();
});