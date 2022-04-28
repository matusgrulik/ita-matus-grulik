import { BlogContextProvider } from "./BlogContext";
import { Navigation } from "./Navigation";
import { themes } from "./Theme";
import styled from "styled-components";

const DivWrapper = styled.div`
  max-width: 880px;
  margin: auto;
`;

const H1 = styled.h1`
  color: ${themes.primaryColor};
  text-align: ${themes.textAlign};
  text-transform: ${themes.textTransform};
  padding-top: 1em;
  font-size: 5em;
  font-family: ${themes.primaryFont};
`;

export const BlogApp = () => {
  return (
    <BlogContextProvider>
      <DivWrapper>
        <H1>Blog post</H1>
        <Navigation />
      </DivWrapper>
    </BlogContextProvider>
  );
};
