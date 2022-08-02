import { genericHookContextBuilder } from "./GenericHookContextBuilder";
import { getId, useLocalStorage } from "./utils";

export type ArticleState = {
  title: string;
  author: string;
  description: string;

  content: string;
  id: string;
  slug: string;
};
const STORAGE_NAME = "appliftingBlog";
const useBlogLogic = () => {
  const [articles, setArticles] = useLocalStorage<ArticleState[]>(
    STORAGE_NAME,
    []
  );
  const postArticle = (
    newTitle: string,
    newAuthor: string,
    newDescription: string,
    newContent: string,
    newSlug: string
  ) => {
    const newArticle = {
      title: newTitle,
      author: newAuthor,
      description: newDescription,
      content: newContent,
      id: getId(),
      slug: newSlug,
    };
    setArticles((p) => [newArticle, ...p]);
  };
  return {
    articles,
    postArticle,
  };
};

export const { Context: BlogContext, ContextProvider: BlogContextProvider } =
  genericHookContextBuilder(useBlogLogic);
