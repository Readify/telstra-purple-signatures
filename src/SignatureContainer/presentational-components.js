import React from 'react';

import Signature from '../Signature';
import RepliesAndForwards from '../RepliesAndForwards';

export const BrandSignatureContainer = ({
  signatureProps,
  CopySignatureText,
  CopySignatureHtml,
  CopyRepliesAndForwardsText,
  CopyRepliesAndForwardsHtml,
}) => (
  <div className="content">
    <div className="level">
      <div className="level-left">
        <h3 className="level-item">Standard Signature</h3>
      </div>
      <div className="level-right">
        {CopySignatureText}
        {CopySignatureHtml}
      </div>
    </div>
    <Signature {...signatureProps} />
    <div className="level">
      <div className="level-left">
        <h3 className="level-item">Replies and Forwards Signature</h3>
      </div>
      <div className="level-right">
        {CopyRepliesAndForwardsText}
        {CopyRepliesAndForwardsHtml}
      </div>
    </div>
    <RepliesAndForwards {...signatureProps} />
  </div>
);
