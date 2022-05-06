const URL_BASE = "/Blogpost/";

export const urls = {
  BASE: "/Blogpost/",
  NEWPOST: `${URL_BASE}NewPost`,
  ARTICLE: "Article/",
  onePost: (postSlug: string, postId: string) => {
    return `${URL_BASE}${urls.ARTICLE}${postSlug}-${postId}`;
  },
};
