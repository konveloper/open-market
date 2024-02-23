import React from 'react';
import NavBar from 'components/Common/NavBar/NavBar';
import ProductCardLi from 'components/ProductCardLi/ProductCardLi';
import Footer from 'components/Common/Footer/Footer';
import { H2IR, ProductCont } from './HomeStyle';

function Home() {
  return (
    <>
      <NavBar />
      <ProductCont>
        <H2IR>전체 제품 페이지</H2IR>
        <ProductCardLi />
      </ProductCont>
      <Footer />
    </>
  );
}

export default Home;
