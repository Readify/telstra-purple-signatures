import React, { useState } from 'react';

const Button = (props) => {
  const { textBefore, textAfter, classBefore, classAfter, onClickHandler } =
    props;

  const [textState, setTextState] = useState(textBefore);
  const [classState, setClassState] = useState(classBefore);

  const onClick = () => {
    onClickHandler();

    setTextState(textAfter);
    setClassState(classAfter);

    setTimeout(() => {
      setTextState(textBefore);
      setClassState(classBefore);
    }, 1000);
  };

  return (
    <button type="button" className={classState} onClick={onClick}>
      {textState}
    </button>
  );
};

export default Button;
