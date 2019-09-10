import React from 'react';
import { purple } from '../constants';
import { parseMobile } from '../util';
const { brandInfo } = purple;

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
        width="500px"
        style={{
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          fontSize: '9pt'
        }}
      >
        <tr>
          <td valign="top">
            <p>
              <b>{name}</b>
              <br />
              {brandName}
              <br />
              <span style={{ color: '#A5A5A5' }}>{title}</span>
              <br />
              {qualifications ? (
                <span>
                  {qualifications}
                  <br />
                </span>
              ) : null}
            </p>
          </td>
          <td
            valign="top"
            style={{
              paddingRight: '20px',
              width: '96px'
            }}
          >
            <img
              width="35"
              height="52"
              src={brandLogo.link}
              alt={brandLogo.alt}
            />
          </td>
        </tr>
        <tr>
          <td>
            <b>M</b> &nbsp;&nbsp;&nbsp;
            <a
              href={`tel:${parseMobile(mobile).replace(/&nbsp;/g, '')}`}
              dangerouslySetInnerHTML={{ __html: parseMobile(mobile) }}
            />
            <br />
            <b>E</b>
            &nbsp; &nbsp; &nbsp;
            <a href={`mailto:${email}`}>{email}</a>
            <br />
            {twitter ? (
              <span>
                <b>T</b>
                &nbsp; &nbsp; &nbsp;
                <a
                  href={`https://twitter.com/${twitter.replace('@', '')}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @{twitter}
                </a>
                <br />
              </span>
            ) : null}
            <b>W</b>
            &thinsp; &thinsp; &thinsp;
            <a href={brandLink}>{brandLinkName}</a>
            <br />
            {isSupport ? (
              <span>
                <b>Support&nbsp;Hotline</b>&nbsp;&nbsp;
                <span
                  dangerouslySetInnerHTML={{
                    __html: brandInfo.supportMobile
                  }}
                />
                <br />
                <b>Support&nbsp;Email</b>
                &nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;&thinsp;
                <a href={`mailto:${brandInfo.supportEmail}`}>
                  {brandInfo.supportEmail}
                </a>
                <br />
              </span>
            ) : (
              ''
            )}
          </td>
        </tr>
        <tr>
          <td
            style={{
              color: 'black',
              fontFamily: 'Arial, sans-serif',
              fontSize: '6.5pt'
            }}
          >
            This email may contain confidential information.
            <br />
            If I've sent it to you by accident, please delete it immediately
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Signature;
