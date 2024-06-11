import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

export const H2IR = styled.h2`
  ${IR}
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

export const CartCont = styled.div`
  ${Cont}
  width: 1024px;
  margin: 150px auto 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const AllCheckBox = styled.input`
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

export const BtnAllDelete = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  align-self: flex-end;
`;

export const OrderCont = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--light-grey);
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const TxtCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleTxt = styled.p`
  font-size: 1.2rem;
  padding-bottom: 10px;
`;

export const PriceTxt = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const TotalPriceTxt = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--main);
`;

export const SymbolTxt = styled.p`
  font-size: 1.8rem;
  background-color: white;
  padding: 8px 10px;
  border-radius: 50%;
  color: var(--sub-grey);
`;

export const BtnOrder = styled.button`
  width: 220px;
  height: 68px;
  margin-top: 30px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: white;
  background-color: var(--main);
`;
