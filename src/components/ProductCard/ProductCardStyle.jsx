import styled from 'styled-components';

export const ProductLi = styled.li`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const ProductImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border: 1px solid var(--sub-grey);
  border-radius: 10px;
`;

export const StoreName = styled.p`
  margin-top: 12px;
  font-size: 1.4rem;
  color: var(--main-grey);
`;

export const ProductName = styled.p`
  margin-top: 8px;
  font-size: 1.6rem;
`;

export const PriceTxt = styled.strong`
  margin-top: 10px;
  font-weight: 700;
  font-size: 2rem;
`;
