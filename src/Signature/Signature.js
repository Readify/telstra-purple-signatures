import React from 'react';
import { purple } from '../constants';
import { parseMobile, parseLandLine } from '../util';
const { brandInfo } = purple;

const Signature = props => {
  const {
    name,
    title,
    qualifications,
    mobile,
    email,
    twitter,
    sigType,
    supportHotline,
    supportEmail,
    brandLogo,
    brandName,
    brandLink,
    brandLinkName
  } = props;

  const titleElement = title ? (
    <>
      <br />
      <span style={{ color: '#A5A5A5' }}>{title}</span>
    </>
  ) : null;

  const qualificationsElemenent = qualifications ? (
    <>
      <br />
      <span>
        {qualifications}
        <br />
      </span>
    </>
  ) : null;

  // Note: css classes do not work for email so you need to use inline styles!
  // Adding a tbody causes the email sig to break in certain clients :'(
  return (
    <div className="content">
      <table
        border="0"
        cellSpacing="0"
        cellPadding="0"
        style={{
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          fontSize: '9pt',
          width: '500px'
        }}
      >
        <tr>
          <td valign="top">
            {/*Offset text so it lines up with top of logo on light mode UIs and works in Outlook*/}
            <div style={{ height: '15px', lineHeight: '15px' }}>&nbsp;</div>
            <p>
              <b>{name}</b>
              <br />
              {brandName}
              {titleElement}
              {qualificationsElemenent}
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
              width="83"
              height="83"
              style={{ width: '83px', height: '83px', maxWidth: 'none' }}
              src={brandLogo.link}
              alt={brandLogo.alt}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <table
              border="0"
              cellSpacing="0"
              cellPadding="0"
              style={{
                color: 'black',
                fontFamily: 'Arial, sans-serif',
                fontSize: '9pt',
                margin: 0,
                padding: 0
              }}
            >
              <tr>
                <td style={{ padding: 0, width: '30px' }}>
                  <b>M</b>
                </td>
                <td style={{ padding: 0 }}>
                  <a
                    style={{ color: brandInfo.brandLinkColour }}
                    href={`tel:${parseMobile(mobile).replace(/\s/g, '')}`}
                    dangerouslySetInnerHTML={{
                      __html: parseMobile(mobile).replace(/\s/g, '&nbsp;')
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: 0 }}>
                  <b>E</b>
                </td>
                <td style={{ padding: 0 }}>
                  <a
                    href={`mailto:${email}`}
                    style={{ color: brandInfo.brandLinkColour }}
                  >
                    {email}
                  </a>
                </td>
              </tr>
              {twitter ? (
                <tr>
                  <td style={{ padding: 0 }}>
                    <b>T</b>
                  </td>
                  <td style={{ padding: 0 }}>
                    <a
                      href={`https://twitter.com/${twitter.replace('@', '')}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ color: brandInfo.brandLinkColour }}
                    >
                      @{twitter.replace('@', '')}
                    </a>
                  </td>
                </tr>
              ) : null}
              <tr>
                <td style={{ padding: 0 }}>
                  <b>W</b>
                </td>
                <td style={{ padding: 0 }}>
                  <a
                    href={brandLink}
                    style={{ color: brandInfo.brandLinkColour }}
                  >
                    {brandLinkName}
                  </a>
                </td>
              </tr>
            </table>

            {sigType === 'support' ? (
              <table
                border="0"
                cellSpacing="0"
                cellPadding="0"
                style={{
                  color: 'black',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '9pt',
                  margin: 0,
                  padding: 0
                }}
              >
                <tr>
                  <td style={{ padding: 0, width: '100px' }}>
                    <b>Support&nbsp;Hotline</b>
                  </td>
                  <td style={{ padding: 0 }}>
                    <a
                      href={`tel:${parseLandLine(supportHotline).replace(
                        /&nbsp;/g,
                        ''
                      )}`}
                      dangerouslySetInnerHTML={{
                        __html: parseLandLine(supportHotline)
                      }}
                      style={{ color: brandInfo.brandLinkColour }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>
                    <b>Support&nbsp;Email</b>
                  </td>
                  <td style={{ padding: 0 }}>
                    <a
                      href={`mailto:${supportEmail}`}
                      style={{ color: brandInfo.brandLinkColour }}
                    >
                      {supportEmail}
                    </a>
                  </td>
                </tr>
              </table>
            ) : null}
            {sigType === 'EMEA' ? (
              <table>
                <p style={{ fontSize: '8.5pt' }}>
                  <br />
                  Company85 is becoming{' '}
                  <a href={brandLink} style={{ textDecoration: 'underline' }}>
                    Telstra Purple
                  </a>
                  <br />
                  <b>Services Company of the Year.</b> UK IT Awards{' '}
                  <a
                    style={{ textDecoration: 'underline' }}
                    href="https://www.company85.com/news/company85-shortlisted-in-two-categories-at-bcs-uk-it-awards-2018/"
                  >
                    <span style={{ color: 'black' }}>
                      <b>finalist 2019</b>, 2018
                    </span>
                  </a>
                  , 2017; winner 2016, 2014.
                  <br /> <b>Security Team of the Year.</b> Security Excellence
                  Awards{' '}
                  <a
                    style={{ textDecoration: 'underline' }}
                    href="https://www.company85.com/news/company85-wins-security-team-of-the-year-for-the-third-year-in-a-row/"
                  >
                    <span style={{ color: 'black' }}>winner 2018</span>
                  </a>
                  , 2017, 2016. <br />
                  <b>IT Employer of the Year.</b> UK IT Awards{' '}
                  <a
                    style={{ textDecoration: 'underline' }}
                    href="https://www.company85.com/news/company85-shortlisted-in-two-categories-at-bcs-uk-it-awards-2018/"
                  >
                    <span style={{ color: 'black' }}>
                      <b>finalist 2019</b>, 2018
                    </span>
                  </a>
                  , 2017, 2016; winner 2014.
                  <br />
                  <br />
                  Telstra Purple, 2nd Floor, Blue Fin Building, 110 Southwark
                  St, London, SE1 0TA.
                  <br />
                  +44 (0)845 468 0085
                </p>
              </table>
            ) : null}
          </td>
        </tr>
        <tr>
          <td
            style={{
              color: '#4a4a4a',
              fontFamily: 'Arial, sans-serif',
              fontSize: '6.5pt',
              lineHeight: '1.5'
            }}
          >
            This email may contain confidential information.
            <br />
            If I've sent it to you by accident, please delete it immediately.
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Signature;
