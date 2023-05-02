import React from 'react';

import constants from '../constants';
import { parseMobile } from '../util';
const brandInfo = constants.brandInfo;

const RepliesAndForwards = (props) => {
  const {
    name,
    pronoun,
    title,
    mobile,
    email,
    twitter,
    brandName,
    brandLink,
    brandLinkName,
  } = props;
  const styleObj = {
    color: 'black',
    fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif',
    fontSize: '11pt',
  };
  const titleOptional = title ? <>&nbsp;|&nbsp;{title}</> : null;
  const pronounOptional = pronoun ? <>({pronoun})&nbsp;</> : null;
  return (
    <div className="content">
      <p style={styleObj}>
        <br />
        <br />
        <b>
          {name}&nbsp;{pronounOptional}|&nbsp;{brandName}
          {titleOptional}
        </b>
        <br />
        <b>M</b>&nbsp;
        <a
          href={`tel:${parseMobile(mobile).replace(/\s/g, '')}`}
          dangerouslySetInnerHTML={{
            __html: parseMobile(mobile).replace(/\s/g, '&nbsp;'),
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
      </p>
    </div>
  );
};

export default RepliesAndForwards;
