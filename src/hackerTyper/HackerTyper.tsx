import "./hackertyper.css";
import Message from "./Components/Message";
import React, { useEffect, useRef, useState } from "react";

const CHARS_PER_STROKES = 5;
const CHARS_TO_DENIED = 300;
const CHARS_TO_SUCCESS = 900;

function HackerTyper() {
  const [sourceCode, setSourceCode] = useState("");
  const [content, setContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messageType, setMessageType] = useState("denied");
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    //@ts-expect-error
    containerRef.current.focus();
    fetch("code.txt")
      .then((res) => res.text())
      .then((text) => setSourceCode(text));
  }, []);

  const runScript = () => {
    if (isLocked) return;
    setCurrentIndex(currentIndex + CHARS_PER_STROKES);
    setContent(sourceCode.substring(0, currentIndex));
    //@ts-expect-error
    paragraphRef.current.scrollIntoView();
    if (currentIndex !== 0 && currentIndex % CHARS_TO_DENIED === 0) {
      setIsLocked(true);
      setMessageType("denied");
    }
    if (currentIndex !== 0 && currentIndex % CHARS_TO_SUCCESS === 0) {
      setIsLocked(true);
      setMessageType("success");
    }
  };
  const removeMessage = () => {
    setIsLocked(false);
  };
  const handleKeyDown = (e: any) => {
    if (e.key !== "Escape") runScript();
    else removeMessage();
  };
  return (
    <>
      <div
        id="container"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={containerRef}
      >
        <div id="source">{content}</div>
        <p ref={paragraphRef}></p>
        {isLocked && <Message type={messageType} />}
      </div>
    </>
  );
}

export default HackerTyper;
