import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.fontLight};
    text-decoration: none;
    font-weight: 300;

     &.active {
        font-weight: 700;
    }
`;

interface NavigationLinkProps {
    path: string;
    label: string;
};

export const NavigationLink = ({ path, label }: NavigationLinkProps) => (
    <StyledNavLink to={path}>
        {label}
    </StyledNavLink>
);
