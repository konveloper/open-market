import React from 'react';
import { CounterCont, BtnLeft, BtnRight, InputNum } from './CounterStyle';

function Counter({ qty, stock, onClick }) {
  return (
    <CounterCont>
      <BtnLeft onClick={() => onClick(-1)} disabled={qty === 1}>
        -
      </BtnLeft>
      <InputNum type='number' value={qty} min={1} max={stock} readOnly />
      <BtnRight
        onClick={() => onClick(+1)}
        disabled={stock < 1 || qty === stock}
      >
        +
      </BtnRight>
    </CounterCont>
  );
}

export default Counter;
