import styled from 'styled-components';

export const ContCartCard = styled.div`
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

export const ContProduct = styled.div`
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

export const Delivery = styled.p`
  padding-top: 30px;
  color: var(--main-grey);
`;

export const ContQty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContCounter = styled.div`
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

export const BtnConfirm = styled.button`
  width: 100px;
  height: 30px;
  background-color: var(--point);
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
`;

export const InputNum = styled.input`
  width: 40px;
  height: 40px;
  border: 1px solid var(--sub-grey);
  font-size: 1.4rem;
  text-align: right;
`;

export const ContOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TxtTotalPrice = styled.p`
  color: var(--point);
  font-size: 1.2rem;
  font-weight: 500;
`;

export const BtnOrder = styled.button`
  width: 100px;
  height: 30px;
  background-color: var(--point);
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
`;

export const BtnDelete = styled.button`
  font-size: 2rem;
  color: var(--main-grey);
  align-self: flex-start;
`;
