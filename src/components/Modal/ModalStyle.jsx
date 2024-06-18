import styled from 'styled-components';

export const ContModal = styled.div`
  width: 100px;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 80px;
  right: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  button {
    font-size: 1.4rem;
    padding: 10px;
  }
`;
