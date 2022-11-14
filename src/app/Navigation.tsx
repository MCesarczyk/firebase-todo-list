import { NavLink } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from './routes';

const NavigationList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  height: 4rem;
  margin: 0;
`;

const NavigationItem = styled.li`
  width: 100%;
  text-align: center;
`;

const NavigationLink = styled(NavLink)`
  background-color: #4285f4;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  display: inline-block;

  &:hover {
    filter: brightness(1.2);
  }

  &.active {
    background-color: #525252;
  }
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const Navigation = () => (
  <nav>
    <NavigationList>
      <NavigationItem>
        <NavigationLink to={ROUTES.DASHBOARD}>Dashboard</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to={ROUTES.TODOS}>Todos</NavigationLink>
      </NavigationItem>
    </NavigationList>
  </nav>
);
