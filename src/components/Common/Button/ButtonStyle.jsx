import styled, { css } from 'styled-components';

export const SIZES = {
  lg: css`
    --width: 220px;
    --button-padding: 19px;
    --button-font-size: 1.4rem;
    --button-radius: 5px;
  `,
  m: css`
    --width: 480px;
    --button-padding: 19px;
    --button-font-size: 1.4rem;
    --button-radius: 5px;
  `,
  ms: css`
    --width: 168px;
    --button-padding: 15px;
    --button-font-size: 1.4rem;
    --button-radius: 5px;
  `,
  s: css`
    --width: 80px;
    --button-padding: 10px;
    --button-font-size: 1.2rem;
    --button-radius: 5px;
  `,
};

export const VARIANTS = {
  abled: css`
    --background-color: var(--main);
    --color: var(--white);
    --outline: none;
  `,
  disabled: css`
    --background-color: var(--main);
    --color: var(--white);
    --outline: none;
  `,
  active: css`
    --background-color: var(--main);
    --color: var(--white);
    --outline: solid var(--sub-grey);
  `,
};
export const BtnStyle = styled.button`
  ${(prop) => prop.sizeStyle}
  ${(prop) => prop.variantStyle}
    width: var(--width, 220px);
  font-size: var(--button-font-size, 1.4rem);
  padding: var(--button-padding, 19px);
  border-radius: var(--button-radius, 5px);
  background-color: var(--background-color, var(--main));
  color: var(--color, var(--white));
  outline: var(--outline, none);
  &:disabled {
    cursor: default;
  }
`;
