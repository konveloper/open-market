import React from 'react';
import imgItem from 'assets/img/img-item.jpg';
import Counter from 'components/Counter/Counter';
import {
  CartCardCont,
  CheckBox,
  Img,
  ProductInfoCont,
  StoreName,
  ProductName,
  Price,
  DeliveryTxt,
  OrderCont,
  OrderPrice,
  OrderBtn,
  DeleteBtn,
} from './CartCardStyle';

function CartCard() {
  return (
    <CartCardCont>
      <CheckBox type='checkbox' />
      <ProductInfoCont>
        <Img src={imgItem} />
        <div>
          <StoreName>셀러 네임</StoreName>
          <ProductName>프로덕트 네임</ProductName>
          <Price>가격</Price>
          <DeliveryTxt>택배 배송 / 무료 배송</DeliveryTxt>
        </div>
      </ProductInfoCont>
      <Counter />
      <OrderCont>
        <OrderPrice>가격</OrderPrice>
        <OrderBtn>주문하기</OrderBtn>
      </OrderCont>
      <DeleteBtn>x</DeleteBtn>
    </CartCardCont>
  );
}

export default CartCard;
