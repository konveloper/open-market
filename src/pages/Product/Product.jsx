import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import postCart from 'api/Cart/postCart';
import NavBar from 'components/Common/NavBar/NavBar';
import Counter from 'components/Counter/Counter';
import Footer from 'components/Common/Footer/Footer';
import {
  H2IR,
  InfoCont,
  ProductCont,
  ProductImg,
  StoreName,
  ProductName,
  Price,
  InfoBottomCont,
  DeliveryTxt,
  InfoTxt,
  TotalCont,
  QtySpan,
  QtyTxt,
  PriceSpan,
  PriceTxt,
  QtyCont,
  BuyBtn,
  CartBtn,
} from './ProductStyle';

function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;
  const productId = product.productId;
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(product.price);

  console.log(product);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const counterHandler = (num) => {
    setQty((prev) => prev + num);
    setTotal((prev) => prev + product.price * num);
  };

  const addCartHandler = async () => {
    await postCart(productId, qty);
  };

  const orderHandler = () => {
    navigate('/order', { state: { type: 'product', product, quantity: qty } });
  };

  return (
    <>
      <NavBar />
      <ProductCont>
        <H2IR>제품 상세 페이지</H2IR>
        <div>
          <ProductImg src={product.image} alt='제품 이미지' />
        </div>
        <InfoCont>
          <div>
            <StoreName>{product.storeName}</StoreName>
            <ProductName>{product.productName}</ProductName>
            <Price>{product.price.toLocaleString()}원</Price>
          </div>
          <InfoBottomCont>
            <DeliveryTxt>택배 배송 / 무료 배송</DeliveryTxt>
            <Counter onClick={counterHandler} stock={product.stock} qty={qty} />
            <TotalCont>
              <InfoTxt>총 상품 금액</InfoTxt>
              <QtyCont>
                <QtySpan>
                  총 수량 <QtyTxt>{qty}</QtyTxt>개
                </QtySpan>
                <PriceSpan>
                  <PriceTxt>{total.toLocaleString()}</PriceTxt>원
                </PriceSpan>
              </QtyCont>
            </TotalCont>
            <div>
              <BuyBtn type='button' onClick={orderHandler}>
                바로 구매
              </BuyBtn>
              <CartBtn type='button' onClick={addCartHandler}>
                장바구니
              </CartBtn>
            </div>
          </InfoBottomCont>
        </InfoCont>
      </ProductCont>
      <Footer />
    </>
  );
}

export default Product;
