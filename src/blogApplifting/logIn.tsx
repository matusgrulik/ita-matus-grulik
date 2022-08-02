import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

const LogInBox = styled.form`
  position: absolute;
  width: 368px;
  height: 333px;
  left: 766px;
  top: 420px;
  background: #ffffff;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.175);
  border-radius: 8px;
`;
const H1 = styled.h1`
  position: absolute;
  width: 81px;
  height: 32px;
  left: 32px;
  top: 32px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #000000;
`;
const EmailInputDiv = styled.div`
  position: absolute;
  width: 304px;
  height: 84px;
  left: calc(50% - 304px / 2);
  top: 88px;
`;
const EmailInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  height: 36px;
  left: 0px;
  right: 0px;
  top: 32px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
`;
const EmailLabel = styled.label`
  position: absolute;
  width: 40px;
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
const PasswordInputDiv = styled.div`
  position: absolute;
  width: 304px;
  height: 84px;
  left: calc(50% - 304px / 2);
  top: 172px;
`;
const PasswordInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  height: 36px;
  left: 0px;
  right: 0px;
  top: 32px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
`;
const PasswordLabel = styled.label`
  position: absolute;
  width: 71px;
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
const LogInButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 4px;
  position: absolute;
  width: 69px;
  height: 36px;
  right: 32px;
  top: 272px;
  background: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;
const LogInP = styled.p`
  width: 45px;
  height: 24px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const ErrorDiv = styled.div`
  position: absolute;
  width: 40px;
  height: 24px;
  left: 0px;
  top: 0px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: red;
`;
const logInSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = useForm({ resolver: yupResolver(logInSchema) });
  const submitForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <LogInBox>
      <H1>Log In</H1>
      <EmailInputDiv>
        <ErrorDiv>{form.formState.errors.email?.message}</ErrorDiv>
        <EmailLabel>Email</EmailLabel>
        <EmailInput
          {...form.register("email")}
          type="email"
          name="email"
          placeholder="me@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></EmailInput>
      </EmailInputDiv>
      <PasswordInputDiv>
        <ErrorDiv>{form.formState.errors.password?.message}</ErrorDiv>
        <PasswordLabel>Password</PasswordLabel>
        <PasswordInput
          {...form.register("password")}
          type="password"
          name="password"
          placeholder="**********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></PasswordInput>
      </PasswordInputDiv>
      <LogInButton onClick={form.handleSubmit(submitForm)}>
        <LogInP>Log In</LogInP>
      </LogInButton>
    </LogInBox>
  );
};
