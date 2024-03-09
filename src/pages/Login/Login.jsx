import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authStore from 'store/authStore';
import postLogin from 'api/Login/postLogin';
import imgLogo from 'assets/img/logo.png';
import Button from 'components/Common/Button/Button';
import Input from 'components/Common/Input/Input';
import {
  ContSection,
  H2IR,
  ImgLogo,
  TxtLogo,
  ContInputForm,
  ContUsername,
} from './LoginStyle';

function Login() {
  const { isAuthenticated, token, login, logout } = authStore();

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
    login_type: 'BUYER',
  });
  const [usernameErr, setUsernameErr] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [pwErr, setPwErr] = useState('');
  const [pwIsValid, setPwIsValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const usernameHandler = () => {
    if (!loginForm.username) {
      setUsernameErr('아이디는 필수 항목입니다.');
      setUsernameIsValid(false);
    } else {
      setUsernameErr('');
      setUsernameIsValid(true);
    }
  };

  const passwordHandler = () => {
    if (!loginForm.password) {
      setPwErr('비밀번호는 필수 항목입니다.');
      setPwIsValid(false);
    } else if (loginForm.password.length < 8) {
      setPwErr('비밀번호는 8자 이상이어야 합니다.');
      setPwIsValid(false);
    } else {
      setPwErr('');
      setPwIsValid(true);
    }
  };

  useEffect(() => {
    setUsernameErr();
  }, [loginForm.username]);

  useEffect(() => {
    setPwErr();
  }, [loginForm.password]);

  const loginHandler = async (userData) => {
    try {
      const res = await postLogin(userData);
      setSubmit(true);
      console.log(res.token);
      login(res.token);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        if (err.response.data.FAIL_Message === '로그인 정보가 없습니다.') {
          alert('로그인 정보가 없습니다.');
          setSubmit(false);
        }
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      username: loginForm.username,
      password: loginForm.password,
      login_type: 'BUYER',
    };
    if (usernameIsValid && pwIsValid) {
      loginHandler(userData);
    }
  };

  useEffect(() => {
    setSubmit();
    if (submit) {
      alert('환영합니다!');
      navigate('/home');
    }
  }, [submit]);

  return (
    <ContSection>
      <H2IR>로그인 페이지</H2IR>
      <ImgLogo src={imgLogo} alt='로고 이미지' />
      <TxtLogo>Veganuary</TxtLogo>
      <ContInputForm onSubmit={submitHandler}>
        <ContUsername>
          <Input
            label='아이디'
            type='text'
            name='username'
            max='20'
            defaultValue={loginForm.username}
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
            defaultValue={loginForm.password}
            onChange={inputChangeHandler}
            onBlur={passwordHandler}
            message={pwErr}
          />
        </div>
        <Button
          variant={
            loginForm.username && loginForm.password ? 'abled' : 'disabled'
          }
          disabled={!loginForm.username || !loginForm.password}
          size='m'
          type='button'
        >
          로그인
        </Button>
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
