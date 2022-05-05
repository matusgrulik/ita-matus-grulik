import * as yup from "yup";
import { BlogContext } from "./BlogContext";
import { convertToSlug } from "./utils";
import { themes } from "./Theme";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

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
const inputsSchema = yup.object().shape({
  postTitle: yup.string().required("Post Title is required"),
  authorName: yup.string().required("Author Name is required"),
  textArea: yup.string().required("Text is required"),
});
export const NewPost = () => {
  const { addPost } = useContext(BlogContext);
  const [postTitle, setPostTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postText, setPostText] = useState("");
  const [slug, setSlug] = useState("");

  const form = useForm({ resolver: yupResolver(inputsSchema) });
  const submitForm = () => {
    addPost(postTitle, authorName, postText, slug);
    setPostTitle("");
    setAuthorName("");
    setPostText("");
    setSlug("");
  };

  return (
    <div>
      <Form>
        <InputDiv>
          <ErrorDiv>{form.formState.errors.postTitle?.message}</ErrorDiv>
          <Label>Post Title</Label>
          <Input
            {...form.register("postTitle")}
            type="text"
            name="postTitle"
            placeholder="Post Title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
              setSlug(convertToSlug(e.target.value));
            }}
          />
        </InputDiv>
        <InputDiv>
          <ErrorDiv>{form.formState.errors.authorName?.message}</ErrorDiv>
          <Label>Author Name</Label>
          <Input
            {...form.register("authorName")}
            type="text"
            name="authorName"
            placeholder="Author's Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <ErrorDiv>{form.formState.errors.textArea?.message}</ErrorDiv>
          <Label>Text Area</Label>
          <textarea
            {...form.register("textArea")}
            required
            name="textArea"
            placeholder="#markdown"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </InputDiv>
        <div>
          <Button onClick={form.handleSubmit(submitForm)}>Submit</Button>
        </div>
      </Form>
    </div>
  );
};
