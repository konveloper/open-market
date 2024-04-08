import styled from 'styled-components';

export const CounterCont = styled.div`
  display: flex;
`;

export const BtnLeft = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid var(--sub-grey);
  border-radius: 5px 0 0 5px;
  font-size: 3rem;
  color: var(--sub-grey);
`;

export const BtnRight = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid var(--sub-grey);
  border-radius: 0 5px 5px 0;
  font-size: 3rem;
  color: var(--sub-grey);
`;

export const InputNum = styled.input`
  width: 40px;
  height: 40px;
  border: 1px solid var(--sub-grey);
  font-size: 1.4rem;
  text-align: right;
`;
