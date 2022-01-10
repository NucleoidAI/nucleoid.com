import "highlight.js/styles/github.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { Children, createElement, useEffect, useState } from "react";

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  const children = Children.toArray(props.children);
  const text = children.reduce(flatten, "");
  const slug = text.replace(/\W/g, "-");
  return createElement("h" + props.level, { id: slug }, props.children);
}

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
      components={{
        h1: HeadingRenderer,
        h2: HeadingRenderer,
        h3: HeadingRenderer,
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

export default Markdown;
