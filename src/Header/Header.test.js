import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('Renders', () => {
  const props = {
    brandInfo: {
      brandLink: 'https://brand-link',
      appName: 'Test App'
    }
  };
  const tree = shallow(<Header {...props} />);
  expect(tree).toMatchSnapshot();
});
