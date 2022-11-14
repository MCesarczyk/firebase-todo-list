import styled, { css } from 'styled-components';

export const Button = styled.button<{ branded?: boolean }>`
  padding: 10px;
  font-size: 18px;
  margin-top: 10px;
  border: none;
  color: white;
  background-color: black;

  ${({ branded }) => branded && css`
    background-color: #4285f4;
  `}
`;