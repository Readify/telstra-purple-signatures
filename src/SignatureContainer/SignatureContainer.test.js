import React from 'react';
import { shallow } from 'enzyme';

import SignatureContainer from './SignatureContainer';

it('Renders', () => {
  const props = {
    email: 'your.name@readify.net',
    sigType: 'readify',
    mobile: '+61 111 222 333',
    name: 'your name',
    title: 'Job Title',
    twitter: '@myTwitter'
  };

  const tree = shallow(<SignatureContainer {...props} />);
  expect(tree).toMatchSnapshot();
});

it('Renders with support fields', () => {
  const props = {
    email: 'your.name@readify.net',
    sigType: 'support',
    mobile: '+61 111 222 333',
    name: 'your name',
    title: 'Job Title',
    twitter: '@myTwitter'
  };

  const tree = shallow(<SignatureContainer {...props} />);
  expect(tree).toMatchSnapshot();
});
