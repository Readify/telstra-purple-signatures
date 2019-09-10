import React from 'react';
import { shallow } from 'enzyme';

import SocialMedia from './SocialMedia';

it('Renders', () => {
  const tree = shallow(<SocialMedia />);
  expect(tree).toMatchSnapshot();
});
