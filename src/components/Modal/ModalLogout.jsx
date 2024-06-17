import React from 'react';
import { useNavigate } from 'react-router-dom';
import postLogout from 'api/User/postLogout';
import authStore from 'store/authStore';
import { ContModal } from './ModalStyle';

function ModalLogout() {
  const navigate = useNavigate();
  const logout = authStore((state) => state.logout);

  const logoutHandler = async () => {
    const res = await postLogout();
    if (res) {
      logout();
      alert('로그아웃되었습니다.');
      navigate('/login');
    }
  };

  return (
    <ContModal>
      <button>마이 페이지</button>
      <button onClick={logoutHandler}>로그아웃</button>
    </ContModal>
  );
}

export default ModalLogout;
