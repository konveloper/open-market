import styled from 'styled-components';

export const CartCardCont = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const CheckBox = styled.input`
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

export const ProductInfoCont = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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

export const OrderBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: var(--point);
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
`;

export const DeleteBtn = styled.button`
  font-size: 2rem;
  color: var(--main-grey);
  align-self: flex-start;
`;
