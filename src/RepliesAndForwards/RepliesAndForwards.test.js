import React from 'react';
import { shallow } from 'enzyme';

import RepliesAndForwards from './RepliesAndForwards';

it('Renders', () => {
  const props = {
    emailHtml: <div>your.name@readify.net</div>,
    isSupport: false,
    mobileHtml: <div>+61 111 222 333</div>,
    name: 'your name',
    placeholders: {
      email: 'your.name@readify.net',
      mobile: '+61 111 222 333',
      name: 'Your Name',
      qualifications: 'Jedi Master | PSM I',
      title: 'Job Title',
      twitter: '@myTwitter',
    },
    title: 'Job Title',
    twitterHtml: <div>@myTwitter</div>,
    brandLink: 'https://test.com',
    brandName: 'Test',
    brandLinkName: 'Test Link Name'
  };

  const tree = shallow(<RepliesAndForwards {...props} />);
  expect(tree).toMatchSnapshot();
});