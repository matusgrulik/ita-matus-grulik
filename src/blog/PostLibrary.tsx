import { BlogContext } from "./BlogContext";
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
  max-width: 880px;
`;
const DivPostLink = styled(Link)`
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
          <DivPostLink key={index} to={urls.url_OnePost(post.slug, post.id)}>
            <br />
            {post.postTitle}
          </DivPostLink>
        );
      })}
    </DivWrapper>
  );
};
