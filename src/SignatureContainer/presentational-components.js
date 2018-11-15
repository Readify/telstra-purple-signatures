import React from 'react';

import Signature from '../Signature';
import RepliesAndForwards from '../RepliesAndForwards';
import BtsSignature from '../BtsSignature';
import BtsRepliesAndForwards from '../BtsRepliesAndForwards';

export const ReadifySignatureContainer = ({
  signatureProps,
  CopySignatureText,
  CopySignatureHtml,
  CopyRepliesAndForwardsText,
  CopyRepliesAndForwardsHtml
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
export const BtsSignatureContainer = ({
  signatureProps,
  CopyBtsSigText,
  CopyBtsHtml,
  CopyBtsRepliesAndForwardsText,
  CopyBtsRepliesAndForwardsHtml
}) => (
  <div className="content">
    <div className="level">
      <div className="level-left">
        <h3 className="level-item">Standard Signature</h3>
      </div>
      <div className="level-right">
        {CopyBtsSigText}
        {CopyBtsHtml}
      </div>
    </div>
    <BtsSignature {...signatureProps} />
    <div className="level">
      <div className="level-left">
        <h3 className="level-item">Replies and Forwards Signature</h3>
      </div>
      <div className="level-right">
        {CopyBtsRepliesAndForwardsText}
        {CopyBtsRepliesAndForwardsHtml}
      </div>
    </div>
    <BtsRepliesAndForwards {...signatureProps} />
  </div>
);
