import React, { useState, useEffect } from 'react';
import getCart from 'api/Cart/getCart';
import NavBar from 'components/Common/NavBar/NavBar';
import CartCard from 'components/CartCard/CartCard';
import Footer from 'components/Common/Footer/Footer';
import useCartStore from 'store/useCartStore';
import { H2IR, Title, CartCont, ContentCont, TotalCheckBox } from './CartStyle';

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  useEffect(() => {
    async function getCartItems() {
      try {
        const res = await getCart();
        setCartItems(res.results);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    getCartItems();
  }, [setCartItems]);

  const removeCartItemHandler = (item) => {
    removeCartItem(item.cart_item_id);
  };

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
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            item={item}
            removeCartItem={removeCartItemHandler}
          />
        ))}
      </CartCont>
      <Footer />
    </>
  );
}

export default Cart;
