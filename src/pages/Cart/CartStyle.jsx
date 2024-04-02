import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

export const H2IR = styled.h2`
  ${IR}
`;

export const Title = styled.p`
  font-size: 2rem;
  text-align: center;
`;

export const CartCont = styled.div`
  ${Cont}
  width: 1024px;
  margin: 150px auto 50px;
  display: flex;
  display: block;
  gap: 20px;
`;

export const ContentCont = styled.div`
  background-color: var(--light-grey);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: start;
  width: 100%;
  height: 40px;
  margin-top: 30px;
  border-radius: 10px;
  padding: 10px;
`;

export const TotalCheckInput = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid var(--point);
  border-radius: 50px;
  &:checked {
    width: 15px;
    height: 15px;
    background-color: var(--point);
    border-radius: 50px;
  }
`;
