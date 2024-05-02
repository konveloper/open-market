import React, { useState, useEffect } from 'react';
import getProducts from 'api/Product/getProducts';
import {
  CartCardCont,
  CheckBox,
  Img,
  ProductInfoCont,
  StoreName,
  ProductName,
  Price,
  DeliveryTxt,
  CounterCont,
  BtnLeft,
  InputNum,
  BtnRight,
  OrderCont,
  OrderPrice,
  OrderBtn,
  DeleteBtn,
} from './CartCardStyle';

function CartCard({ item }) {
  const [product, setProduct] = useState(null);

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
      <CounterCont>
        <BtnLeft>-</BtnLeft>
        <InputNum type='number' value={item.quantity} min={1} readOnly />
        <BtnRight>+</BtnRight>
      </CounterCont>
      <OrderCont>
        <OrderPrice>
          {product ? product.price.toLocaleString() : ''}원
        </OrderPrice>
        <OrderBtn>주문하기</OrderBtn>
      </OrderCont>
      <DeleteBtn>x</DeleteBtn>
    </CartCardCont>
  );
}

export default CartCard;
