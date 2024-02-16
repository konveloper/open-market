import styled from 'styled-components';

export const FooterCont = styled.section`
  width: 100%;
  height: 250px;
  display: fixed;
  bottom: 0;
  left: 0;
  padding-left: 220px;
  background-color: var(--light-grey);
`;

export const LinkDiv = styled.div`
  margin-top: 50px;
`;
export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 900px;
  margin-top: 50px;
`;

export const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  position: absolute;
  right: 0px;
`;

export const InstaBtn = styled.button``;

export const FacebookBtn = styled.button``;

export const YoutubeBtn = styled.button``;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const InfoStrong = styled.strong`
  color: (sub-grey);
  font-size: 1.4rem;
  line-height: 24px;
`;

export const InfoTxt = styled.small`
  color: (sub-grey);
  font-size: 1.4rem;
  line-height: 24px;
`;
