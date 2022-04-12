import React from 'react';

const Button = (props) => {

  let {
    textBefore,
    textAfter,
    textState,
    classBefore,
    classAfter,
    classState,
    onClickHandler
  } = props;

  textState = textBefore;
  classState = classBefore;

  const onClick = () => {
    onClickHandler();
    
    textState = textAfter;
    classState = classAfter;

    setTimeout(() => {
      textState = textBefore;
      classState = classBefore;
    }, 1000)
  }
  
  return (
    <button type="button" className={classState} onClick={onClick}>
      {textState}
    </button>
  );
}

export default Button;