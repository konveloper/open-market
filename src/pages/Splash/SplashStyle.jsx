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
  background: linear-gradient(334deg, #b2ebf2, #f0f4c3, #dcedc8);
  animation: 3s ${splashFade} ease-out;
`;

export const LogoImg = styled.img`
  width: 150px;
  height: 150px;
  margin: 200px 0 auto;
`;

export const LogoTxt = styled.p`
  margin-top: 50px;
  font-family: 'Gmarket Sans';
  font-size: 4rem;
  color: #9ccc65;
`;
