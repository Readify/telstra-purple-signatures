import React from 'react';

import SocialMedia from '../SocialMedia';

const Signature = props => {
  const {
    brandLogo,
    name,
    placeholders,
    brandName,
    title,
    isSupport,
    qualifications,
    mobileHtml,
    supportMobile,
    emailHtml,
    supportEmail,
    twitterHtml,
    brandLink,
    brandLinkName,
  } = props;
  return <div>
    <table border="0" cellSpacing="0" cellPadding="0" width="100%"
           style={{
             color: '#3D5567',
             fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
             fontSize: '10.5pt'
           }}>
      <tr>
        <td valign="top" style={{ borderRight: '1px solid #3D5567', paddingRight: '20px', width: '76px' }}>
          <img
            width="73" height="53"
            src={brandLogo.link}
            alt={brandLogo.alt}/>
        </td>
        <td valign="top" style={{ paddingLeft: '20px' }}>
          <p style={{ marginBottom: '10px' }}>
            <b>{name || placeholders.name}</b>
            <br/>
            {brandName}&nbsp;|&nbsp;{title || placeholders.title}
          </p>
          {qualifications ? <p style={{ marginBottom: '10px' }}>{qualifications}</p> : null}
          <p style={{ marginBottom: '20px' }}>
                <span>
                  <b>M</b>
                  &nbsp;{mobileHtml}
                  &nbsp;{supportMobile}
                </span>
            {isSupport ? null : <span>&nbsp;&nbsp;</span>}
            <span>
                  <b>E</b>
              &nbsp;{emailHtml}
              &nbsp;{supportEmail}
                </span>
            {twitterHtml}
            <span>
                  <b>W</b>&nbsp;
              <a href={brandLink}>{brandLinkName}</a>
                </span>
          </p>
          <SocialMedia/>
        </td>
      </tr>
    </table>
  </div>;
};
export default Signature