import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NewPost } from "./NewPost";
import { OnePost } from "./OnePost";
import { PostsContext } from "./BlogApp";
import { themes } from "../blog/Theme";
import { useContext } from "react";
import styled from "styled-components";

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
const DivWrapper = styled.div`
  margin: 1em;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  max-width: 880px;

  a {
    text-decoration: ${themes.textDecoration};
    color: ${themes.primaryColor};
    padding: 0.5em;
  }
`;

export const URL_BASE = "/Blogpost/";
export const AllPostsLink = () => <LinkNav to={URL_BASE}>All Posts</LinkNav>;
export const NewPostLink = () => (
  <LinkNav to={URL_BASE + "NewPost"}>New Post</LinkNav>
);
export const MainSwitch = () => {
  const { posts } = useContext(PostsContext);
  return (
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
  );
};
export const PostLibrary = () => {
  const { posts } = useContext(PostsContext);
  return (
    <DivWrapper>
      {posts.map((post, index) => {
        return (
          <Link
            key={index}
            to={URL_BASE + "Article/" + post.slug + "-" + post.id}
          >
            <br />
            {post.postTitle}
          </Link>
        );
      })}
    </DivWrapper>
  );
};
