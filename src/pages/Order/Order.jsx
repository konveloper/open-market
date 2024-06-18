import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getProducts from 'api/Product/getProducts';
import useCartStore from 'store/useCartStore';
import NavBar from 'components/Common/NavBar/NavBar';
import OrderCard from 'components/OrderCard/OrderCard';
import Footer from 'components/Common/Footer/Footer';
import {
  ContOrder,
  H2IR,
  TxtPageTitle,
  ContInfoTitle,
  ContOrderCard,
  ContTotalPrice,
  TxtTotalPrice,
  TxtOrderInfo,
  ContSellerInfo,
  TxtTitle,
  ContPayment,
  ContFinalInfo,
  ContFinalContent,
  ContFinalPrice,
  ContFinalCheck,
  BtnConfirm,
} from './OrderStyle';

function Order() {
  const location = useLocation();
  const state = location.state;
  const [orderItems, setOrderItems] = useState([]);
  const cartItems = useCartStore((state) => state.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    async function fetchOrderItems() {
      if (state.type === 'product') {
        setOrderItems([{ product: state.product, quantity: state.quantity }]);
      } else if (state.type === 'cart') {
        const cartItemIds = state.items;
        const matchedCartItems = cartItemIds
          .map((cartItemId) =>
            cartItems.find((item) => item.cart_item_id === cartItemId)
          )
          .filter((item) => item !== undefined);

        if (matchedCartItems.length > 0) {
          try {
            const res = await getProducts();
            const allProducts = res.results;
            const matchedOrderItems = matchedCartItems.map(
              (matchedCartItem) => {
                const product = allProducts.find(
                  (product) => product.product_id === matchedCartItem.product_id
                );
                return { product, quantity: matchedCartItem.quantity };
              }
            );
            setOrderItems(matchedOrderItems);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
    fetchOrderItems();
  }, [cartItems, state]);

  useEffect(() => {
    const total = orderItems.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [orderItems]);

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
  };

  const orderHandler = (e) => {
    alert('주문이 완료되었습니다!');
  };

  return (
    <>
      <NavBar />
      <H2IR>주문 페이지</H2IR>
      <ContOrder>
        <TxtPageTitle>주문/결제하기</TxtPageTitle>
        <div style={{ width: '70%' }}>
          <ContInfoTitle>
            <p>상품정보</p>
            <p>할인</p>
            <p>배송비</p>
            <p>주문금액</p>
          </ContInfoTitle>
          <ContOrderCard>
            {orderItems.length > 0 ? (
              orderItems.map((orderItem, index) => (
                <OrderCard
                  key={index}
                  product={orderItem.product}
                  quantity={orderItem.quantity}
                />
              ))
            ) : (
              <p>상품 정보를 불러오는 중입니다...</p>
            )}
          </ContOrderCard>
          <ContTotalPrice>
            <p>총 주문 금액</p>
            <TxtTotalPrice>{totalPrice.toLocaleString()}원</TxtTotalPrice>
          </ContTotalPrice>
        </div>
        <div style={{ width: '70%', marginTop: '30px' }}>
          <TxtOrderInfo>배송 정보</TxtOrderInfo>
          <form>
            <ContSellerInfo>
              <TxtTitle>주문자 정보</TxtTitle>
              <div>
                <label htmlFor='name'>이름</label>
                <input type='text' name='name' />
              </div>
              <div>
                <label htmlFor='phoneNumber'>휴대폰</label>
                <input type='number' name='phoneNumber' />
              </div>
              <div>
                <label htmlFor='email'>이메일</label>
                <input type='email' name='email' />
              </div>
            </ContSellerInfo>
            <ContSellerInfo>
              <TxtTitle>배송지 정보</TxtTitle>
              <div>
                <label htmlFor='receiver'>수령인</label>
                <input type='text' label='수령인' name='receiver' />
              </div>
              <div>
                <label htmlFor='receiverPhoneNumber'>휴대폰</label>
                <input type='number' name='receiverPhoneNumber' />
              </div>
              <div>
                <label htmlFor='address'>배송 주소</label>
                <input type='text' name='address' />
              </div>
              <div>
                <label htmlFor='message'>배송 메세지</label>
                <input type='text' label='배송 메세지' name='message' />
              </div>
            </ContSellerInfo>
          </form>
          <div style={{ display: 'flex' }}>
            <ContPayment>
              <TxtTitle>결제 수단</TxtTitle>
              <div>
                <label>
                  <input type='radio' name='paymentMethod' value='card' />
                  신용/체크카드
                </label>
                <label>
                  <input
                    type='radio'
                    name='paymentMethod'
                    value='bankTransfer'
                  />
                  무통장 입금
                </label>
                <label>
                  <input type='radio' name='paymentMethod' value='mobile' />
                  휴대폰 결제
                </label>
                <label>
                  <input type='radio' name='paymentMethod' value='kakaoPay' />
                  카카오페이
                </label>
              </div>
            </ContPayment>
            <ContFinalInfo>
              <strong>최종 결제 정보</strong>
              <ContFinalContent>
                <ContFinalPrice>
                  <p>상품 금액</p>
                  <p>
                    <span>{totalPrice.toLocaleString()}</span>원
                  </p>
                  <p>할인 금액</p>
                  <p>
                    <span>0</span>원
                  </p>
                  <p>배송비</p>
                  <p>
                    <span>0</span>원
                  </p>
                  <p>결제 금액</p>
                  <p
                    style={{
                      fontSize: '1.8rem',
                      color: 'var(--main)',
                      fontWeight: '500',
                    }}
                  >
                    {totalPrice.toLocaleString()}원
                  </p>
                </ContFinalPrice>
                <ContFinalCheck>
                  <label>
                    <input type='checkbox' onChange={checkboxHandler} />
                    주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                  </label>
                  <BtnConfirm
                    isChecked={isChecked}
                    disabled={!isChecked}
                    onClick={orderHandler}
                  >
                    결제하기
                  </BtnConfirm>
                </ContFinalCheck>
              </ContFinalContent>
            </ContFinalInfo>
          </div>
        </div>
      </ContOrder>
      <Footer />
    </>
  );
}

export default Order;
