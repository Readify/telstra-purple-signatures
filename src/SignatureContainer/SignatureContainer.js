import React, { Component } from 'react';

import { placeholders } from '../constants';
import Signature from '../Signature';
import RepliesAndForwards from '../RepliesAndForwards';
import {
  copySignatureText,
  copyRepliesAndForwardsText,
  copySignature
} from '../util';
import Button from '../Button';

import './SignatureContainer.scss';

class SignatureContainer extends Component {
  static defaultButtonText = {
    text: 'Copy text only',
    html: 'Copy signature'
  };

  static buttonClasses = {
    text: 'button',
    html: 'button is-primary'
  };

  buttonMaker = (clickHandler, isText) => {
    const isSuccessClass = 'button is-success';
    const copiedText = 'Copied!';
    const {
      text: classText,
      html: classHtml
    } = SignatureContainer.buttonClasses;
    const {
      text: textText,
      html: textHtml
    } = SignatureContainer.defaultButtonText;
    return (
      <Button
        onClickHandler={clickHandler}
        classBefore={isText ? classText : classHtml}
        classAfter={isSuccessClass}
        textBefore={isText ? textText : textHtml}
        textAfter={copiedText}
      />
    );
  };

  render() {
    const {
      name,
      title,
      qualifications,
      twitter,
      isSupport,
      mobile,
      email
    } = this.props;

    const twitterLink = (
      <a
        href={`https://twitter.com/${twitter.replace('@', '')}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {twitter}
      </a>
    );
    const twitterHtml = twitter ? (
      <span>
        <b>T</b>&nbsp;{twitterLink}&nbsp;&nbsp;&nbsp;
      </span>
    ) : null;

    const signatureProps = {
      name: name || placeholders.name,
      title: title || placeholders.title,
      qualifications,
      mobile: mobile || placeholders.mobile,
      email: email || placeholders.email,
      twitterHtml,
      isSupport
    };

    const CopySignatureText = this.buttonMaker(
      () =>
        copySignatureText({
          ...signatureProps,
          placeholders: placeholders
        }),
      true
    );
    const CopySignatureHtml = this.buttonMaker(
      () =>
        copySignature(
          {
            ...signatureProps,
            placeholders: placeholders
          },
          Signature
        ),
      false
    );
    const CopyRepliesAndForwardsText = this.buttonMaker(
      () =>
        copyRepliesAndForwardsText({
          ...signatureProps,
          placeholders: placeholders
        }),
      true
    );
    const CopyRepliesAndForwardsHtml = this.buttonMaker(
      () =>
        copySignature(
          {
            ...signatureProps,
            placeholders: placeholders
          },
          RepliesAndForwards
        ),
      false
    );
    return (
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
  }
}

export default SignatureContainer;
