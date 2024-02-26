import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

export const SignupSection = styled.section`
  ${Cont}
  text-align: center;
  color: var(--main-grey);
  margin-bottom: 100px;
`;

export const H2IR = styled.h2`
  ${IR}
`;

export const ImgLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px 0;
`;

export const TxtLogo = styled.p`
  margin-bottom: 30px;
  font-family: 'Gmarket Sans';
  font-size: 3rem;
  color: var(--main);
`;

export const ContInputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 650px;
  margin: 0 auto;
  text-align: left;
  background-color: #fff;
  box-shadow: -1px 0 20px -1px #f2f2f2, 1px 0 20px -1px #f2f2f2;
  border-radius: 10px;
  padding: 35px;
  div {
    margin-bottom: 10px;
  }
  button {
    color: #fff;
  }
  input {
    width: 480px;
    height: 40px;
    border: transparent;
    border-bottom: 1px solid var(--sub-grey);
    outline: none;
    span {
      display: block;
      margin-bottom: 50px;
    }
    &:focus {
      border-bottom: 2px solid var(--point);
    }
  }
`;

export const ContUsername = styled.div`
  display: flex;
  margin-bottom: 10px;
  input {
    width: 346px;
    margin-right: 12px;
  }
  button {
    width: 122px;
    height: 50px;
  }
`;
