import { BlogContext } from "./blogContext";
import { Link } from "react-router-dom";
import { appliftUrls } from "./config";
import { useContext } from "react";
import styled from "styled-components";
const H1 = styled.h1`
  position: absolute;
  width: 277px;
  height: 48px;
  left: 0px;
  top: 0px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;
const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 561px;
  height: 220px;
  left: 350px;
  top: 320px;
`;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 561px;
  height: 220px;
  left: 0px;
  top: 100px;
`;
const ArticleTitleLink = styled(Link)`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #212529;
  text-decoration: none;
`;
const ArticleDescription = styled.div`
  width: 557px;
  height: 96px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212529;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const RecentArticles = () => {
  const articles = useContext(BlogContext);
  return (
    <ArticleWrapper>
      <H1>Recent Articles</H1>
      <LinksWrapper>
        {articles.articles.map((article, index) => {
          return (
            <ArticleTitleLink
              key={index}
              to={appliftUrls.oneArticle(article.slug, article.id)}
            >
              {article.title}
              <br />
              <ArticleDescription>{article.description}</ArticleDescription>
            </ArticleTitleLink>
          );
        })}
        <ArticleTitleLink to={appliftUrls.DEFAULT_POST}>
          Default post
          <br />
          <ArticleDescription>
            This post was created as default
          </ArticleDescription>
        </ArticleTitleLink>
      </LinksWrapper>
    </ArticleWrapper>
  );
};
