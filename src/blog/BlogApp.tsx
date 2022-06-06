import { BlogContextProvider } from "./BlogContext";
import { Helmet } from "react-helmet";
import { Navigation } from "./Navigation";
import { themes } from "./Theme";
import styled from "styled-components";

const DivWrapper = styled.div`
  max-width: 80%;
  margin: auto;
`;

const H1 = styled.h1`
  color: ${themes.primaryColor};
  text-align: ${themes.textAlign};
  text-transform: ${themes.textTransform};
  padding-top: 1em;
  font-size: 2em;
  font-family: ${themes.primaryFont};
`;

export const BlogApp = () => {
  return (
    <BlogContextProvider>
      <DivWrapper>
        <Helmet>
          <title>Blog Post</title>
        </Helmet>
        <H1>Blog post</H1>
        <Navigation />
      </DivWrapper>
    </BlogContextProvider>
  );
};
