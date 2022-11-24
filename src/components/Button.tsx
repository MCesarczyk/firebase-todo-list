import styled from 'styled-components';

export const Button = styled.button<{ color?: string }>`
  padding: 10px;
  font-size: 18px;
  margin-top: 10px;
  border: none;
  color: white;
  background-color: ${({ color }) => color || '#525252'};
  transition: all 0.5s ease-out;

  &:hover{
    transform: scale(1.0125);
    filter: brightness(1.25);
  }
`;
