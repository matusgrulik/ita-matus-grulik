import { BlogContext } from "./BlogContext";
import { Link } from "react-router-dom";
import { themes } from "./Theme";
import { urls } from "./utils";
import { useContext } from "react";
import styled from "styled-components";
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
export const PostLibrary = () => {
  const { posts } = useContext(BlogContext);
  return (
    <DivWrapper>
      {posts.map((post, index) => {
        return (
          <Link key={index} to={urls.URL_ARTICLE + post.slug + "-" + post.id}>
            <br />
            {post.postTitle}
          </Link>
        );
      })}
    </DivWrapper>
  );
};
