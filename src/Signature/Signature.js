import React from 'react';

import SocialMedia from '../SocialMedia';
import { readify } from '../constants';
import { parseMobile } from '../util';
const { brandInfo } = readify;

const Signature = props => {
  const {
    name,
    title,
    qualifications,
    mobile,
    email,
    twitter,
    isSupport
  } = props;
  const { brandLogo, brandName, brandLink, brandLinkName } = brandInfo;

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
          color: '#3D5567',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          fontSize: '10.5pt'
        }}
      >
        <tr>
          <td
            valign="top"
            style={{
              borderRight: '1px solid #3D5567',
              paddingRight: '20px',
              width: '96px'
            }}
          >
            <img
              width="73"
              height="53"
              src={brandLogo.link}
              alt={brandLogo.alt}
            />
          </td>
          <td valign="top" style={{ paddingLeft: '20px' }}>
            <p style={{ marginBottom: '10px' }}>
              <b>{name}</b>
              <br />
              {brandName}&nbsp;|&nbsp;{title}
            </p>
            {qualifications ? (
              <p style={{ marginBottom: '10px' }}>{qualifications}</p>
            ) : null}
            <p style={{ marginBottom: '20px' }}>
              <span>
                <b>M</b>
                &nbsp;
                <a
                  href={`tel:${parseMobile(mobile).replace(/&nbsp;/g, '')}`}
                  dangerouslySetInnerHTML={{ __html: parseMobile(mobile) }}
                />
                &nbsp;
                {isSupport ? (
                  <span>
                    |&nbsp;<b>Support&nbsp;Hotline</b>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: brandInfo.supportMobile
                      }}
                    />
                    <br />
                  </span>
                ) : (
                  <span>&nbsp;&nbsp;</span>
                )}
              </span>
              <span>&nbsp;&nbsp;</span>
              <span>
                <b>E</b>
                &nbsp;
                <a href={`mailto:${email}`}>{email}</a>
                &nbsp;
                {isSupport ? (
                  <span>
                    |&nbsp;<b>Support&nbsp;Email</b>&nbsp;
                    <a href={`mailto:${brandInfo.supportEmail}`}>
                      {brandInfo.supportEmail}
                    </a>
                    <br />
                  </span>
                ) : (
                  <span>&nbsp;&nbsp;</span>
                )}
              </span>
              {twitter ? (
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
              ) : null}
              <span>
                <b>W</b>&nbsp;
                <a href={brandLink}>{brandLinkName}</a>
              </span>
            </p>
            <SocialMedia />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Signature;
