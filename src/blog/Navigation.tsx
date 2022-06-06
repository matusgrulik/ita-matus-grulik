import { BlogContext } from "./BlogContext";
import { DefaultPost, OnePost } from "./OnePost";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NewPost } from "./NewPost";
import { PostLibrary } from "./PostLibrary";
import { themes } from "./Theme";
import { urls } from "./config";
import { useContext } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  margin-top: 3em;
  font-family: ${themes.secondaryFont};
`;

const LinkNav = styled(Link)`
  text-transform: ${themes.textTransform};
  color: ${themes.primaryColor};
  width: 100%;
  font-size: 2em;
  text-align: ${themes.textAlign};
  margin: 1em;

  &:hover {
    font-weight: bold;
  }
`;

const DivLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;

export const Navigation = () => {
  const posts = useContext(BlogContext);
  return (
    <Router>
      <div>
        <Nav>
          <DivLink>
            <LinkNav to={urls.BASE}>All Posts</LinkNav>
            <LinkNav to={urls.NEWPOST}>New Post</LinkNav>
          </DivLink>
        </Nav>

        <Switch>
          <Route path={urls.NEWPOST}>
            <NewPost />
          </Route>
          {posts.posts.map((post, index) => (
            <Route key={index} path={urls.onePost(post.slug, post.id)}>
              <OnePost post={post} />
            </Route>
          ))}
          <Route path={urls.DEFAULT_POST}>
            <DefaultPost />
          </Route>
          <Route path={urls.BASE}>
            <PostLibrary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
