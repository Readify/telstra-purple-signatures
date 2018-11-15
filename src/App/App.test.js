import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

const errFunc = console.error;
let errMsg = '';

// going to suppress errors ont he full render because react hates the shitty tables needed for email html
// but im going to snap shot the start of the warnings so that if there are actual errors we notice
beforeEach(() => {
  console.error = (...args) => (errMsg = args.slice(0, 3));
});

afterEach(() => {
  errMsg = '';
  console.error = errFunc;
});

it('Renders readify', () => {
  const tree = mount(<App />);
  expect(tree).toMatchSnapshot();
  expect(errMsg).toMatchSnapshot();
});

it('Renders readify support', () => {
  const tree = mount(<App />);
  tree.find('#readifySupport').simulate('change');
  expect(tree).toMatchSnapshot();
  expect(errMsg).toMatchSnapshot();
});

it('Renders bts', () => {
  const tree = mount(<App />);
  tree.find('#btsDigital').simulate('change');
  expect(tree).toMatchSnapshot();
  expect(errMsg).toMatchSnapshot();
});

it('Renders App', () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
});
