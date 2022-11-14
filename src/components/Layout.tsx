import { ReactNode } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #dcdcdc;
  padding: 30px;
`;

interface LayoutProps {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <AppWrapper>
    <AppInnerWrapper>
      {children}
    </AppInnerWrapper>
  </AppWrapper>
);
