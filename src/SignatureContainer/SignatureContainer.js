import React from 'react';

import constants from '../constants';
import './SignatureContainer.scss';
import { BrandSignatureContainer } from './presentational-components';
import { createButtons } from './createSignatureButtons';
import { stripObject } from '../util';

import { useSelector } from 'react-redux';

const assignPlaceholders = (props, placeholders) => {
  const isBlank = (a) => a === '' || a === null || a === undefined;
  const result = {};
  for (const [key, value] of Object.entries(props)) {
    result[key] = isBlank(value) ? placeholders[key] : value;
  }
  return result;
};

export const createContainerProps = (props) => {};

const SignatureContainer = (props) => {
  var profile = useSelector((state) => state.signature.profile);

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
    brandLogo,
    brandName,
    brandLink,
    brandLinkName,
    brandAnimatedLogo,
  } = profile;

  const placeholders = constants.placeholders;
  const brandInfo = constants.brandInfo;

  const signatureProps = stripObject({
    title,
    qualifications,
    pronoun,
    twitter,
    phone: null,
    ...assignPlaceholders(
      {
        name,
        mobile,
        email,
        sigType,
        supportHotline,
        supportEmail,
      },
      placeholders
    ),
    ...assignPlaceholders(
      { brandLogo, brandName, brandLink, brandLinkName, brandAnimatedLogo },
      brandInfo
    ),
  });

  const buttons = createButtons(signatureProps, placeholders, false);

  var containerProps = {
    signatureProps,
    ...buttons,
  };

  return <BrandSignatureContainer {...containerProps} />;
};

export default SignatureContainer;
