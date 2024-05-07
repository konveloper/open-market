import React, { useState, useEffect } from 'react';
import getProducts from 'api/Product/getProducts';
import putCart from 'api/Cart/putCart';
import deleteCart from 'api/Cart/deleteCart';
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

function CartCard({ item }) {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(item.quantity);

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
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    getProductId();
  }, [item.product_id]);

  const counterHandler = (num) => {
    setQty((prev) => prev + num);
  };

  async function cartChangeHandler() {
    try {
      const res = await putCart({ item, qty });
      console.log(res);
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

  async function cartDeleteHandler() {
    try {
      const res = await deleteCart({ item });
      console.log(res);
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
    <CartCardCont>
      <CheckBox type='checkbox' />
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
