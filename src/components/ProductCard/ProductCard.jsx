import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProductLi,
  ProductImg,
  StoreName,
  ProductName,
  PriceTxt,
} from './ProductCardStyle';

function ProductCard({ product, getProductList }) {
  const navigate = useNavigate();

  const productDetailHandler = ({ product }) => {
    navigate(`/products/${product.product_id}`, {
      state: {
        image: product.image,
        storeName: product.store_name,
        productName: product.product_name,
        price: product.price,
        stock: product.stock,
      },
    });
  };

  return (
    <ProductLi getProductList={getProductList}>
      <ProductImg
        src={product.image}
        alt='제품 이미지'
        onClick={() => productDetailHandler({ product })}
      />
      <StoreName>{product.store_name}</StoreName>
      <ProductName>{product.product_name}</ProductName>
      <PriceTxt>{product.price.toLocaleString()}원</PriceTxt>
    </ProductLi>
  );
}

export default ProductCard;
