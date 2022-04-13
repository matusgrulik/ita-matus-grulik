import { Navigation } from "./Navigation";
import { themes } from "./Theme";
import { useLocalStorage } from "../Utils/UseLocalStorage";
import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  max-width: 880px;
  margin: auto;
`;

const H1 = styled.h1`
  color: ${themes.primaryColor};
  text-align: ${themes.textAlign};
  text-transform: ${themes.textTransform};
  padding-top: 1em;
  font-size: 5em;
  font-family: ${themes.primaryFont};
`;

export type PostState = {
  authorName: string;
  postTitle: string;
  postText: string;
  id: number;
  slug: string;
};

export type PostsContextState = {
  posts: PostState[];
  addPost: (
    postTitle: string,
    authorName: string,
    postText: string,
    slug: string
  ) => void;
};

export const PostsContext = React.createContext<PostsContextState>({
  posts: [],
  addPost: () => {},
});
const STORAGE_NAME = "blogPostApp";

export const BlogApp = () => {
  const [posts, setPosts] = useLocalStorage<PostState[]>(STORAGE_NAME, []);

  const addPost = (
    newPostTitle: string,
    newAuthorName: string,
    newPostText: string,
    newSlug: string
  ) => {
    const newPost: PostState = {
      postTitle: newPostTitle,
      authorName: newAuthorName,
      postText: newPostText,
      id: posts.length,
      slug: newSlug,
    };
    setPosts((p) => [newPost, ...p]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      <DivWrapper>
        <H1>Blog post</H1>
        <Navigation />
      </DivWrapper>
    </PostsContext.Provider>
  );
};
