import React from 'react';
import logoImg from 'assets/img/logo.svg';
import iconCart from 'assets/img/icon-shopping-cart.svg';
import iconUser from 'assets/img/icon-user.svg';
import {
  NavCont,
  H2IR,
  DivLeft,
  LogoImg,
  ShearchInput,
  DivRight,
  BtnCart,
  BtnMyPage,
} from './NavBarStyle';

function NavBar() {
  return (
    <NavCont>
      <H2IR>네비게이션 바</H2IR>
      <DivLeft>
        <LogoImg src={logoImg} alt='로고' />
        <ShearchInput placeholder='상품을 검색해보세요!' />
      </DivLeft>
      <DivRight>
        <BtnCart>
          <img src={iconCart} alt='장바구니 이미지' />
          장바구니
        </BtnCart>
        <BtnMyPage>
          <img src={iconUser} alt='마이페이지 이미지' />내 정보
        </BtnMyPage>
      </DivRight>
    </NavCont>
  );
}

export default NavBar;
