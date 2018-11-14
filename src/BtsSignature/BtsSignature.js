import React from 'react';

import { btsDigital } from '../constants';
import { parseMobile } from '../util';

const { brandInfo } = btsDigital;

const BtsSignature = props => {
  const { name, title, qualifications, mobile, phone, email } = props;
  const {
    brandName,
    brandLink,
    brandLinkName,
    brandSecondaryText,
    brandImages
  } = brandInfo;

  const pStyle = {
    margin: '0',
    color: '#333333',
    lineHeight: '15px',
    fontSize: '12px'
  };
  const boldTdStyle = {
    width: '16px',
    fontWeight: 'bold',
    padding: '0 8px 0 0'
  };

  const tdStyle = {
    fontWeight: 'bold',
    padding: '0'
  };

  const fontFamily = 'Ariel, sans-serif';

  const aStyle = {
    fontFamily,
    fontWeight: '200'
  };

  const tableProps = {
    border: '0',
    cellSpacing: '0',
    cellPadding: '0',
    style: {
      margin: '0',
      width: 'initial',
      color: '#333333',
      fontFamily,
      fontSize: '12px',
      fontWeight: '200',
      borderSpacing: '0',
      borderCollapse: 'collapse'
    }
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
              <br />
              {brandSecondaryText}
              {qualifications ? (
                <span>
                  <br />
                  {qualifications}
                </span>
              ) : null}
            </p>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table {...tableProps}>
              <td style={boldTdStyle}>
                <p style={pStyle}>P</p>
                <p style={pStyle}>M</p>
                <p style={pStyle}>E</p>
                <p style={pStyle}>W</p>
              </td>
              <td style={tdStyle}>
                <p style={pStyle}>
                  <a
                    style={aStyle}
                    href={`tel:${parseMobile(phone).replace(/&nbsp;/g, '')}`}
                    dangerouslySetInnerHTML={{ __html: parseMobile(phone) }}
                  />
                </p>
                <p style={pStyle}>
                  <a
                    style={aStyle}
                    href={`tel:${parseMobile(mobile).replace(/&nbsp;/g, '')}`}
                    dangerouslySetInnerHTML={{ __html: parseMobile(mobile) }}
                  />
                </p>
                <p style={pStyle}>
                  <a style={aStyle} href={`mailto:${email}`}>
                    {email}
                  </a>
                </p>
                <p style={pStyle}>
                  <a style={aStyle} href={brandLink}>
                    {brandLinkName}
                  </a>
                </p>
              </td>
            </table>
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
        <br />
        <tr>
          <td style={{ padding: '0' }}>
            <table {...tableProps}>
              {Object.values(brandImages).map((image, index, arr) => (
                <td
                  style={{
                    padding: `0 ${
                      image === arr.slice(-1).pop() ? 18 : 12
                    }px 0 0`
                  }}
                  key={image.alt}
                >
                  <a
                    style={{
                      display: 'inline-block',
                      width: image.width
                    }}
                    href={image.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      width={`${image.width}px`}
                      src={image.img}
                      alt={image.alt}
                    />
                  </a>
                </td>
              ))}
              <td
                style={{
                  borderLeft: '1px solid #3D5567',
                  padding: '0 0 0 12px'
                }}
              >
                <p
                  style={{
                    ...pStyle,
                    color: '#3A576B',
                    fontFamily,
                    fontWeight: 'bold',
                    fontSize: '11px',
                    lineHeight: '14px'
                  }}
                >
                  Business Technology Services (Digital)
                  <br />
                  Telstra Enterprise
                </p>
              </td>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BtsSignature;
