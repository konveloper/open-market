import React from 'react';
import { useLocation } from 'react-router-dom';
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
  QtyTxt,
  PriceTxt,
  QtyCont,
  BuyBtn,
  CartBtn,
} from './ProductStyle';

function Product() {
  const location = useLocation();
  const info = location.state;
  console.log(info);

  return (
    <>
      <NavBar />
      <ProductCont>
        <H2IR>제품 상세 페이지</H2IR>
        <div>
          <ProductImg src={info.image} alt='제품 이미지' />
        </div>
        <InfoCont>
          <div>
            <StoreName>{info.storeName}</StoreName>
            <ProductName>{info.productName}</ProductName>
            <Price>{info.price}원</Price>
          </div>
          <InfoBottomCont>
            <DeliveryTxt>택배 배송 / 무료 배송</DeliveryTxt>
            <Counter products={info} />
            <TotalCont>
              <InfoTxt>총 상품 금액</InfoTxt>
              <QtyCont>
                <QtyTxt>총 수량 1개</QtyTxt>
                <PriceTxt>{info.price}원</PriceTxt>
              </QtyCont>
            </TotalCont>
            <div>
              <BuyBtn>바로 구매</BuyBtn>
              <CartBtn>장바구니</CartBtn>
            </div>
          </InfoBottomCont>
        </InfoCont>
      </ProductCont>
      <Footer />
    </>
  );
}

export default Product;
