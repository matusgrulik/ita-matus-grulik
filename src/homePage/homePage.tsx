import { themes } from "./Theme";
import styled from "styled-components";

const DivWrapper = styled.div`
  font-family: ${themes.primaryFont};
  text-align: center;
  margin-top: 20em;
  margin-left: 30em;
  width: 50%;
`;
const H1 = styled.h1`
  font-size: 2em;
  text-transform: ${themes.textTransform};
`;
const H2 = styled.h2`
  font-size: 1.5em;
`;

const TextDiv = styled.div`
  font-size: 1.25em;
`;
const LinkDiv = styled.div`
  margin-top: 1em;
`;
const LinkGitHub = styled.a`
  font-size: 2em;
`;

export const HomePage = () => {
  return (
    <DivWrapper>
      <H1>This application cater to presentation of my projects</H1>
      <H2>Author: Matúš Grúlik</H2>
      <TextDiv>
        At this page You can see all applications I was doing during my course
        of learning react front-end development. Up on the page there is a
        navigation which contains link to every application, so You can try
        them. Also there is a link to GitHub repository of this project so You
        can check the code.
      </TextDiv>
      <LinkDiv>
        <LinkGitHub href="https://github.com/matusgrulik/ita-matus-grulik">
          GitHub repository
        </LinkGitHub>
      </LinkDiv>
    </DivWrapper>
  );
};
