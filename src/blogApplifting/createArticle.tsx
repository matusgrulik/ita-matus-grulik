import * as yup from "yup";
import { BlogContext } from "./blogContext";
import { convertToSlug } from "./utils";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

const CreateArticleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;
  position: absolute;
  width: 494px;
  height: 48px;
  left: 372px;
  top: 304px;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;
  position: absolute;
  width: 494px;
  height: 48px;
  left: 0px;
  top: 54px;
`;

const H1 = styled.h1`
  width: 335px;
  height: 48px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #212529;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const PublishArticleButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 4px;
  width: 127px;
  height: 36px;
  background: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
  &:hover {
    cursor: pointer;
  }
`;
const PublishArticleP = styled.p`
  width: 103px;
  height: 24px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
const InputTitleDiv = styled.div`
  position: absolute;
  width: 760px;
  height: 94px;
  left: 0px;
  top: 0px;
`;

const InputTitleLabel = styled.label`
  position: absolute;
  width: 80px;
  height: 24px;
  left: 0px;
  top: 0px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
const InputTitle = styled.input`
  position: absolute;
  height: 46px;
  left: 0px;
  right: 0px;
  top: 32px;
  background: #ffffff;
  border: 2px solid #dfdfdf;
  border-radius: 4px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #6c757d;
  padding-left: 20px;
`;
const Form = styled.form`
  position: absolute;
  width: 760px;
  height: 1238px;
  left: 0px;
  top: 192px;
`;
const InputAuthorDiv = styled.div`
  position: absolute;
  width: 760px;
  height: 94px;
  left: 0px;
  top: 0px;
`;
const InputAuthor = styled.input`
  position: absolute;
  height: 46px;
  left: 0px;
  right: 0px;
  top: 162px;
  background: #ffffff;
  border: 2px solid #dfdfdf;
  border-radius: 4px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #6c757d;
  padding-left: 20px;
`;
const InputAuthorLabel = styled.label`
  position: absolute;
  width: 112px;
  height: 24px;
  left: 0px;
  top: 120px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ContentDiv = styled.div`
  position: absolute;
  width: 760px;
  height: 1018px;
  left: 0px;
  top: 340px;
`;
const ContentLabel = styled.label`
  position: absolute;
  width: 58px;
  height: 24px;
  left: 0px;
  top: 0px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
const ContentTextArea = styled.textarea`
  position: absolute;
  height: 686px;
  left: 0px;
  right: 0px;
  top: 32px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
`;
const DescriptionDiv = styled.div`
  position: absolute;
  width: 760px;
  height: 1018px;
  left: 0px;
  top: 240px;
`;
const DescriptionLabel = styled.label`
  position: absolute;
  width: 58px;
  height: 24px;
  left: 0px;
  top: 0px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
const DescriptionInput = styled.input`
  position: absolute;
  height: 46px;
  left: 0px;
  right: 0px;
  top: 30px;
  background: #ffffff;
  border: 2px solid #dfdfdf;
  border-radius: 4px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #6c757d;
  padding-left: 20px;
`;

const schema = yup.object().shape({
  articleTitle: yup.string().required("Article Title is required"),
  articleAuthor: yup.string().required("Your name is required"),
  articleDescription: yup.string().required("Description is required"),
  textArea: yup.string().required("Content is required"),
});

export const NewArticle = () => {
  const { postArticle } = useContext(BlogContext);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  const [articleText, setArticleText] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [slug, setSlug] = useState("");

  const form = useForm({ resolver: yupResolver(schema) });
  const submitForm = () => {
    postArticle(
      articleTitle,
      articleAuthor,
      articleDescription,
      articleText,
      slug
    );
    setArticleAuthor("");
    setArticleTitle("");
    setArticleDescription("");
    setArticleText("");
    setSlug("");
  };
  return (
    <CreateArticleDiv>
      <HeaderDiv>
        <H1>Create new article</H1>
        <PublishArticleButton onClick={form.handleSubmit(submitForm)}>
          <PublishArticleP>Publish Article</PublishArticleP>
        </PublishArticleButton>
      </HeaderDiv>
      <Form>
        <InputTitleDiv>
          <InputTitleLabel>Article Title</InputTitleLabel>
          <InputTitle
            autoFocus
            {...form.register("articleTitle")}
            type="text"
            name="articleTitle"
            placeholder="Put your title here"
            value={articleTitle}
            onChange={(e) => {
              setArticleTitle(e.target.value);
              setSlug(convertToSlug(e.target.value));
            }}
          />
        </InputTitleDiv>
        <InputAuthorDiv>
          <InputAuthorLabel>Author Name</InputAuthorLabel>
          <InputAuthor
            {...form.register("articleAuthor")}
            type="text"
            name="articleAuthor"
            placeholder="What's your nickname?"
            value={articleAuthor}
            onChange={(e) => {
              setArticleAuthor(e.target.value);
            }}
          />
        </InputAuthorDiv>
        <DescriptionDiv>
          <DescriptionLabel>Description</DescriptionLabel>
          <DescriptionInput
            {...form.register("articleDescription")}
            type="text"
            name="articleDescription"
            placeholder="Type there some short description about your article"
            value={articleDescription}
            onChange={(e) => {
              setArticleDescription(e.target.value);
            }}
          />
        </DescriptionDiv>
        <ContentDiv>
          <ContentLabel>Content</ContentLabel>
          <ContentTextArea
            {...form.register("textArea")}
            name="textArea"
            placeholder="Supports markdown. Yay!"
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
          ></ContentTextArea>
        </ContentDiv>
      </Form>
    </CreateArticleDiv>
  );
};
