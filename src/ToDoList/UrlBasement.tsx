import { NavLink } from "react-router-dom";
import { themes } from "./Theme";
import styled from "styled-components";
const NavLinkStyled = styled(NavLink)`
  color: ${themes.primaryColor};
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2em;
  &.active {
    color: ${themes.secondaryColor};
  }
`;
export const LinkAll = () => {
  return <NavLinkStyled to="/todo/all">All</NavLinkStyled>;
};

export const LinkActive = () => {
  return <NavLinkStyled to="/todo/active">Active</NavLinkStyled>;
};
export const LinkCompleted = () => {
  return <NavLinkStyled to="/todo/completed">Completed</NavLinkStyled>;
};
