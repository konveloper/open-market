import React from 'react';
import { Link } from 'react-router-dom';
import IconInsta from 'assets/img/icon-insta.svg';
import Iconfacebook from 'assets/img/icon-fb.svg';
import IconYoutube from 'assets/img/icon-yt.svg';
import {
  FooterCont,
  FooterDiv,
  LinkDiv,
  BtnDiv,
  InstaBtn,
  FacebookBtn,
  YoutubeBtn,
  InfoDiv,
  InfoStrong,
  InfoTxt,
} from './FooterStyle';

function Footer() {
  return (
    <FooterCont>
      <FooterDiv>
        <LinkDiv>
          <Link
            to='#'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '5px',
            }}
          >
            마켓소개
          </Link>
          <Link
            to='#'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '5px',
            }}
          >
            이용약관
          </Link>
          <Link
            to='#'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '5px',
              fontWeight: '700',
            }}
          >
            개인정보처리방침
          </Link>
          <Link
            to='#'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '5px',
            }}
          >
            전자금융거래약관
          </Link>
          <Link
            to='#'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '5px',
            }}
          >
            청소년보호정책
          </Link>
          <Link
            to='#'
            style={{
              fontSize: '1.4rem',
              lineHeight: '24px',
              marginRight: '5px',
            }}
          >
            제휴문의
          </Link>
          <BtnDiv>
            <InstaBtn type='button'>
              <img src={IconInsta} alt='' />
            </InstaBtn>
            <FacebookBtn type='button'>
              <img src={Iconfacebook} alt='' />
            </FacebookBtn>
            <YoutubeBtn type='button'>
              <img src={IconYoutube} alt='' />
            </YoutubeBtn>
          </BtnDiv>
        </LinkDiv>
        <InfoDiv>
          <InfoStrong style={{ fontWeight: '700' }}>(주)Shop</InfoStrong>
          <InfoTxt>행복도 행복시 행복로 79</InfoTxt>
          <InfoTxt>사업자 번호 : 000-0000-0000 | 통신판매업</InfoTxt>
          <InfoTxt>대표: 고은영</InfoTxt>
        </InfoDiv>
      </FooterDiv>
    </FooterCont>
  );
}

export default Footer;
