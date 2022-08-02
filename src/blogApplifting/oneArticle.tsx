import { ArticleState, BlogContext } from "./blogContext";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 24px;
  position: absolute;
  width: 760px;
  height: 700px;
  left: 590px;
  top: 320px;
  box-shadow: 3px 3px 15px 10px rgba(107, 107, 107, 0.58);
`;
const H1 = styled.h1`
  width: 550px;
  height: 48px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;
const AuthorAndDateDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 189px;
  height: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const AuthorP = styled.p`
  width: 98px;
  height: 20px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6c757d;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const DateP = styled.p`
  width: 63px;
  height: 20px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6c757d;
  flex: none;
  order: 2;
  flex-grow: 0;
`;
const MarkdownDiv = styled.div`
  width: 760px;
  height: 1020px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 170%;
  color: #212529;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

export const OneArticle = (props: { article: ArticleState }) => (
  <DivWrapper>
    <H1>{props.article.title}</H1>
    <AuthorAndDateDiv>
      <AuthorP>{props.article.author}</AuthorP>
      <DateP>{props.article.date}</DateP>
    </AuthorAndDateDiv>
    <MarkdownDiv>
      <Markdown>{props.article.content}</Markdown>
    </MarkdownDiv>
  </DivWrapper>
);
export const DefaultPost = () => (
  <DivWrapper>
    <H1>Default post</H1>
    <AuthorAndDateDiv>
      <AuthorP>Author</AuthorP>
      <DateP>1.8.2022</DateP>
    </AuthorAndDateDiv>
    <MarkdownDiv>
      <Markdown>
        This post was created as default. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Excepturi eos nemo laborum nostrum modi
        sit reiciendis, mollitia laboriosam impedit ab odio cupiditate
        consequatur dicta assumenda culpa tempore facere consectetur quos.
      </Markdown>
    </MarkdownDiv>
  </DivWrapper>
);
