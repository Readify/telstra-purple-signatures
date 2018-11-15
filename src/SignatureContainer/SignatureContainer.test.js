import React from 'react';
import { shallow } from 'enzyme';

import SignatureContainer, {
  containerChooser,
  createContainer
} from './SignatureContainer';

describe('SignatureContainer', () => {
  it('Renders', () => {
    const props = {
      email: 'your.name@readify.net',
      sigType: 'readify',
      mobile: '+61 111 222 333',
      name: 'your name',
      title: 'Job Title',
      twitter: '@myTwitter'
    };

    const tree = shallow(<SignatureContainer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('Renders with support fields', () => {
    const props = {
      email: 'your.name@readify.net',
      sigType: 'support',
      mobile: '+61 111 222 333',
      name: 'your name',
      title: 'Job Title',
      twitter: '@myTwitter'
    };

    const tree = shallow(<SignatureContainer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('Renders with bts fields', () => {
    const props = {
      email: 'your.name@readify.net',
      sigType: 'bts',
      mobile: '+61 111 222 333',
      phone: '+61 123 456 789',
      name: 'your name',
      title: 'Job Title',
      twitter: '@myTwitter'
    };

    const tree = shallow(<SignatureContainer {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('containerChooser', () => {
  it('chooses the right container', () => {
    expect(containerChooser({ sigType: 'readify' }).Container.name).toEqual(
      'ReadifySignatureContainer'
    );
    expect(
      containerChooser({ sigType: 'BtsSignatureContainer' }).Container.name
    ).toEqual('ReadifySignatureContainer');
  });
});

describe('createContainer', () => {
  it('returns the right props', () => {
    const props = {
      email: 'your.name@readify.net',
      sigType: 'bts',
      mobile: '+61 111 222 333',
      phone: '+61 123 456 789',
      name: 'your name',
      title: 'Job Title',
      twitter: '@myTwitter'
    };

    expect(createContainer(props)).toMatchSnapshot();
    expect(createContainer({ ...props, sigType: 'readify' })).toMatchSnapshot();
  });
});
