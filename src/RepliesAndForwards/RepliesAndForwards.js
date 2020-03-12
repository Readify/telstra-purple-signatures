import React from 'react';

import { purple } from '../constants';
import { parseMobile, parseLandLine } from '../util';
const { brandInfo } = purple;

const RepliesAndForwards = props => {
  const {
    name,
    title,
    mobile,
    email,
    sigType,
    twitter,
    supportHotline,
    supportEmail,
    brandName,
    brandLink,
    brandLinkName
  } = props;
  const styleObj = {
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    fontSize: '9pt'
  };
  const titleOptional = title ? <>&nbsp;|&nbsp;{title}</> : null;
  return (
    <div>
      <p style={styleObj}>
        --
        <br />
        <b>
          {name}&nbsp;|&nbsp;{brandName}
          {titleOptional}
        </b>
        <br />
        <b>M</b>&nbsp;
        <a
          href={`tel:${parseMobile(mobile).replace(/\s/g, '')}`}
          dangerouslySetInnerHTML={{
            __html: parseMobile(mobile).replace(/\s/g, '&nbsp;')
          }}
          style={{ color: brandInfo.brandLinkColour }}
        />{' '}
        | <b>E</b>&nbsp;
        <a
          href={`mailto:${email}`}
          style={{ color: brandInfo.brandLinkColour }}
        >
          {email}
        </a>{' '}
        |{' '}
        {twitter ? (
          <span>
            <span>
              <b>T</b>&nbsp;
              <a
                href={`https://twitter.com/${twitter.replace('@', '')}`}
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: brandInfo.brandLinkColour }}
              >
                @{twitter.replace('@', '')}
              </a>
            </span>{' '}
            |{' '}
          </span>
        ) : null}
        <b>W</b>&nbsp;
        <a href={brandLink} style={{ color: brandInfo.brandLinkColour }}>
          {brandLinkName}
        </a>
        {sigType === 'support' ? (
          <span>
            <br />
            <b>Support&nbsp;Hotline</b>&nbsp;
            <a
              href={`tel:${parseLandLine(supportHotline).replace(
                /&nbsp;/g,
                ''
              )}`}
              dangerouslySetInnerHTML={{
                __html: parseLandLine(supportHotline)
              }}
              style={{ color: brandInfo.brandLinkColour }}
            />{' '}
            | <b>Support&nbsp;Email</b>&nbsp;
            <a
              href={`mailto:${supportEmail}`}
              style={{ color: brandInfo.brandLinkColour }}
            >
              {supportEmail}
            </a>
          </span>
        ) : null}
      </p>
      <div
        style={{
          color: '#4a4a4a',
          fontFamily: 'Arial, sans-serif',
          fontSize: '6.5pt',
          lineHeight: '1.5'
        }}
      >
        This email may contain confidential information.
        <br />
        If you are not the intended recipient, please delete it immediately.
      </div>
    </div>
  );
};

export default RepliesAndForwards;
