import React from 'react';
import NavBar from 'components/Common/NavBar/NavBar';
import CartCard from 'components/CartCard/CartCard';
import Footer from 'components/Common/Footer/Footer';
import { H2IR, Title, CartCont, ContentCont, TotalCheckBox } from './CartStyle';

function Cart() {
  return (
    <>
      <NavBar />
      <H2IR>장바구니 페이지</H2IR>
      <CartCont>
        <Title>장바구니</Title>
        <ContentCont>
          <TotalCheckBox type='checkbox' />
          <p>상품정보</p>
          <p>수량</p>
          <p>상품 금액</p>
        </ContentCont>
        <CartCard />
      </CartCont>
      <Footer />
    </>
  );
}

export default Cart;
