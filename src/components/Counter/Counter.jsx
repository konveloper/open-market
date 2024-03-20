import React, { useState, useEffect } from 'react';
import { CounterCont, BtnLeft, BtnRight, Num } from './CounterStyle';

function Counter({ products }) {
  console.log(products);
  const [count, setCount] = useState(0);

  const subtractHandler = () => {
    setCount(count - 1);
  };

  const addHandler = () => {
    setCount(count + 1);
  };

  return (
    <CounterCont>
      <BtnLeft onClick={subtractHandler}>-</BtnLeft>
      <Num>{count}</Num>
      <BtnRight onClick={addHandler}>+</BtnRight>
    </CounterCont>
  );
}

export default Counter;
