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
    pronoun: 'he/him | she/her | they/them',
    twitter: '@myTwitter',
    brandName: 'Telstra Purple',
    brandLink: 'https://purple.telstra.com/',
    brandLinkName: 'purple.telstra.com',
    brandLogo: {
      link: 'https://readifysignatures.blob.core.windows.net/images/purple-email-logo.png',
      alt: 'Telstra Purple',
    },
  };

  const tree = shallow(<Signature {...props} />);
  expect(tree).toMatchSnapshot();
});
