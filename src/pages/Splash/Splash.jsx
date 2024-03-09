import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import logoImg from 'assets/img/logo.png';
import { SplashCont, LogoImg, LogoTxt, Txt } from './SplashStyle';

function Splash() {
  const [visibleSplash, setVisibleSplash] = useState(true);

  useEffect(() => {
    const splashClear = setTimeout(() => setVisibleSplash(false), 2000);
    return () => clearTimeout(splashClear);
  }, []);

  if (visibleSplash === true) {
    return (
      <>
        <SplashCont>
          <LogoImg src={logoImg} alt='로고 이미지' />
          <Txt>지금 시작되는 지속가능한 뷰티</Txt>
          <LogoTxt>Veganuary</LogoTxt>
        </SplashCont>
      </>
    );
  } else {
    return localStorage.length === 0 ? (
      <Navigate to='/login' replace />
    ) : (
      <Navigate to='/home' replace />
    );
  }
}

export default Splash;
