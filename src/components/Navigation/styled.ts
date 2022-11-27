import styled from "styled-components";

export const StyledNavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 15px;
    background-color: ${({ theme }) => theme.color.primary};
    margin: 0;
    margin-bottom: 20px;
`;