import React from 'react';
import { entries } from 'lodash/object';
import { compose, mapProps, withProps } from 'recompose';

import constants from '../constants';
import './SignatureContainer.scss';
import { PurpleSignatureContainer } from './presentational-components';
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
  Container: PurpleSignatureContainer
});

export const createContainer = props => {
  const {
    name,
    pronoun,
    title,
    qualifications,
    twitter,
    sigType,
    mobile,
    email,
    supportHotline,
    supportEmail,
    Container,
    brandLogo,
    brandName,
    brandLink,
    brandLinkName
  } = props;

  const placeholders = constants.purple.placeholders;
  const brandInfo = constants.purple.brandInfo;

  const signatureProps = stripObject({
    title,
    qualifications,
    pronoun,
    twitter,
    phone: null,
    ...assignPlaceholders(
      stripObject({
        name,
        mobile,
        email,
        sigType,
        supportHotline,
        supportEmail
      }),
      placeholders
    ),
    ...assignPlaceholders(
      { brandLogo, brandName, brandLink, brandLinkName },
      brandInfo
    )
  });

  const buttons = createButtons(signatureProps, placeholders, false);

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
