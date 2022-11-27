import { StyledNavList } from "./styled";
import { NavigationLink } from "./NavigationLink";
import { NavRoute } from "todos/types";

interface NavigationProps {
    routes: NavRoute[];
};

export const Navigation = ({ routes }: NavigationProps) => (
    <nav>
        <StyledNavList>
            {routes.map(route => (
                <li>
                    <NavigationLink
                        path={route.path}
                        label={route.label}
                    />
                </li>
            ))}
        </StyledNavList>
    </nav>
);
