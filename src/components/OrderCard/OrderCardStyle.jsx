import styled from 'styled-components';

export const ContOrderCard = styled.div`
  width: 100%;
  height: 130px;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  margin: 10px 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 10px;
`;

export const ContProduct = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
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
`;

export const ProductName = styled.p`
  padding: 10px 0;
  font-size: 1.2rem;
`;

export const TxtQty = styled.p`
  color: var(--main-grey);
`;

export const TxtDiscount = styled.p`
  color: var(--main-grey);
`;

export const TxtDelivery = styled.p`
  color: var(--main-grey);
`;

export const ContPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TxtPrice = styled.p`
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
`;
