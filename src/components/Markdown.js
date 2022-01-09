import "highlight.js/styles/github.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

function Markdown({ path }) {
  const [text, setText] = useState();

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => {
        setText(text);
      });
  }, [path]);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
    >
      {text}
    </ReactMarkdown>
  );
}

export default Markdown;
