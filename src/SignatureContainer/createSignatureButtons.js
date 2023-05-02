import React from 'react';

import {
  copyRepliesAndForwardsText,
  copySignature,
  copySignatureText,
} from '../util';
import Signature from '../Signature';
import RepliesAndForwards from '../RepliesAndForwards';
import Button from '../Button';

const buttonMaker = (clickHandler, isText) => {
  const isSuccessClass = 'button is-success';
  const copiedText = 'Copied!';
  const classText = 'button';
  const classHtml = 'button is-link';
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
export const createButtons = (signatureProps, placeholders) => {
  const clickHandlers = {
    CopySignatureText: () =>
      copySignatureText({
        ...signatureProps,
        placeholders: placeholders,
      }),
    CopySignatureHtml: () =>
      copySignature(
        {
          ...signatureProps,
          placeholders: placeholders,
        },
        Signature
      ),
    CopyRepliesAndForwardsText: () =>
      copyRepliesAndForwardsText({
        ...signatureProps,
        placeholders: placeholders,
      }),
    CopyRepliesAndForwardsHtml: () =>
      copySignature(
        {
          ...signatureProps,
          placeholders: placeholders,
        },
        RepliesAndForwards
      ),
  };

  return [
    { name: 'CopySignatureText', isText: true },
    { name: 'CopySignatureHtml', isText: false },
    { name: 'CopyRepliesAndForwardsText', isText: true },
    { name: 'CopyRepliesAndForwardsHtml', isText: false },
  ]
    .map((buttonArr) => [
      buttonArr.name,
      buttonMaker(clickHandlers[buttonArr.name], buttonArr.isText),
    ])
    .reduce(
      (result, item) => Object.assign(result, { [item[0]]: item[1] }),
      {}
    );
};
