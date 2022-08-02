const URL_BASE = "/AppliftingBlog/";
export const appliftUrls = {
  RECENT_ARTICLES: "/recent-articles",
  ABOUT: "/about",
  LOG_IN: "/log-in",
  CREATE_ARTICLE: "/create-article",
  MY_ARTICLES: "/my-articles",
  DEFAULT_POST: "/default-post",
  ARTICLE: "Article/",
  oneArticle: (articleSlug: string, articleId: string) => {
    return `${URL_BASE}${appliftUrls.ARTICLE}${articleSlug}-${articleId}`;
  },
};
