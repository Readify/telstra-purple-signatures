import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

it('Renders', () => {
  const tree = shallow(
    <Button
      onClickHandler={() => null}
      classBefore={'test before'}
      classAfter={'test after'}
      textBefore={'text before'}
      textAfter={'text after'}
    />
  );
  expect(tree).toMatchSnapshot();
});
