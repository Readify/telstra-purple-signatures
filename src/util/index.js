import React from 'react';
import { btsDigital, readify } from '../constants';
import ReactDOMServer from 'react-dom/server';
import { entries } from 'lodash/object';

const { brandInfo } = readify;

const multiSplice = (toAddIndexes, val, array) =>
  toAddIndexes.forEach(index => array.splice(index, 0, val));

export const parseMobile = mobileNum => {
  if (mobileNum === undefined) return null;

  const mobileFormatted = mobileNum.replace(/[\s|+]/g, '');
  const numberArr = mobileFormatted.split('');

  // 0411 111 111 number
  if (mobileFormatted.length === 10) {
    multiSplice([4, 8], '&nbsp;', numberArr);
    // +61 411 111 111 number
  } else if (mobileFormatted.length === 11) {
    numberArr.splice(0, 0, '+');
    multiSplice([3, 7, 11], '&nbsp;', numberArr);
    // some random number, trust the user
  } else {
    return mobileNum;
  }
  return numberArr.join('');
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

export const copyBtsSignatureText = props => {
  const { brandInfo } = btsDigital;
  const { email, mobile, phone, name, qualifications, title, twitter } = props;
  const mobileText = parseMobile(mobile).replace(/&nbsp;/g, ' ');
  const phoneText = parseMobile(phone).replace(/&nbsp;/g, ' ');

  const textArr = [
    '--',
    '',
    name ? name : null,
    title ? title : null,
    brandInfo.brandName,
    brandInfo.brandSecondaryText,
    qualifications ? `${qualifications}` : null,
    '',
    mobileText ? `M ${mobileText}` : null,
    phoneText ? `P ${phoneText}` : null,
    email ? `E ${email}` : null,
    twitter ? `T ${twitter}` : null,
    `W ${brandInfo.brandLinkName}`,
    'This email may contain confidential information.',
    "If I've sent it to you by accident, please delete it immediately",
    ''
  ];

  copyText(textArr.filter(val => val !== null).join('\n'));
};

export const copySignatureText = props => {
  const {
    name,
    title,
    qualifications,
    mobile,
    email,
    twitter,
    isSupport
  } = props;
  const mobileText = parseMobile(mobile).replace(/&nbsp;/g, ' ');

  const textArr = [
    '--',
    '',
    name ? name : null,
    title ? `${brandInfo.brandName} | ${title}` : null,
    qualifications ? `${qualifications}` : null,
    '',
    mobileText
      ? `M ${mobileText}${
          isSupport
            ? ` | Support hotline${brandInfo.supportMobile.replace(
                /&nbsp;/g,
                ' '
              )}`
            : ''
        }`
      : null,
    email
      ? `E ${email}${
          isSupport ? ` | Support email ${brandInfo.supportEmail}` : ''
        }`
      : null,
    twitter ? `T ${twitter}` : null,
    `W ${brandInfo.brandLinkName}`,
    '',
    'Find us on: Twitter | LinkedIn | Facebook | Youtube'
  ];

  copyText(textArr.filter(val => val !== null).join('\n'));
};

export const copyBtsRepliesAndForwardsText = props => {
  const { brandInfo } = btsDigital;
  const { name, title, mobile, email, phone, twitter } = props;
  const mobileText = parseMobile(mobile).replace(/&nbsp;/g, ' ');
  const phoneText = parseMobile(phone).replace(/&nbsp;/g, ' ');

  const textArr = [
    '--',
    `${name} | ${title}`,
    `${brandInfo.brandName} | ${brandInfo.brandSecondaryText}`,
    `M ${mobileText} | E ${email}${phone ? ` | P ${phoneText}` : ''}${
      twitter ? ` | T ${twitter}` : ''
    } | W ${brandInfo.brandLinkName}`
  ];

  copyText(textArr.filter(val => val !== null).join('\n'));
};

export const copyRepliesAndForwardsText = props => {
  const { name, title, mobile, email, twitter, isSupport } = props;
  const mobileText = parseMobile(mobile).replace(/&nbsp;/g, ' ');

  const textArr = [
    '--',
    `${name}, ${brandInfo.brandName} | ${title}`,
    `M ${mobileText} | E ${email}${twitter ? ` | T ${twitter}` : ''} | W ${
      brandInfo.brandLinkName
    }`,
    isSupport
      ? `Support hotline${brandInfo.supportMobile.replace(
          /&nbsp;/g,
          ' '
        )} | Support email ${brandInfo.supportEmail}`
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
    .filter(keyVal => keyVal[1] !== null && keyVal[1] !== undefined)
    .reduce(
      (result, item) => Object.assign(result, { [item[0]]: item[1] }),
      {}
    );
