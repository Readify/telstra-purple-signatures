import React from 'react';
import { entries } from 'lodash/object';

import constants from '../constants';
import './SignatureContainer.scss';
import { BrandSignatureContainer } from './presentational-components';
import { createButtons } from './createSignatureButtons';
import { stripObject } from '../util';

import { useSelector } from 'react-redux';

const assignPlaceholders = (props, placeholders) => {
  const isBlank = (a) => a === '' || a === null || a === undefined;
  return entries(props).reduce((result, item) => {
    const [key, value] = item;
    return Object.assign(result, {
      [key]: isBlank(value) ? placeholders[key] : value,
    });
  }, {});
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
    location,
    sigType,
    mobile,
    email,
    supportHotline,
    supportEmail,
    addGot5,
    useAnimatedLogo,
    brandLogo,
    brandName,
    brandLink,
    brandLinkName,
    brandAnimatedLogo,
  } = profile;

  const placeholders = constants.placeholders;
  const brandInfo = constants.brandInfo;
  const got5Logo = constants.got5Logo;

  const signatureProps = stripObject({
    title,
    qualifications,
    pronoun,
    twitter,
    location,
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
    addGot5,
    got5Logo,
    useAnimatedLogo,
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
