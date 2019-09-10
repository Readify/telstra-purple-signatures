import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

it('Renders', () => {
  const tree = shallow(<Form />);
  expect(tree).toMatchSnapshot();
});
