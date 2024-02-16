import React from 'react';
import ImgItem from 'assets/img/img-item.jpg';
import {
  ProductLi,
  ProductImg,
  SellerName,
  ProductName,
  PriceTxt,
} from './ProductCardStyle';

function ProductCard() {
  return (
    <ProductLi>
      <ProductImg src={ImgItem} alt='제품 이미지' />
      <SellerName>풍년 마켓</SellerName>
      <ProductName>싱싱한 야채</ProductName>
      <PriceTxt>10000원</PriceTxt>
    </ProductLi>
  );
}

export default ProductCard;
