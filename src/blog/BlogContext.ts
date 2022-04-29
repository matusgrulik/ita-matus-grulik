import { genericHookContextBuilder } from "./GenericHookContextBuilder";
import { useLocalStorage } from "./utils";

export type PostState = {
  authorName: string;
  postTitle: string;
  postText: string;
  id: number;
  slug: string;
};

const STORAGE_NAME = "blogPostApp";
const useBlogLogic = () => {
  const [posts, setPosts] = useLocalStorage<PostState[]>(STORAGE_NAME, []);
  const addPost = (
    newPostTitle: string,
    newAuthorName: string,
    newPostText: string,
    newSlug: string
  ) => {
    const newPost = {
      postTitle: newPostTitle,
      authorName: newAuthorName,
      postText: newPostText,
      id: posts.length,
      slug: newSlug,
    };
    setPosts((p) => [newPost, ...p]);
  };
  return {
    posts,
    addPost,
  };
};

export const { Context: BlogContext, ContextProvider: BlogContextProvider } =
  genericHookContextBuilder(useBlogLogic);
