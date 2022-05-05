const URL_BASE = "/Blogpost/";

export const urls = {
  URL_BASE: "/Blogpost/",
  URL_NEWPOST: `${URL_BASE} + "NewPost"`,
  URL_ARTICLE: "Article/",
  url_OnePost: (postSlug: string, postId: number) => {
    return `${URL_BASE}${urls.URL_ARTICLE}${postSlug}-${postId}`;
  },
};
