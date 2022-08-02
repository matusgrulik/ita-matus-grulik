import { BlogContext, BlogContextProvider } from "./blogContext";
import { DefaultPost, OneArticle } from "./oneArticle";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LogIn } from "./logIn";
import { MyArticles } from "./MyArticles";
import { NewArticle } from "./createArticle";
import { RecentArticles } from "./recentArticles";
import { appliftUrls } from "./config";
import { useContext } from "react";
import cat from "./img/cat.png";
import styled from "styled-components";
const DivWrapper = styled.div`
  max-width: 1600px;
  height: 2000px;
  margin: auto;
  border: 1px solid #f8f9fa;
`;
const Nav = styled.div`
  position: absolute;
  width: 1600px;
  height: 56px;
  left: 152px;
  top: 180px;
  background: #f8f9fa;
  border-radius: 4px;
`;
const CatLogo = styled.img`
  position: absolute;
  width: 39px;
  height: 44px;
  left: 225px;
  top: calc(50% - 44px / 2 - 3px);
`;
const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 7px;
  gap: 40px;
  position: absolute;
  width: 206px;
  height: 46px;
  left: 292px;
`;
const RecentArticlesLink = styled(Link)`
  width: 109px;
  height: 24px;
  font-family: “Helvetica Neue”;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212529;
  flex: none;
  order: 2;
  flex-grow: 0;
  text-decoration: none;
`;
const AboutLink = styled(Link)`
  width: 43px;
  height: 24px;
  font-family: “Helvetica Neue”;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6c757d;
  flex: none;
  order: 3;
  flex-grow: 0;
  text-decoration: none;
`;
const LogInLink = styled(Link)`
  position: absolute;
  width: 45px;
  height: 24px;
  left: 1100px;
  top: 14px;
  font-family: “Helvetica Neue”;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2b7efb;
  text-decoration: none;
`;
const CreateArticleLink = styled(Link)`
  width: 100px;
  height: 24px;
  font-family: “Helvetica Neue”;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6c757d;
  flex: none;
  order: 3;
  flex-grow: 0;
  text-decoration: none;
`;
const MyArticlesLink = styled(Link)`
  width: 100px;
  height: 24px;
  font-family: “Helvetica Neue”;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6c757d;
  flex: none;
  order: 3;
  flex-grow: 0;
  text-decoration: none;
`;
export const AppliftingComponent = () => {
  const articles = useContext(BlogContext);
  return (
    <DivWrapper>
      <Helmet>
        <title>Applifting Blog</title>
      </Helmet>
      <Nav>
        <CatLogo src={cat} alt="cat logo" />
        <MenuItems>
          <RecentArticlesLink to={appliftUrls.RECENT_ARTICLES}>
            Recent Articles
          </RecentArticlesLink>
          <AboutLink to={appliftUrls.ABOUT}>About</AboutLink>
          <LogInLink to={appliftUrls.LOG_IN}>Log in</LogInLink>
          <CreateArticleLink to={appliftUrls.CREATE_ARTICLE}>
            Create article
          </CreateArticleLink>
          <MyArticlesLink to={appliftUrls.MY_ARTICLES}>
            My articles
          </MyArticlesLink>
        </MenuItems>
      </Nav>
      <Switch>
        <Route path={appliftUrls.CREATE_ARTICLE}>
          <NewArticle />
        </Route>
        <Route path={appliftUrls.RECENT_ARTICLES}>
          <RecentArticles />
        </Route>
        {articles?.articles.map((article, index) => {
          return (
            <Route
              key={index}
              path={appliftUrls.oneArticle(article.slug, article.id)}
            >
              <OneArticle article={article} />
            </Route>
          );
        })}
        <Route path={appliftUrls.DEFAULT_POST}>
          <DefaultPost />
        </Route>
        <Route path={appliftUrls.MY_ARTICLES}>
          <MyArticles />
        </Route>
        <Route path={appliftUrls.LOG_IN}>
          <LogIn />
        </Route>
      </Switch>
    </DivWrapper>
  );
};
export const Applifting = () => (
  <Router>
    <BlogContextProvider>
      <AppliftingComponent />
    </BlogContextProvider>
  </Router>
);
