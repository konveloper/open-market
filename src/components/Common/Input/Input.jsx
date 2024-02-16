import React from 'react';
import { InputCont, InputStyle, MessageSpan } from './InputStyle';

function Input({
  label,
  type,
  placeholder,
  onChange,
  message,
  min,
  max,
  onBlur,
  name,
  getValue,
  onKeyUp,
}) {
  const ChangeHandler = (e) => {
    onChange(e);
  };
  return (
    <InputCont>
      <label htmlFor={type}>{label}</label>
      <InputStyle
        name={name}
        type={type || 'text'}
        id={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={ChangeHandler}
        onKeyUp={onKeyUp}
        minLength={min}
        maxLength={max}
        value={getValue}
      />
      <MessageSpan>{message}</MessageSpan>
    </InputCont>
  );
}

export default Input;
