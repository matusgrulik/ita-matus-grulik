import { NavLink } from "react-router-dom";
import { themes } from "./Theme";
import React from "react";
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
export class LinkAll extends React.Component<any, any> {
  render() {
    return <NavLinkStyled to="/todo/all">All</NavLinkStyled>;
  }
}
export class LinkActive extends React.Component<any, any> {
  render() {
    return <NavLinkStyled to="/todo/active">Active</NavLinkStyled>;
  }
}
export class LinkCompleted extends React.Component<any, any> {
  render() {
    return <NavLinkStyled to="/todo/completed">Completed</NavLinkStyled>;
  }
}
