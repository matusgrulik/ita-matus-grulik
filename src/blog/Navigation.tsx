import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NewPost } from "./NewPost";
import { OnePost } from "./OnePost";
import { PostLibrary } from "./PostLibrary";
import { PostsContext } from "./BlogApp";
import { themes } from "./Theme";
import { useContext } from "react";
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

export const URL_BASE = "/Blogpost/";

export function Navigation() {
  const { posts } = useContext(PostsContext);
  return (
    <Router>
      <div>
        <Nav>
          <DivLink>
            <LinkNav to={URL_BASE}>All Posts</LinkNav>
            <LinkNav to={URL_BASE + "NewPost"}>New Post</LinkNav>
          </DivLink>
        </Nav>

        <Switch>
          <Route path={URL_BASE + "NewPost"}>
            <NewPost />
          </Route>
          {posts.map((post, index) => (
            <Route
              key={index}
              path={URL_BASE + "Article/" + post.slug + "-" + post.id}
            >
              <OnePost post={post} />
            </Route>
          ))}
          <Route path={URL_BASE}>
            <PostLibrary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
