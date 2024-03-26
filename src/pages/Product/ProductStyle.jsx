import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

export const H2IR = styled.h2`
  ${IR}
`;

export const ProductCont = styled.div`
  ${Cont}
  width: 1024px;
  margin: 150px auto 50px;
  display: flex;
  gap: 20px;
`;

export const ProductImg = styled.img`
  width: 500px;
  height: 500px;
`;

export const InfoCont = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StoreName = styled.p`
  font-size: 2rem;
  color: var(--main-grey);
  padding: 10px;
`;

export const ProductName = styled.p`
  font-size: 3rem;
  padding: 10px;
`;

export const Price = styled.p`
  font-size: 3rem;
  padding: 10px;
  font-weight: 500;
`;

export const InfoBottomCont = styled.div``;

export const DeliveryTxt = styled.p`
  font-size: 1.4rem;
  color: var(--main-grey);
  padding: 20px 0;
`;

export const TotalCont = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 20px 0;
  align-items: center;
`;

export const InfoTxt = styled.p`
  font-size: 1.4rem;
`;

export const QtyCont = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const QtyTxt = styled.p`
  color: var(--main);
  font-size: 1.4rem;
`;

export const PriceTxt = styled.p`
  color: var(--main);
  font-size: 3rem;
`;

export const BuyBtn = styled.button`
  width: 480px;
  width: 340px;
  padding: 19px;
  font-size: 1.4rem;
  border-radius: 5px;
  background-color: var(--main);
  color: white;
  margin-right: 10px;
`;

export const CartBtn = styled.button`
  width: 480px;
  width: 150px;
  padding: 19px;
  font-size: 1.4rem;
  border-radius: 5px;
  background-color: var(--main-grey);
  color: white;
`;
