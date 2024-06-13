import React from 'react';
import {
  ContOrderCard,
  ContProductInfo,
  Img,
  StoreName,
  ProductName,
  Price,
  DeliveryTxt,
  OrderCont,
  OrderPrice,
} from './OrderCardStyle';

function OrderCard({ product, quantity }) {
  return (
    <ContOrderCard>
      <ContProductInfo>
        {product && (
          <>
            <Img src={product.image} />
            <div>
              <StoreName>{product.store_name}</StoreName>
              <ProductName>{product.product_name}</ProductName>
              <Price>{product && product.price.toLocaleString()}원</Price>
              <DeliveryTxt>수량: {quantity}개</DeliveryTxt>
            </div>
          </>
        )}
      </ContProductInfo>
      <OrderCont>
        <OrderPrice>
          {product && (product.price * quantity).toLocaleString()}원
        </OrderPrice>
      </OrderCont>
    </ContOrderCard>
  );
}

export default OrderCard;
