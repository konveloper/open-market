import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProductLi,
  ProductImgCont,
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
        productId: product.product_id,
        image: product.image,
        store_name: product.store_name,
        product_name: product.product_name,
        price: product.price,
        stock: product.stock,
      },
    });
  };

  return (
    <ProductLi getProductList={getProductList}>
      <ProductImgCont>
        <ProductImg
          src={product.image}
          alt='제품 이미지'
          onClick={() => productDetailHandler({ product })}
        />
      </ProductImgCont>
      <StoreName>{product.store_name}</StoreName>
      <ProductName>{product.product_name}</ProductName>
      <PriceTxt>{product.price.toLocaleString()}원</PriceTxt>
    </ProductLi>
  );
}

export default ProductCard;
