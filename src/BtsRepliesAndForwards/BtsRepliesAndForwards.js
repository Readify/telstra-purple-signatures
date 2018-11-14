import React from 'react';

import { btsDigital } from '../constants';
import { parseMobile } from '../util';

const { brandInfo } = btsDigital;

const BtsRepliesAndForwards = props => {
  const { name, title, mobile, phone, email } = props;
  const { brandName, brandLink, brandLinkName, brandSecondaryText } = brandInfo;

  const pStyle = {
    margin: '0',
    color: '#333333',
    lineHeight: '15px',
    fontSize: '12px'
  };

  const fontFamily = 'Ariel, sans-serif';

  const aStyle = {
    fontFamily,
    fontWeight: '200'
  };

  // Note: css classes do not work for email so you need to use inline styles!
  // Adding a tbody causes the email sig to break in certain clients :'(
  return (
    <div className="content">
      <table
        border="0"
        cellSpacing="0"
        cellPadding="0"
        width="100%"
        style={{
          color: '#3A576B',
          fontFamily,
          fontSize: '10.5px'
        }}
      >
        <tr>
          <td valign="top">
            <p style={pStyle}>
              <span style={{ color: '#3A576B', fontWeight: 'bold' }}>
                {name}
              </span>
              <br />
              <span style={{ color: '#3A576B' }}>{title}</span>
              <br />
              {brandName}
              &nbsp;|&nbsp;
              {brandSecondaryText}
            </p>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <span style={pStyle}>
              P&nbsp;&nbsp;
              <a
                style={aStyle}
                href={`tel:${parseMobile(phone).replace(/&nbsp;/g, '')}`}
                dangerouslySetInnerHTML={{ __html: parseMobile(phone) }}
              />
            </span>
            <span style={pStyle}>
              &nbsp;&nbsp;M&nbsp;&nbsp;
              <a
                style={aStyle}
                href={`tel:${parseMobile(mobile).replace(/&nbsp;/g, '')}`}
                dangerouslySetInnerHTML={{ __html: parseMobile(mobile) }}
              />
            </span>
            <span style={pStyle}>
              &nbsp;&nbsp;E&nbsp;&nbsp;
              <a style={aStyle} href={`mailto:${email}`}>
                {email}
              </a>
            </span>
            <span style={pStyle}>
              &nbsp;&nbsp;W&nbsp;&nbsp;
              <a style={aStyle} href={brandLink}>
                {brandLinkName}
              </a>
            </span>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <p style={{ ...pStyle, lineHeight: '11px', fontSize: '10px' }}>
              This email may contain confidential information.
              <br />
              If I've sent it to you by accident, please delete it immediately
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BtsRepliesAndForwards;
