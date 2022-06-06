import { Helmet } from "react-helmet";
import { themes } from "./Theme";
import styled from "styled-components";

const DivWrapper = styled.div`
  position: absolute;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${themes.primaryFont};
  margin: auto;
  text-align: center;
`;
const TextWrapper = styled.div`
  max-width: 50%;

  @media (max-width: 1400px) {
    margin-top: 2em;
    max-width: 80%;
    margin-bottom: 3em;
  }
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
      <Helmet>
        <title> Home Page</title>
      </Helmet>
      <TextWrapper>
        <H1>This web page is used to present my projects</H1>
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
      </TextWrapper>
    </DivWrapper>
  );
};
