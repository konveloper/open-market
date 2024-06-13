import styled from 'styled-components';

export const ContOrderCard = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ContProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 300px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const StoreName = styled.p`
  color: var(--main-grey);
  padding-bottom: 10px;
`;

export const ProductName = styled.p`
  padding-bottom: 10px;
  font-size: 1.2rem;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const DeliveryTxt = styled.p`
  padding-top: 30px;
  color: var(--main-grey);
`;

export const CounterCont = styled.div`
  display: flex;
`;

export const OrderCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const OrderPrice = styled.p`
  color: var(--point);
  font-size: 1.2rem;
  font-weight: 500;
`;
