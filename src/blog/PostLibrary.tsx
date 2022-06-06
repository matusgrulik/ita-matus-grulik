import { BlogContext } from "./BlogContext";
import { DefaultPost } from "./OnePost";
import { Link } from "react-router-dom";
import { themes } from "./Theme";
import { urls } from "./config";
import { useContext } from "react";
import styled from "styled-components";
const DivWrapper = styled.div`
  margin: 1em;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const DivPostLink = styled(Link)`
  font-size: 1.2em;
  text-decoration: ${themes.textDecoration};
  color: ${themes.primaryColor};
  padding: 0.5em;

  &:hover {
    font-weight: bold;
  }
`;
export const PostLibrary = () => {
  const posts = useContext(BlogContext);
  return (
    <DivWrapper>
      {posts.posts.map((post, index) => {
        return (
          <DivPostLink key={index} to={urls.onePost(post.slug, post.id)}>
            <br />
            {post.postTitle}
          </DivPostLink>
        );
      })}
      <DivPostLink to={urls.DEFAULT_POST}>
        <br />
        default post
      </DivPostLink>
    </DivWrapper>
  );
};
