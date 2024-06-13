import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getProducts from 'api/Product/getProducts';
import useCartStore from 'store/useCartStore';
import NavBar from 'components/Common/NavBar/NavBar';
import OrderCard from 'components/OrderCard/OrderCard';
import Footer from 'components/Common/Footer/Footer';
import { ContOrder, H2IR, ContOrderCard } from './OrderStyle';

function Order() {
  const location = useLocation();
  const state = location.state;
  const [orderItems, setOrderItems] = useState([]);
  const cartItems = useCartStore((state) => state.cartItems);

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

  return (
    <>
      <NavBar />
      <ContOrder>
        <H2IR>주문 페이지</H2IR>
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
      </ContOrder>
      <Footer />
    </>
  );
}

export default Order;
