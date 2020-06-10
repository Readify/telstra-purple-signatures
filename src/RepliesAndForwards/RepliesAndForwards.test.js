import React from 'react';
import { shallow } from 'enzyme';

import RepliesAndForwards from './RepliesAndForwards';

it('Renders', () => {
  const props = {
    email: 'your.name@purple.telstra.com',
    sigType: false,
    mobile: '+61 111 222 333',
    name: 'your name',
    pronoun: 'he/him | she/her | they/them',
    qualifications: 'Jedi Master | PSM I',
    title: 'Job Title',
    twitter: '@myTwitter',
    brandName: 'Telstra Purple',
    brandLink: 'https://purple.telstra.com/',
    brandLinkName: 'purple.telstra.com',
    brandLogo: {
      link:
        'https://readifysignatures.blob.core.windows.net/images/purple-email-logo.png',
      alt: 'Telstra Purple'
    }
  };

  const tree = shallow(<RepliesAndForwards {...props} />);
  expect(tree).toMatchSnapshot();
});
