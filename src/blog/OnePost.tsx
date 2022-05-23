import { PostState } from "./BlogContext";
import { themes } from "./Theme";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const DivWrapper = styled.div`
  margin: auto;
  padding: 1em 4em;
  box-shadow: 3px 3px 15px 10px ${themes.primaryBorderShadowColor};
  color: ${themes.primaryColor};
`;

const H3 = styled.h3`
  font-size: 2em;
`;

const H6 = styled.h6`
  font-weight: normal;
`;

export const OnePost = (props: { post: PostState }) => (
  <DivWrapper>
    <H3>{props.post.postTitle}</H3>
    <H6>from {props.post.authorName}</H6>
    <Markdown>{props.post.postText}</Markdown>
  </DivWrapper>
);
export const DefaultPost = () => (
  <DivWrapper>
    <H3>Default Post</H3>
    <H6>from Author</H6>
    <Markdown>This post was created as default.</Markdown>
  </DivWrapper>
);
