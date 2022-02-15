import { PostsContext } from "./BlogApp";
import { themes } from "./Theme";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import urlSlug from "url-slug";

//STYLE//

const ErrorDiv = styled.div`
  text-align: ${themes.textAlign};
  font-size: 1.5em;
  font-weight: bold;
  color: ${themes.tertiaryColor};
  padding: 1em 0;
  margin: 0 30%;
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
  background: ${themes.primaryColor};
  color: ${themes.secondaryColor};
  text-transform: ${themes.textTransform};

  &:hover {
    border: 2px solid ${themes.secondaryColor};
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

//CODE//

export const NewPost = () => {
  const { addPost } = useContext(PostsContext);
  const [postTitle, setPostTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postText, setPostText] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    setError("");
    if (postTitle.replace(" ", "") === "") {
      setError("Title is required");
      return;
    }
    if (authorName.replace(" ", "") === "") {
      setError("Author is required");
      return;
    }
    if (postText.replace(" ", "") === "") {
      setError("Text is required");
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
      <ErrorDiv>{error}</ErrorDiv>
      <Form>
        <InputDiv>
          <Label>Post Title</Label>
          <Input
            type="text"
            name="post title"
            placeholder="Post Title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
              setSlug(urlSlug(e.target.value));
            }}
          />
        </InputDiv>
        <InputDiv>
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
