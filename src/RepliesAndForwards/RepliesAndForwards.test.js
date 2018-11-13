import React from 'react';
import { shallow } from 'enzyme';

import RepliesAndForwards from './RepliesAndForwards';

it('Renders', () => {
  const props = {
    email: 'your.name@readify.net',
    isSupport: false,
    mobile: '+61 111 222 333',
    name: 'your name',
    qualifications: 'Jedi Master | PSM I',
    title: 'Job Title',
    twitterHtml: <span>@myTwitter</span>
  };

  const tree = shallow(<RepliesAndForwards {...props} />);
  expect(tree).toMatchSnapshot();
});
