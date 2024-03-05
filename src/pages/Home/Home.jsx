import React, { useState, useEffect } from 'react';
import getProducts from 'api/Product/getProducts';
import NavBar from 'components/Common/NavBar/NavBar';
import ProductCardLi from 'components/ProductCardLi/ProductCardLi';
import Footer from 'components/Common/Footer/Footer';
import { H2IR, ProductCont } from './HomeStyle';

function Home() {
  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    try {
      const res = await getProducts();
      const products = res.results;
      console.log(res.results);
      setProductList((prevProducts) => [...prevProducts, ...products]);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <NavBar />
      <ProductCont>
        <H2IR>전체 제품 페이지</H2IR>
        <ProductCardLi
          productList={productList}
          getProductList={getProductList}
        />
      </ProductCont>
      <Footer />
    </>
  );
}

export default Home;
