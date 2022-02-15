import { Link } from "react-router-dom";
import { PostsContext } from "./BlogApp";
import { URL_BASE } from "./Navigation";
import { themes } from "./Theme";
import { useContext } from "react";
import styled from "styled-components";

//STYLE//

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

//CODE//

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
