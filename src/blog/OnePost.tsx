import { PostState } from "./BlogApp";
import { themes } from "./Theme";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

//STYLE//

const DivWrapper = styled.div`
  margin: auto;
  padding: 1em 4em;
  background-color: ${themes.primaryColor};
  box-shadow: 3px 3px 15px 10px ${themes.primaryBorderShadowColor};
  color: ${themes.secondaryColor};
`;

const H3 = styled.h3`
  font-size: 2em;
`;

const H6 = styled.h6`
  font-weight: normal;
`;

//CODE//

export const OnePost = (props: { post: PostState }) => {
  return (
    <DivWrapper>
      <H3>{props.post.postTitle}</H3>
      <H6>from {props.post.authorName}</H6>
      <Markdown>{props.post.postText}</Markdown>
    </DivWrapper>
  );
};
