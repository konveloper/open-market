import React from 'react';
import {
  ProductLi,
  ProductImg,
  SellerName,
  ProductName,
  PriceTxt,
} from './ProductCardStyle';

function ProductCard({ product, getProductList }) {
  return (
    <ProductLi getProductList={getProductList}>
      <ProductImg src={product.image} alt='제품 이미지' />
      <SellerName>{product.seller_store}</SellerName>
      <ProductName>{product.product_name}</ProductName>
      <PriceTxt>{product.price}</PriceTxt>
    </ProductLi>
  );
}

export default ProductCard;
