import React from 'react';

import { readify } from '../constants';
import { parseMobile } from '../util';
const { brandInfo } = readify;

const RepliesAndForwards = props => {
  const { name, title, mobile, email, isSupport, twitter } = props;
  const styleObj = {
    color: '#3D5567',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize: '10.5pt'
  };
  return (
    <div>
      <p style={styleObj}>
        --
        <br />
        <b>
          {name}&nbsp;|&nbsp;{brandInfo.brandName} {title}
        </b>
        <br />
        <b>M</b>&nbsp;&nbsp;
        <a
          href={`tel:${parseMobile(mobile).replace(/&nbsp;/g, '')}`}
          dangerouslySetInnerHTML={{ __html: parseMobile(mobile) }}
        />
        &nbsp;|&nbsp;
        <b>E</b>&nbsp;&nbsp;<a href={`mailto:${email}`}>{email}</a>&nbsp;|&nbsp;
        {twitter ? (
          <span>
            <span>
              <b>T</b>&nbsp;{' '}
              <a
                href={`https://twitter.com/${twitter.replace('@', '')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {twitter}
              </a>
              &nbsp;&nbsp;&nbsp;
            </span>
            |&nbsp;
          </span>
        ) : null}
        <b>W</b> <a href={brandInfo.brandLink}>{brandInfo.brandLinkName}</a>
        {isSupport ? (
          <span>
            <br />
            <b>Support&nbsp;Hotline</b>&nbsp;
            <span
              dangerouslySetInnerHTML={{ __html: brandInfo.supportMobile }}
            />
            &nbsp;|&nbsp;
            <b>Support&nbsp;Email</b>&nbsp;{brandInfo.supportEmail}
          </span>
        ) : null}
      </p>
    </div>
  );
};

export default RepliesAndForwards;
