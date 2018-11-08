import React from 'react';
import { shallow } from 'enzyme';

import Info from './Info';

it('Renders', () => {
  const tree = shallow(<Info/>);
  expect(tree).toMatchSnapshot();
});