import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

it('Renders readify', () => {
  const tree = mount(<App />);
  expect(tree).toMatchSnapshot();
});

it('Renders readify support', () => {
  const tree = mount(<App />);
  tree.find('#readifySupport').simulate('change');
  expect(tree).toMatchSnapshot();
});

it('Renders bts', () => {
  const tree = mount(<App />);
  tree.find('#btsDigital').simulate('change');
  expect(tree).toMatchSnapshot();
});

it('Renders App', () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});
