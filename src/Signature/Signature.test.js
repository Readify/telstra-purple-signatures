import React from 'react';
import { shallow } from 'enzyme';

import Signature from './Signature';

it('Renders', () => {
  const props = {
    email: 'your.name@readify.net',
    isSupport: false,
    mobile: '+61 111 222 333',
    name: 'your name',
    placeholders: {
      email: 'your.name@readify.net',
      mobile: '+61 111 222 333',
      name: 'Your Name',
      qualifications: 'Jedi Master | PSM I',
      title: 'Job Title',
      twitter: '@myTwitter',
    },
    qualifications: 'Jedi Master | PSM I',
    title: 'Job Title',
    twitter: '@myTwitter',
    brandLink: 'https://test.com',
    brandLinkName: 'Test',
    brandLogo: 'https://test.com/test-image'
  };

  const tree = shallow(<Signature {...props} />);
  expect(tree).toMatchSnapshot();
});