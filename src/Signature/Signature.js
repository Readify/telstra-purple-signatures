import React from 'react';
import { purple } from '../constants';
import { parseMobile, parseLandLine } from '../util';

const { brandInfo } = purple;

const Signature = props => {
  const {
    name,
    pronoun,
    title,
    qualifications,
    mobile,
    email,
    twitter,
    sigType,
    supportHotline,
    supportEmail,
    addGot5,
    got5Logo,
    useAnimatedLogo,
    brandLogo,
    brandName,
    brandLink,
    brandLinkName,
    brandAnimatedLogo
  } = props;

  const titleElement = title ? (
    <>
      <br />
      <span style={{ color: '#A5A5A5' }}>{title}</span>
    </>
  ) : null;

  const pronounOptional = pronoun ? ` (${pronoun})` : null;

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
              <b>
                {name}
                {pronounOptional}
              </b>
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
            {!useAnimatedLogo ? (
              <img
                width="83"
                height="83"
                style={{ width: '83px', height: '83px', maxWidth: 'none' }}
                src={brandLogo.link}
                alt={brandLogo.alt}
              />
            ) : null}
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
        {addGot5 ? (
          <tr>
            <td colSpan={2}>
              <table
                border="0"
                cellSpacing="0"
                cellPadding="0"
                style={{
                  color: '#0D76A6',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '8pt',
                  margin: 0,
                  padding: 0
                }}
              >
                <tr>
                  <td>
                    <img
                      width="45"
                      height="50"
                      style={{
                        width: '45px',
                        height: '50px',
                        maxWidth: 'none'
                      }}
                      src={got5Logo.link}
                      alt={got5Logo.alt}
                    />
                  </td>
                  <td>
                    I support #Got5!
                    <br />
                    Feel free to ask ‘you got 5’ instead of setting up a meeting
                    or sending me an email!
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        ) : null}
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
        {useAnimatedLogo ? (
          <tr>
            <td colSpan={2}>
              <img src={brandAnimatedLogo.link} alt={brandAnimatedLogo.alt} />
            </td>
          </tr>
        ) : null}
      </table>
    </div>
  );
};

export default Signature;
