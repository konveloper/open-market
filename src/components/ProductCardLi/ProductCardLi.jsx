import React from 'react';
import ProductCard from 'components/ProductCard/ProductCard';
import { ProductCardUl } from './ProductCardLiStyle';

export default function ProductCardLi() {
  return (
    <ProductCardUl>
      <ProductCard />
    </ProductCardUl>
  );
}
