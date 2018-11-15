import React from 'react';

import {
  copyBtsRepliesAndForwardsText,
  copyBtsSignatureText,
  copyRepliesAndForwardsText,
  copySignature,
  copySignatureText
} from '../util';
import Signature from '../Signature';
import RepliesAndForwards from '../RepliesAndForwards';
import BtsSignature from '../BtsSignature';
import BtsRepliesAndForwards from '../BtsRepliesAndForwards';
import Button from '../Button';

const buttonMaker = (clickHandler, isText) => {
  const isSuccessClass = 'button is-success';
  const copiedText = 'Copied!';
  const classText = 'button';
  const classHtml = 'button is-primary';
  const textText = 'Copy text only';
  const textHtml = 'Copy signature';
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
export const createButtons = (signatureProps, placeholders, isBts) => {
  const clickHandlers = {
    CopySignatureText: () =>
      copySignatureText({
        ...signatureProps,
        placeholders: placeholders
      }),
    CopySignatureHtml: () =>
      copySignature(
        {
          ...signatureProps,
          placeholders: placeholders
        },
        Signature
      ),
    CopyRepliesAndForwardsText: () =>
      copyRepliesAndForwardsText({
        ...signatureProps,
        placeholders: placeholders
      }),
    CopyRepliesAndForwardsHtml: () =>
      copySignature(
        {
          ...signatureProps,
          placeholders: placeholders
        },
        RepliesAndForwards
      ),
    CopyBtsSigText: () =>
      copyBtsSignatureText({
        ...signatureProps,
        placeholders: placeholders
      }),
    CopyBtsHtml: () =>
      copySignature(
        {
          ...signatureProps,
          placeholders: placeholders
        },
        BtsSignature
      ),
    CopyBtsRepliesAndForwardsText: () =>
      copyBtsRepliesAndForwardsText({
        ...signatureProps,
        placeholders: placeholders
      }),
    CopyBtsRepliesAndForwardsHtml: () =>
      copySignature(
        {
          ...signatureProps,
          placeholders: placeholders
        },
        BtsRepliesAndForwards
      )
  };

  return [
    { name: 'CopySignatureText', isText: true, bts: false },
    { name: 'CopySignatureHtml', isText: false, bts: false },
    { name: 'CopyRepliesAndForwardsText', isText: true, bts: false },
    { name: 'CopyRepliesAndForwardsHtml', isText: false, bts: false },
    { name: 'CopyBtsSigText', isText: true, bts: true },
    { name: 'CopyBtsHtml', isText: false, bts: true },
    { name: 'CopyBtsRepliesAndForwardsText', isText: true, bts: true },
    { name: 'CopyBtsRepliesAndForwardsHtml', isText: false, bts: true }
  ]
    .filter(objBase => objBase.bts === isBts)
    .map(buttonArr => [
      buttonArr.name,
      buttonMaker(clickHandlers[buttonArr.name], buttonArr.isText)
    ])
    .reduce(
      (result, item) => Object.assign(result, { [item[0]]: item[1] }),
      {}
    );
};
