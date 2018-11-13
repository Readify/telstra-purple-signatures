import React from 'react';
import { compose, withState, withHandlers, mapProps } from 'recompose';
import { pick } from 'lodash/object';

const Button = ({ classState, textState, onClick }) => (
  <button type="button" className={classState} onClick={onClick}>
    {textState}
  </button>
);

export default compose(
  withState('classState', 'setClass', ({ classBefore }) => classBefore),
  withState('textState', 'setText', ({ textBefore }) => textBefore),
  withHandlers({
    onClick: ({
      setClass,
      setText,
      onClickHandler,
      classAfter,
      textAfter,
      classBefore,
      textBefore
    }) => event => {
      onClickHandler(event);
      setClass(classAfter, () => setTimeout(() => setClass(classBefore), 1000));
      setText(textAfter, () => setTimeout(() => setText(textBefore), 1000));
    }
  }),
  mapProps(props => pick(props, ['classState', 'textState', 'onClick']))
)(Button);
