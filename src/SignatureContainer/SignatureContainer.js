import React from 'react';
import { entries } from 'lodash/object';
import { compose, mapProps, withProps } from 'recompose';

import constants from '../constants';
import './SignatureContainer.scss';
import {
  BtsSignatureContainer,
  ReadifySignatureContainer
} from './presentational-components';
import { createButtons } from './createSignatureButtons';
import { stripObject } from '../util';

const assignPlaceholders = (props, placeholders) => {
  const isBlank = a => a === '' || a === null || a === undefined;
  return entries(props).reduce((result, item) => {
    const [key, value] = item;
    return Object.assign(result, {
      [key]: isBlank(value) ? placeholders[key] : value
    });
  }, {});
};

export const containerChooser = props => ({
  Container:
    props.sigType === 'bts' ? BtsSignatureContainer : ReadifySignatureContainer
});

export const createContainer = props => {
  const {
    name,
    title,
    qualifications,
    twitter,
    sigType,
    mobile,
    email,
    phone,
    Container
  } = props;
  const isBTS = sigType === 'bts';

  const placeholders = constants[isBTS ? 'btsDigital' : 'readify'].placeholders;

  const signatureProps = stripObject({
    qualifications,
    twitter,
    phone: isBTS ? phone : null,
    ...assignPlaceholders(
      stripObject({
        name,
        title,
        mobile,
        email,
        isSupport: isBTS ? null : sigType === 'support'
      }),
      placeholders
    )
  });

  const buttons = createButtons(signatureProps, placeholders, isBTS);

  return {
    containerProps: {
      signatureProps,
      ...buttons
    },
    Container
  };
};

const SignatureContainer = ({ containerProps, Container }) => (
  <Container {...containerProps} />
);

export default compose(
  withProps(containerChooser),
  mapProps(createContainer)
)(SignatureContainer);
