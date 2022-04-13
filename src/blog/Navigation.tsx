import { AllPostsLink, MainSwitch } from "./UrlBasement";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { NewPostLink } from "./UrlBasement";
import { themes } from "./Theme";
import styled from "styled-components";

const Nav = styled.nav`
  margin-top: 5em;
  font-family: ${themes.secondaryFont};
`;

const LinkNav = styled(Link)`
  text-decoration: ${themes.textDecoration};
  text-transform: ${themes.textTransform};
  color: ${themes.primaryColor};
  padding: 0.5em;
  width: 100%;
  text-align: ${themes.textAlign};
  margin: 1em;
  border: 2px solid ${themes.primaryColor};
  border-radius: 5px;

  &:hover {
    font-weight: bold;
  }
`;

const DivLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;

export const Navigation = () => (
  <Router>
    <div>
      <Nav>
        <DivLink>
          <AllPostsLink />
          <NewPostLink />
        </DivLink>
      </Nav>
      <MainSwitch />
    </div>
  </Router>
);
