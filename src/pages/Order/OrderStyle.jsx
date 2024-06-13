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
`;

export const TxtPageTitle = styled.p`
  font-size: 2rem;
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
