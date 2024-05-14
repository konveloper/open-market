import React, { useState, useEffect } from 'react';
import getCart from 'api/Cart/getCart';
import allDeleteCart from 'api/Cart/allDeleteCart';
import NavBar from 'components/Common/NavBar/NavBar';
import CartCard from 'components/CartCard/CartCard';
import Footer from 'components/Common/Footer/Footer';
import useCartStore from 'store/useCartStore';
import {
  H2IR,
  Title,
  CartCont,
  ContentCont,
  AllCheckBox,
  AllDeleteBtn,
} from './CartStyle';

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const [checkedItems, setCheckedItems] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

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

  const checkedHandler = (id) => {
    const isChecked = checkedItems.includes(id);
    if (isChecked) {
      setCheckedItems((prev) => prev.filter((el) => el !== id));
      setAllChecked(false);
    } else {
      setCheckedItems((prev) => [...prev, id]);
    }
  };

  const allCheckedHandler = () => {
    setAllChecked((prev) => !prev);
    if (!allChecked) {
      setCheckedItems(cartItems.map((item) => item.cart_item_id));
    } else {
      setCheckedItems([]);
    }
  };

  const removeCartItemHandler = (item) => {
    removeCartItem(item.cart_item_id);
  };

  async function removeAllCartHandler() {
    try {
      if (allChecked) {
        await allDeleteCart();
        setCartItems([]);
        setCheckedItems([]);
      } else {
        alert('장바구니를 전체 선택해주세요.');
      }
    } catch (err) {
      {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
  }

  return (
    <>
      <NavBar />
      <H2IR>장바구니 페이지</H2IR>
      <CartCont>
        <Title>장바구니</Title>
        <ContentCont>
          <AllCheckBox
            type='checkbox'
            onChange={allCheckedHandler}
            checked={allChecked}
          />
          <p>상품정보</p>
          <p>수량</p>
          <p>상품 금액</p>
        </ContentCont>
        {cartItems.map((item) => (
          <CartCard
            item={item}
            removeCartItem={removeCartItemHandler}
            checkedHandler={() => checkedHandler(item.cart_item_id)}
            checked={checkedItems.includes(item.cart_item_id)}
          />
        ))}
        <AllDeleteBtn onClick={removeAllCartHandler}>전체 삭제</AllDeleteBtn>
      </CartCont>
      <Footer />
    </>
  );
}

export default Cart;
