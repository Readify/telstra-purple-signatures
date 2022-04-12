import React from 'react';
import constants from '../constants';
import ReactDOMServer from 'react-dom/server';
import { entries } from 'lodash/object';
import {
  formatPhoneNumberIntl,
  isValidPhoneNumber
} from 'react-phone-number-input';

const brandInfo = constants.brandInfo;

const multiSplice = (toAddIndexes, val, array) =>
  toAddIndexes.forEach(index => array.splice(index, 0, val));

export const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

export const parseMobile = mobileNum => {
  if (mobileNum === undefined) return null;

  // some random number, trust the user
  if (
    !isValidPhoneNumber(mobileNum) &&
    !isValidPhoneNumber(constants.default.countryCode + mobileNum)
  )
    return mobileNum;
  // default to preset country code when the international prefix '+' is absence
  if (mobileNum.search(/\+/) < 0) {
    mobileNum = constants.default.countryCode + mobileNum;
  }

  return formatPhoneNumberIntl(mobileNum);
};

export const parseLandLine = mobileNum => {
  if (mobileNum === undefined) return null;

  const mobileFormatted = mobileNum.replace(/[\s|+]/g, '');
  const numberArr = mobileFormatted.split('');
  if (mobileFormatted.length === 8) {
    numberArr.splice(4, 0, '&nbsp;');
  } else if (mobileFormatted.length === 11) {
    multiSplice([2, 4, 9], '&nbsp;', numberArr);
    numberArr.splice(0, 0, '+');
  } else {
    return mobileNum;
  }
  return numberArr.join('');
};

const copyText = text => {
  const container = document.createElement('textarea');
  container.value = text;
  document.body.appendChild(container);
  container.select();
  document.execCommand('copy');
  document.body.removeChild(container);
};

export const copySignatureText = props => {
  const {
    name,
    pronoun,
    title,
    qualifications,
    mobile,
    email,
    twitter,
    isSupport,
    supportHotline,
    supportEmail
  } = props;
  const pronounOptional = pronoun ? ` (${pronoun})` : '';
  const mobileText = parseMobile(mobile).replace(/&nbsp;/g, ' ');

  const textArr = [
    '--',
    '',
    `${name ? name : null}${pronounOptional}`,
    brandInfo.brandName,
    title,
    qualifications ? `${qualifications}` : null,
    '',
    mobileText
      ? `M ${mobileText}${
          isSupport ? ` | Support hotline ${supportHotline}` : ''
        }`
      : null,
    email
      ? `E ${email}${isSupport ? ` | Support email ${supportEmail}` : ''}`
      : null,
    twitter ? `T ${twitter}` : null,
    `W ${brandInfo.brandLinkName}`,
    '',
    'This email may contain confidential information.',
    "If I've sent it to you by accident, please delete it immediately."
  ];

  copyText(textArr.filter(val => val !== null).join('\n'));
};

export const copyRepliesAndForwardsText = props => {
  const {
    name,
    pronoun,
    title,
    mobile,
    email,
    twitter,
    isSupport,
    supportHotline,
    supportEmail
  } = props;
  const mobileText = parseMobile(mobile).replace(/&nbsp;/g, ' ');

  const titleOptional = title ? ` | ${title}` : '';
  const pronounOptional = pronoun ? ` (${pronoun})` : '';
  const textArr = [
    '--',
    `${name}${pronounOptional} | ${brandInfo.brandName}${titleOptional}`,
    `M ${mobileText} | E ${email}${twitter ? ` | T ${twitter}` : ''} | W ${
      brandInfo.brandLinkName
    }`,
    isSupport
      ? `Support hotline ${supportHotline} | Support email ${supportEmail}`
      : null
  ];

  copyText(textArr.filter(val => val !== null).join('\n'));
};

export const copySignature = (props, SignatureComponent) => {
  // You need to copy the signature as richtext html if you want it to paste nicely into outlook
  // credit: https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html
  const html = ReactDOMServer.renderToStaticMarkup(
    <SignatureComponent {...props} />
  );

  const container = document.createElement('div');
  container.innerHTML = html;

  container.style.position = 'fixed';
  container.style.pointerEvents = 'none';
  container.style.opacity = '0';

  document.body.appendChild(container);

  window.getSelection().removeAllRanges();

  const range = document.createRange();
  range.selectNode(container);
  window.getSelection().addRange(range);

  document.execCommand('copy');

  document.body.removeChild(container);
};

export const stripObject = obj =>
  entries(obj)
    .filter(([key, val]) => val !== null && val !== undefined)
    .reduce((result, [key, val]) => Object.assign(result, { [key]: val }), {});
