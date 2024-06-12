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
  const [products, setProducts] = useState([]);
  const cartItemIds = location.state;
  const cartItems = useCartStore((state) => state.cartItems);

  console.log('cartItems:', cartItems);
  console.log('cartItemIds:', cartItemIds);

  useEffect(() => {
    if (cartItems.length > 0) {
      const matchedCartItems = cartItemIds
        .map((cartItemId) =>
          cartItems.find((item) => item.cart_item_id === cartItemId)
        )
        .filter((item) => item !== undefined);
      console.log('matchedCartItems:', matchedCartItems);
      if (matchedCartItems.length > 0) {
        async function fetchProducts() {
          try {
            const res = await getProducts();
            const allProducts = res.results;
            const matchedProducts = matchedCartItems.map((matchedCartItem) =>
              allProducts.find(
                (product) => product.product_id === matchedCartItem.product_id
              )
            );
            console.log(matchedProducts);
            setProducts(matchedProducts);
          } catch (err) {
            console.error(err);
          }
        }
        fetchProducts();
      }
    }
  }, [cartItems, cartItemIds]);

  return (
    <>
      <NavBar />
      <ContOrder>
        <H2IR>주문 페이지</H2IR>
        <ContOrderCard>
          {products.length > 0 ? (
            products.map((product, index) => (
              <OrderCard key={index} product={product} />
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
