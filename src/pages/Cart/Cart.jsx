import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getCart from 'api/Cart/getCart';
import getProducts from 'api/Product/getProducts';
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
  BtnAllDelete,
  OrderCont,
  TxtCont,
  TitleTxt,
  PriceTxt,
  TotalPriceTxt,
  SymbolTxt,
  BtnOrder,
} from './CartStyle';

function Cart() {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const [products, setProducts] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    async function getCartItems() {
      try {
        const res = await getCart();
        setCartItems(res.results);
      } catch (err) {
        console.error(err);
      }
    }
    getCartItems();
  }, [setCartItems]);

  useEffect(() => {
    async function getProductId() {
      const res = await getProducts();
      const products = res.results;
      const details = [];
      cartItems.forEach((item) => {
        const matchedProduct = products.find(
          (product) => product.product_id === item.product_id
        );
        if (matchedProduct) {
          details.push(matchedProduct);
        }
      });
      setProducts(details);
    }
    if (cartItems.length > 0) {
      getProductId();
    }
  }, [cartItems]);

  useEffect(() => {
    const priceSum =
      cartItems.length > 0 && products.length > 0
        ? products.reduce((acc, product) => {
            const matchedCartItem = cartItems.find(
              (item) => item.product_id === product.product_id
            );
            if (matchedCartItem) {
              return acc + product.price * matchedCartItem.quantity;
            } else {
              return acc;
            }
          }, 0)
        : 0;
    setTotalPrice(priceSum);
  }, [products, cartItems]);

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
    if (allChecked) {
      await allDeleteCart();
      setCheckedItems([]);
      setCartItems([]);
    } else {
      alert('장바구니를 전체 선택해주세요.');
    }
  }

  const orderHandler = () => {
    navigate('/order', { state: { type: 'cart', items: checkedItems } });
  };

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
            key={item.cart_item_id}
            item={item}
            removeCartItem={removeCartItemHandler}
            checkedHandler={() => checkedHandler(item.cart_item_id)}
            checked={checkedItems.includes(item.cart_item_id)}
          />
        ))}
        <BtnAllDelete onClick={removeAllCartHandler}>전체 삭제</BtnAllDelete>
        <OrderCont>
          <TxtCont>
            <TitleTxt>총 상품 금액</TitleTxt>
            <PriceTxt>{totalPrice.toLocaleString()}원</PriceTxt>
          </TxtCont>
          <SymbolTxt>-</SymbolTxt>
          <TxtCont>
            <TitleTxt>상품 할인</TitleTxt>
            <PriceTxt>0원</PriceTxt>
          </TxtCont>
          <SymbolTxt>+</SymbolTxt>
          <TxtCont>
            <TitleTxt>배송비</TitleTxt>
            <PriceTxt>0원</PriceTxt>
          </TxtCont>
          <SymbolTxt>=</SymbolTxt>
          <TxtCont>
            <TitleTxt>결제 예정 금액</TitleTxt>
            <TotalPriceTxt>{totalPrice.toLocaleString()}원</TotalPriceTxt>
          </TxtCont>
        </OrderCont>
        <BtnOrder type='button' onClick={orderHandler}>
          주문하기
        </BtnOrder>
      </CartCont>
      <Footer />
    </>
  );
}

export default Cart;
