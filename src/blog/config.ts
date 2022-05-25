const URL_BASE = "/Blogpost/";

export const urls = {
  BASE: "/Blogpost/",
  NEWPOST: `${URL_BASE}NewPost`,
  ARTICLE: "Article/",
  DEFAULT_POST: `${URL_BASE}Article/DefaultPost`,
  onePost: (postSlug: string, postId: string) => {
    return `${URL_BASE}${urls.ARTICLE}${postSlug}-${postId}`;
  },
};
