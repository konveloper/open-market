import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLogo from 'assets/img/logo.svg';
import Button from 'components/Common/Button/Button';
import Input from 'components/Common/Input/Input';
import {
  ContSection,
  H2IR,
  ImgLogo,
  ContInputForm,
  ContUsername,
} from './LoginStyle';

function Login() {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
    login_type: 'BUYER',
  });
  const [usernameErr, setUsernameErr] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const usernameHandler = () => {
    if (!loginForm.username) {
      setUsernameErr('아이디를 추가해주세요 :)');
      setUsernameIsValid(false);
    } else {
      setUsernameErr('');
      setUsernameIsValid(true);
    }
  };

  return (
    <ContSection>
      <H2IR>로그인 페이지</H2IR>
      <ImgLogo src={imgLogo} alt='로고 이미지' />
      <ContInputForm>
        <ContUsername>
          <Input
            label='아이디'
            type='text'
            name='username'
            max='20'
            onChange={inputChangeHandler}
            onBlur={usernameHandler}
            message={usernameErr}
          />
        </ContUsername>
        <div>
          <Input
            label='비밀번호'
            type='password'
            name='password'
            min='8'
            max='20'
            onChange={inputChangeHandler}
          />
        </div>
        <Button size='m'>로그인</Button>
      </ContInputForm>
      <Link
        to='/login/signup'
        style={{ display: 'block', fontSize: '1.4rem', marginTop: '30px' }}
      >
        회원가입
      </Link>
    </ContSection>
  );
}

export default Login;
