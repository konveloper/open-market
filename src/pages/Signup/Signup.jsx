import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import postUsernameIsValid from 'api/Signup/postUsernameIsValid';
import postSignup from 'api/Signup/postSignup';
import imgLogo from 'assets/img/logo.png';
import Input from 'components/Common/Input/Input';
import Button from 'components/Common/Button/Button';
import {
  SignupSection,
  H2IR,
  ImgLogo,
  TxtLogo,
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
  const [usernameErr, setUsernameErr] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [pwErr, setPwErr] = useState('');
  const [pwIsValid, setPwIsValid] = useState(false);
  const [pwCheckErr, setPwCheckErr] = useState('');
  const [pwCheckIsValid, setPwCheckIsValid] = useState(false);
  const [nameErr, setNameErr] = useState('');
  const [nameIsValid, setNameisValid] = useState(false);
  const [phoneNumberErr, setPhoneNumberErr] = useState('');
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const usernameHandler = () => {
    const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (!signupForm.username) {
      setUsernameErr('아이디는 필수 항목입니다.');
      setUsernameIsValid(false);
    } else if (!regExp.test(signupForm.username)) {
      setUsernameErr('아이디는 20자 이내의 영문, 숫자만 사용 가능합니다.');
      setUsernameIsValid(false);
    } else if (signupForm.username.length > 20) {
      setUsernameErr('아이디는 20자 이하여야 합니다.');
      setUsernameIsValid(false);
    }
  };

  const usernameValidationHandler = async () => {
    try {
      const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
      const usernameData = {
        username: signupForm.username,
      };
      const res = await postUsernameIsValid(usernameData);
      if (!signupForm.username) {
        setUsernameErr('아이디는 필수 항목입니다.');
        setUsernameIsValid(false);
      } else if (!regExp.test(signupForm.username)) {
        setUsernameErr('아이디는 20자 이내의 영문, 숫자만 사용 가능합니다.');
        setUsernameIsValid(false);
      } else if (signupForm.username.length > 20) {
        setUsernameErr('아이디는 20자 이하여야 합니다.');
        setUsernameIsValid(false);
      } else if (res.Success === '멋진 아이디네요 :)') {
        setUsernameErr(`${res.Success}`);
        setUsernameIsValid(true);
      }
    } catch (err) {
      if (err.response.data.FAIL_Message === '이미 사용 중인 아이디입니다.') {
        setUsernameErr(`${err.response.data.FAIL_Message}`);
        setUsernameIsValid(false);
      } else {
        setUsernameErr('');
        setUsernameIsValid(false);
      }
    }
  };

  const pwHandler = () => {
    if (!signupForm.password) {
      setPwErr('비밀번호는 필수 항목입니다.');
      setPwIsValid(false);
    } else if (signupForm.password.length < 8) {
      setPwErr('비밀번호는 8자 이상이어야 합니다.');
      setPwIsValid(false);
    } else {
      setPwErr('');
      setPwIsValid(true);
    }
  };

  const pwCheckHandler = () => {
    if (!signupForm.password2) {
      setPwCheckErr('비밀번호 재확인은 필수 항목입니다.');
      setPwCheckIsValid(false);
    } else if (signupForm.password2.length < 8) {
      setPwCheckErr('비밀번호는 8자 이상이어야 합니다.');
      setPwCheckIsValid(false);
    } else if (signupForm.password !== signupForm.password2) {
      setPwCheckErr('비밀번호를 동일하게 입력해주세요.');
      setPwCheckIsValid(false);
    } else {
      setPwCheckErr('동일한 비밀번호입니다.');
      setPwCheckIsValid(true);
    }
  };

  const nameHandler = () => {
    if (!signupForm.name) {
      setNameErr('이름은 필수 항목입니다.');
      setNameisValid(false);
    } else if (signupForm.name.length < 2) {
      setNameErr('이름은 2글자 이상이어야 합니다.');
      setNameisValid(false);
    } else {
      setNameErr('');
      setNameisValid(true);
    }
  };

  const phoneNumberHandler = () => {
    const regExp = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    if (!signupForm.phone_number) {
      setPhoneNumberErr('휴대폰번호는 필수 항목입니다.');
      setPhoneNumberIsValid(false);
    } else if (signupForm.phone_number.length > 11) {
      setPhoneNumberErr('휴대폰번호는 11자리 이하여야 합니다.');
      setPhoneNumberIsValid(false);
    } else if (!regExp.test(signupForm.phone_number)) {
      setPhoneNumberErr(
        '핸드폰 번호는 01*으로 시작하는 11자리 숫자여야 합니다.'
      );
      setPhoneNumberIsValid(false);
    } else {
      setPhoneNumberErr('');
      setPhoneNumberIsValid(true);
    }
  };

  useEffect(() => {
    setUsernameErr();
  }, [signupForm.username]);

  useEffect(() => {
    setPwErr();
  }, [signupForm.password]);

  useEffect(() => {
    setPwCheckErr();
  }, [signupForm.password2]);

  useEffect(() => {
    setNameErr();
  }, [signupForm.name]);

  useEffect(() => {
    setPhoneNumberErr();
  }, [signupForm.phone_number]);

  const signupHandler = async (userData) => {
    try {
      const res = await postSignup(userData);
      setSubmit(true);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        if (
          err.response.data.phone_number[0] ===
          '해당 사용자 전화번호는 이미 존재합니다.'
        ) {
          setPhoneNumberErr('해당 사용자 전화번호는 이미 존재합니다.');
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
      username: signupForm.username,
      password: signupForm.password,
      password2: signupForm.password2,
      phone_number: signupForm.phone_number,
      name: signupForm.name,
    };
    if (
      usernameIsValid &&
      pwIsValid &&
      pwCheckIsValid &&
      nameIsValid &&
      phoneNumberIsValid
    ) {
      signupHandler(userData);
    }
  };

  useEffect(() => {
    setSubmit();
    if (submit) {
      alert('환영합니다!');
      navigate('/login');
    }
  }, [submit]);

  return (
    <SignupSection>
      <H2IR>회원가입 페이지</H2IR>
      <ImgLogo src={imgLogo} />
      <TxtLogo>비긴 비건</TxtLogo>
      <ContInputForm onSubmit={submitHandler}>
        <ContUsername>
          <Input
            label='아이디'
            type='text'
            name='username'
            placeholder='영문, 숫자만 사용 가능합니다.'
            defaultValue={signupForm.username}
            onChange={inputChangeHandler}
            onBlur={usernameHandler}
            message={usernameErr}
          />
          <Button onClick={usernameValidationHandler} type='button' onsize='s'>
            중복 확인
          </Button>
        </ContUsername>
        <div>
          <Input
            label='비밀번호'
            type='password'
            name='password'
            placeholder='8자리 이상의 비밀번호를 설정해주세요.'
            min='8'
            max='20'
            defaultValue={signupForm.password}
            onChange={inputChangeHandler}
            onBlur={pwHandler}
            message={pwErr}
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
            defaultValue={signupForm.password2}
            onChange={inputChangeHandler}
            onBlur={pwCheckHandler}
            message={pwCheckErr}
          />
        </div>
        <div>
          <Input
            label='이름'
            type='text'
            name='name'
            placeholder='이름을 입력해주세요.'
            min='2'
            defaultValue={signupForm.name}
            onChange={inputChangeHandler}
            onBlur={nameHandler}
            message={nameErr}
          />
        </div>
        <div>
          <Input
            label='휴대폰번호'
            type='text'
            name='phone_number'
            placeholder='휴대폰 번호를 입력해주세요.'
            min='11'
            defaultValue={signupForm.phone_number}
            onChange={inputChangeHandler}
            onBlur={phoneNumberHandler}
            message={phoneNumberErr}
          />
        </div>
        <Button
          variant={
            signupForm.username &&
            signupForm.password &&
            signupForm.password2 &&
            signupForm.name &&
            signupForm.phone_number
              ? 'abled'
              : 'disabled'
          }
          disabled={
            !signupForm.username ||
            !signupForm.password ||
            !signupForm.password2 ||
            !signupForm.name ||
            !signupForm.phone_number
          }
          size='m'
        >
          {'비긴 비건 시작하기'}
        </Button>
      </ContInputForm>
    </SignupSection>
  );
}

export default Signup;
