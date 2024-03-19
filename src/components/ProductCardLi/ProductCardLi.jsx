import React from 'react';
import ProductCard from 'components/ProductCard/ProductCard';
import { ProductCardUl } from './ProductCardLiStyle';

export default function ProductCardLi({ productList, getProductList }) {
  return (
    <ProductCardUl>
      {productList.length > 0 ? (
        productList.map((product) => (
          <ProductCard product={product} getProductList={getProductList} />
        ))
      ) : (
        <h1>등록된 상품이 없습니다.</h1>
      )}
    </ProductCardUl>
  );
}
