import { code } from "./code";
import { theme } from "./Theme";
import React, { useState } from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 70vh;
  min-width: 350px;
  background: ${theme.primaryColor};
  border: 3px solid ${theme.secondaryColor};
  padding: 15px 20px;
  font-size: ${theme.fontSize};
  color: #00ff00;
  margin-left: ${theme.marginLeft};
`;

const DivTitle = styled.div`
  font-weight: bold;
`;

const DivTitleBar = styled.div`
  background: ${theme.primaryColor};
  border: 2px solid ${theme.secondaryColor};
  border-radius: 10px 10px 0 0;
  padding: 10px 15px;
  color: ${theme.secondaryColor};
  margin-left: ${theme.marginLeft};
`;

const DivWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  min-height: 450px;
`;

const CHUNK_SIZE = 4;
const FILE = code;
const FILE_SIZE = FILE.length;
const TOTAL_CHUNKS = Math.ceil(FILE_SIZE / CHUNK_SIZE);

export const HackerTyper = () => {
  const [hackerTyper, setHackerTyper] = useState("");
  const [currentChunk, setCurrentChunk] = useState(1);

  const pasteChunk = () => {
    if (currentChunk >= TOTAL_CHUNKS) {
      setHackerTyper("");
      setCurrentChunk(1);
    }

    const offset = (currentChunk - 1) * CHUNK_SIZE;
    const currentFilePart = FILE.slice(offset, offset + CHUNK_SIZE);

    setHackerTyper((p) => "" + p + currentFilePart);
    setCurrentChunk((p) => p + 1);
  };

  const handleKeyPress = (e: React.SyntheticEvent) => {
    e.preventDefault();
    pasteChunk();
  };

  return (
    <DivWindow>
      <DivTitleBar>
        <DivTitle>Hacker Typer - become a hacker</DivTitle>
      </DivTitleBar>
      <TextArea value={hackerTyper} onChange={handleKeyPress} />
    </DivWindow>
  );
};
