import { PostsContext } from "./BlogApp";
import { convertToSlug } from "../Utils/stringToSlug";
import { themes } from "./Theme";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import urlSlug from "url-slug";

const ErrorDiv = styled.div`
  text-align: ${themes.textAlign};
  font-size: 1em;
  font-weight: bold;
  color: ${themes.tertiaryColor};
  padding: 0;
  margin: 0.5em;
`;

const Label = styled.label`
  text-transform: ${themes.textTransform};
  margin: 0.5em;
  color: ${themes.primaryColor};
  font-family: ${themes.secondaryFont};
`;

const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 1em;
  position: relative;
  top: 1.5em;
  left: 8em;
  border-radius: 5px;
  color: ${themes.primaryColor};
  text-transform: ${themes.textTransform};

  &:hover {
    border: 2px solid ${themes.primaryColor};
    font-weight: bold;
    cursor: pointer;
  }
`;

const Input = styled.input`
  font-size: 0.9em;
  text-align: ${themes.textAlign};
  padding: 0.3em 1em;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: auto;
`;

const InputDiv = styled.div`
  width: 50%;
  margin: 1.5em 0 2em 0;
`;

export const NewPost = () => {
  const { addPost } = useContext(PostsContext);
  const [postTitle, setPostTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postText, setPostText] = useState("");
  const [slug, setSlug] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [authorError, setAuthorError] = useState<string | null>(null);
  const [textError, setTextError] = useState<string | null>(null);

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    setAuthorError(null);
    setTitleError(null);
    setTextError(null);
    if (
      postTitle.trim() === "" ||
      authorName.trim() === "" ||
      postText.trim() === ""
    ) {
      setAuthorError("Author is required");
      setTitleError("Title is required");
      setTextError("Text is required");
      return;
    }

    addPost(postTitle, authorName, postText, slug);
    setPostTitle("");
    setAuthorName("");
    setPostText("");
    setSlug("");
  }

  return (
    <div>
      <Form>
        <InputDiv>
          <ErrorDiv>{titleError}</ErrorDiv>
          <Label>Post Title</Label>
          <Input
            type="text"
            name="post title"
            placeholder="Post Title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
              setSlug(convertToSlug(e.target.value));
            }}
          />
        </InputDiv>
        <InputDiv>
          <ErrorDiv>{authorError}</ErrorDiv>
          <Label>Author Name</Label>
          <Input
            type="text"
            name="author name"
            placeholder="Author's Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <ErrorDiv>{textError}</ErrorDiv>
          <Label>Text Area</Label>
          <textarea
            required
            placeholder="#markdown"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </InputDiv>
        <div>
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </Form>
    </div>
  );
};
