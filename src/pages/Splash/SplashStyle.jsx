import styled, { keyframes } from 'styled-components';
import { Cont } from 'styles/GlobalStyles';

export const splashFade = keyframes`
  0% {
    opacity: 1;
    top:50%;
  }
  50%{
    opacity: 1;
    top:50%;
  }
  100% {
    opacity: 0;
    top:40%;
  }
`;

export const SplashCont = styled.div`
  ${Cont}
  text-align: center;
  color: var(--main-grey);
  background: linear-gradient(334deg, #f0f4c3, #80deea, #dcedc8);
  animation: 3s ${splashFade} ease-out;
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 200px 0 auto;
`;

export const LogoTxt = styled.p`
  margin-top: 20px;
  font-family: 'Gmarket Sans';
  font-size: 3rem;
  color: #fff;
`;

export const Txt = styled.p`
  margin-top: 20px;
  font-family: 'Gmarket Sans';
  font-size: 2rem;
  color: #fff;
`;
