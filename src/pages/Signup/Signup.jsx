import React, { useState } from 'react';
import imgLogo from 'assets/img/logo.svg';
import Input from 'components/Common/Input/Input';
import Button from 'components/Common/Button/Button';
import {
  SignupSection,
  ImgLogo,
  H2IR,
  ContInputForm,
  ContUsername,
} from './SignupStyle';

function Signup() {
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
    password2: '',
    phone_number: '',
    name: '',
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  return (
    <SignupSection>
      <H2IR>회원가입 페이지</H2IR>
      <ImgLogo src={imgLogo} />
      <ContInputForm>
        <ContUsername>
          <Input
            label='아이디'
            type='text'
            name='username'
            placeholder='영문, 숫자만 사용 가능합니다.'
            max='20'
            onChange={inputChangeHandler}
          />
          <Button onsize='s'>중복 확인</Button>
        </ContUsername>
        <div>
          <Input
            label='비밀번호'
            type='password'
            name='password'
            placeholder='8자리 이상의 비밀번호를 설정해주세요.'
            min='8'
            max='20'
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <Input
            label='비밀번호 재확인'
            type='password'
            name='password2'
            placeholder='동일한 비밀번호를 입력해주세요.'
            min='8'
            max='20'
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <Input
            label='이름'
            type='text'
            name='name'
            placeholder='이름을 입력해주세요.'
            min='2'
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <Input
            label='휴대폰번호'
            type='text'
            name='phone_number'
            placeholder='휴대폰번호를 입력해주세요.'
            min='11'
            onChange={inputChangeHandler}
          />
        </div>
        <Button size='m'>{'오픈 마켓 시작하기'}</Button>
      </ContInputForm>
    </SignupSection>
  );
}

export default Signup;
