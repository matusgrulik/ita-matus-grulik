import { Helmet } from "react-helmet";
import { Navigation } from "./Navigation";
import { themes } from "./Theme";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

//STYLE//
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

//CODE//

export interface PostState {
  authorName: string;
  postTitle: string;
  postText: string;
  id: number;
  slug: string;
}

export interface PostsContextState {
  posts: PostState[];
  addPost: (
    postTitle: string,
    authorName: string,
    postText: string,
    slug: string
  ) => void;
}

export const PostsContext = React.createContext<PostsContextState>({
  posts: [],
  addPost: () => {},
});

/**
 * Help: https://usehooks.com/useLocalStorage/
 **/

const useLocalStorage = (defaultValue: PostState[]) => {
  const [posts, setPostsLocally] = useState(() => {
    try {
      const data = localStorage.getItem("blogPosts");
      return data ? JSON.parse(data) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const setPosts = (value: PostState[] | ((v: PostState[]) => PostState[])) => {
    try {
      const valueToLocalStorage =
        value instanceof Function ? value(posts) : value;
      setPostsLocally(valueToLocalStorage);
      localStorage.setItem("blogPosts", JSON.stringify(valueToLocalStorage));
    } catch {}
  };

  return [posts, setPosts] as const;
};

export const BlogApp = () => {
  const [posts, setPosts] = useLocalStorage([] as PostState[]);

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
    setPosts((prevState) => [newPost, ...prevState]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      <DivWrapper>
        <Helmet>
          <style>{`body { background-color: ${themes.quaternaryColor}}`}</style>
        </Helmet>
        <H1>Blog post</H1>
        <Navigation />
      </DivWrapper>
    </PostsContext.Provider>
  );
};
