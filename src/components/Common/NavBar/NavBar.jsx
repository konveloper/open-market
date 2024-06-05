import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalLogout from 'components/Modal/ModalLogout';
import logoImg from 'assets/img/logo.png';
import iconCart from 'assets/img/icon-shopping-cart.png';
import iconUser from 'assets/img/icon-user.png';
import {
  NavCont,
  H2IR,
  DivLeft,
  LogoImg,
  InputSearch,
  BtnSearch,
  DivRight,
  BtnCart,
  BtnMyPage,
} from './NavBarStyle';

function NavBar({ productList, setFilteredProducts }) {
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const homeHandler = () => {
    if (isFiltered) {
      setFilteredProducts(productList);
    }
    navigate(`/home`);
  };

  const cartHandler = () => {
    navigate(`/cart`);
  };

  const searchHandler = () => {
    const filteredProducts = productList.filter((product) =>
      product.product_name.toLowerCase().includes(keywords.toLocaleLowerCase())
    );
    setFilteredProducts(filteredProducts);
    setIsFiltered(true);
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  const modalOpenHandler = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <NavCont>
        <H2IR>네비게이션 바</H2IR>
        <DivLeft>
          <LogoImg src={logoImg} alt='로고' onClick={() => homeHandler()} />
          <label style={{ position: 'relative' }}>
            <InputSearch
              type='text'
              placeholder='상품을 검색해보세요!'
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              onKeyPress={keyPressHandler}
            />
            <BtnSearch type='button' onClick={searchHandler} />
          </label>
        </DivLeft>
        <DivRight>
          <BtnCart>
            <img
              src={iconCart}
              alt='장바구니 이미지'
              onClick={() => cartHandler()}
            />
            장바구니
          </BtnCart>
          <BtnMyPage>
            <img
              src={iconUser}
              alt='마이페이지 이미지'
              onClick={() => modalOpenHandler()}
            />
            내 정보
          </BtnMyPage>
        </DivRight>
      </NavCont>
      {modalOpen ? <ModalLogout /> : null}
    </>
  );
}

export default NavBar;
