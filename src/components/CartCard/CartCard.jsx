import React, { useState, useEffect } from 'react';
import getProducts from 'api/Product/getProducts';
import putCart from 'api/Cart/putCart';
import deleteCart from 'api/Cart/deleteCart';
import useCartStore from 'store/useCartStore';
import {
  CartCardCont,
  CheckBox,
  Img,
  ProductInfoCont,
  StoreName,
  ProductName,
  Price,
  DeliveryTxt,
  QtyCont,
  CounterCont,
  BtnLeft,
  InputNum,
  BtnRight,
  ConfirmBtn,
  OrderCont,
  OrderPrice,
  OrderBtn,
  DeleteBtn,
} from './CartCardStyle';

function CartCard({ item, checkedHandler, checked }) {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(item.quantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const cartItems = useCartStore((state) => state.cartItems);

  useEffect(() => {
    async function getProductId() {
      try {
        const res = await getProducts();
        const products = res.results;
        const matchedProduct = products.find(
          (product) => product.product_id === item.product_id
        );
        setProduct(matchedProduct);
      } catch (err) {
        console.error(err);
      }
    }
    getProductId();
  }, [item.product_id]);

  const qtyChangeHandler = (newQty) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.cart_item_id === item.cart_item_id) {
        return { ...cartItem, quantity: newQty };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  const counterHandler = (num) => {
    setQty((prev) => {
      const newQty = prev + num;
      return newQty;
    });
  };

  async function cartChangeHandler() {
    await putCart({ item, qty });
    qtyChangeHandler(qty);
  }

  async function cartDeleteHandler() {
    await deleteCart({ item });
    removeCartItem(item.cart_item_id);
  }

  return (
    <CartCardCont>
      <CheckBox
        type='checkbox'
        onChange={() => checkedHandler(item.cart_item_id)}
        checked={checked}
      />
      <ProductInfoCont>
        {product && (
          <>
            <Img src={product.image} />
            <div>
              <StoreName>{product.store_name}</StoreName>
              <ProductName>{product.product_name}</ProductName>
              <Price>{product && product.price.toLocaleString()}원</Price>
              <DeliveryTxt>택배 배송 / 무료 배송</DeliveryTxt>
            </div>
          </>
        )}
      </ProductInfoCont>
      <QtyCont>
        <CounterCont>
          <BtnLeft onClick={() => counterHandler(-1)} disabled={qty === 1}>
            -
          </BtnLeft>
          <InputNum type='number' value={qty} min={1} readOnly />
          <BtnRight onClick={() => counterHandler(+1)}>+</BtnRight>
        </CounterCont>
        <ConfirmBtn onClick={() => cartChangeHandler(item)}>수정</ConfirmBtn>
      </QtyCont>
      <OrderCont>
        <OrderPrice>
          {product ? (product.price * qty).toLocaleString() : ''}원
        </OrderPrice>
        <OrderBtn>주문하기</OrderBtn>
      </OrderCont>
      <DeleteBtn onClick={() => cartDeleteHandler()}>x</DeleteBtn>
    </CartCardCont>
  );
}

export default CartCard;
