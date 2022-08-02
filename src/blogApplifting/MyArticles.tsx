import { Link } from "react-router-dom";
import { appUrls } from "../config";
import { appliftUrls } from "./config";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;
  position: absolute;
  width: 388px;
  height: 48px;
  left: 372px;
  top: 304px;
`;
const H1 = styled.h1`
  width: 202px;
  height: 48px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  /* Text / Body */
  color: #212529;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const CreateArticleButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 4px;
  width: 154px;
  height: 36px;
  background: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;

  &:hover {
    cursor: pointer;
  }
`;
const CreateArticleLink = styled(Link)`
  width: 130px;
  height: 24px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
`;
export const MyArticles = () => {
  return (
    <HeaderDiv>
      <H1>My articles</H1>
      <CreateArticleButton>
        <CreateArticleLink to={appliftUrls.CREATE_ARTICLE}>
          Create Article
        </CreateArticleLink>
      </CreateArticleButton>
    </HeaderDiv>
  );
};
