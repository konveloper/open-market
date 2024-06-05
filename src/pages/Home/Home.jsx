import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authStore from 'store/authStore';
import getProducts from 'api/Product/getProducts';
import NavBar from 'components/Common/NavBar/NavBar';
import ProductCardLi from 'components/ProductCardLi/ProductCardLi';
import Footer from 'components/Common/Footer/Footer';
import { H2IR, ProductCont } from './HomeStyle';

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = authStore();
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const getProductList = async () => {
    const res = await getProducts();
    const products = res.results;
    setProductList(products);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <NavBar
        productList={productList}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductCont>
        <H2IR>전체 제품 페이지</H2IR>
        <ProductCardLi
          productList={
            filteredProducts.length > 0 ? filteredProducts : productList
          }
          getProductList={getProductList}
        />
      </ProductCont>
      <Footer />
    </>
  );
}

export default Home;
