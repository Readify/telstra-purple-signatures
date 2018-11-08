import React from 'react';

import { brandInfo } from '../constants';

const RepliesAndForwards = props => {
  const {
    name,
    placeholders,
    brandName,
    title,
    isSupport,
    mobileHtml,
    emailHtml,
    twitterHtml,
    brandLink,
    brandLinkName,
  } = props;
  const styleObj = {
    color: '#3D5567',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize: '10.5pt'
  };
  return <div>
    <p style={styleObj}>
      --<br/>
      <b>{name || placeholders.name}&nbsp;|&nbsp;{brandName} {title || placeholders.title}</b><br/>
      <b>M</b>&nbsp;&nbsp;{mobileHtml}&nbsp;|&nbsp;
      <b>E</b>&nbsp;&nbsp;{emailHtml}&nbsp;|&nbsp;
      {twitterHtml ? <span>{twitterHtml}|&nbsp;</span> : null}
      <b>W</b> <a href={brandLink}>{brandLinkName}</a>
      {isSupport ? <span>
        <br/><b>Support&nbsp;Hotline</b>&nbsp;<span
        dangerouslySetInnerHTML={{ __html: brandInfo.supportMobile }}/>&nbsp;|&nbsp;
        <b>Support&nbsp;Email</b>&nbsp;{brandInfo.supportEmail}
      </span> : null}
    </p>
  </div>;
};

export default RepliesAndForwards;