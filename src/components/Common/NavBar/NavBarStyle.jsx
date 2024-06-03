import styled from 'styled-components';
import { IR } from 'styles/GlobalStyles';

export const NavCont = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 1;
`;

export const H2IR = styled.h2`
  ${IR}
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  margin: 12px;
`;

export const ShearchInput = styled.input`
  width: 400px;
  height: 46px;
  padding: 13px 22px;
  margin: 20px 0 0 20px;
  outline: 2px solid var(--point);
  border: none;
  border-radius: 50px;
  font-size: 1.4rem;
  &::placeholder {
    color: var(--sub-grey);
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 100px;
`;

export const BtnCart = styled.button`
  width: 40px;
  height: 50px;
  margin: 10px;
`;

export const BtnMyPage = styled.button`
  width: 40px;
  height: 50px;
  margin: 20px;
`;
