import React from 'react';
import {
  ContOrderCard,
  ContProduct,
  Img,
  StoreName,
  ProductName,
  TxtQty,
  TxtDiscount,
  TxtDelivery,
  ContPrice,
  TxtPrice,
} from './OrderCardStyle';

function OrderCard({ product, quantity }) {
  return (
    <ContOrderCard>
      <ContProduct>
        {product && (
          <>
            <Img src={product.image} />
            <div>
              <StoreName>{product.store_name}</StoreName>
              <ProductName>{product.product_name}</ProductName>
              <TxtQty>수량: {quantity}개</TxtQty>
            </div>
          </>
        )}
      </ContProduct>
      <TxtDiscount>-</TxtDiscount>
      <TxtDelivery>무료배송</TxtDelivery>
      <ContPrice>
        <TxtPrice>
          {product && (product.price * quantity).toLocaleString()}원
        </TxtPrice>
      </ContPrice>
    </ContOrderCard>
  );
}

export default OrderCard;
