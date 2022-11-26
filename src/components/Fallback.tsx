import styled from "styled-components";

import { Button } from "components/Button";

const StyledFallbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
};

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <StyledFallbackWrapper>
    <h2>Oooppssss... something went wrong...</h2>
    <p>{error.message}</p>
    <Button onClick={() => resetErrorBoundary()}>Reload</Button>
  </StyledFallbackWrapper>
);
