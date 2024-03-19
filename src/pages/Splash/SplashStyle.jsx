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
  background: linear-gradient(
    334deg,
    rgb(141, 176, 250),
    rgb(200, 161, 255),
    rgb(255, 127, 172)
  );
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
  color: #fff;
`;
