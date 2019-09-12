import React from 'react';
import { shallow } from 'enzyme';

import Signature from './Signature';

it('Renders', () => {
  const props = {
    email: 'your.name@telstra.purple.net',
    sigType: false,
    mobile: '+61 111 222 333',
    name: 'your name',
    qualifications: 'Jedi Master | PSM I',
    title: 'Job Title',
    twitter: '@myTwitter'
  };

  const tree = shallow(<Signature {...props} />);
  expect(tree).toMatchSnapshot();
});
