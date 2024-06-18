import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

export const H2IR = styled.h2`
  ${IR}
`;

export const ContOrder = styled.div`
  ${Cont}
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.4rem;
  }
`;

export const TxtPageTitle = styled.p`
  font-size: 2rem !important;
  font-weight: 500;
  padding: 50px;
`;

export const ContInfoTitle = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-radius: 10px;
  padding: 10px;
  background-color: var(--light-grey);
`;

export const ContOrderCard = styled.div`
  width: 100%;
`;

export const ContTotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const TxtTotalPrice = styled.p`
  font-size: 2rem !important;
  color: var(--main);
`;

export const TxtOrderInfo = styled.p`
  font-size: 2rem !important;
  font-weight: 500;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--sub-grey);
`;

export const ContSellerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  div {
    display: grid;
    grid-template-columns: 1fr 10fr;
    align-items: center;
    padding: 10px 0;
    font-size: 1.4rem;
    border-bottom: 1px solid var(--sub-grey);
  }
  label {
    font-size: 1.4rem;
  }
  input {
    padding: 5px;
    border: 1px solid var(--sub-grey);
    width: 300px;
  }
`;

export const TxtTitle = styled.p`
  padding-bottom: 10px;
  border-bottom: 1px solid var(--sub-grey);
  font-weight: 500;
`;

export const ContPayment = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  label {
    font-size: 1.4rem;
    padding-right: 20px;
  }
`;

export const ContFinalInfo = styled.div`
  margin: 20px 0 0 20px;
  width: 50%;
  strong {
    font-size: 2rem;
  }
`;

export const ContFinalContent = styled.div`
  border: 2px solid var(--point);
  border-radius: 10px;
  margin-top: 20px;
`;

export const ContFinalPrice = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
  span {
    font-weight: 500;
    color: black;
  }
  p {
    color: var(--main-grey);
  }
`;

export const ContFinalCheck = styled.div`
  background-color: var(--light-grey);
  border-radius: 0 0 10px 10px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  label {
    font-size: 1.4rem;
  }
`;

export const BtnConfirm = styled.button`
  width: 220px;
  height: 68px;
  border-radius: 5px;
  font-size: 2.4rem;
  color: white;
  background-color: ${({ isChecked }) =>
    isChecked ? 'var(--main)' : 'var(--sub-grey)'};
  cursor: ${({ isChecked }) => (isChecked ? 'pointer' : 'not-allowed')};
`;
