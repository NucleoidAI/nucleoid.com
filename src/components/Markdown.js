import "highlight.js/styles/github.css";
import ReactMarkdown from "react-markdown";
import emojione from "emojione";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
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
        const emojified = emojione.shortnameToImage(text);
        setText(emojified);
      });
  }, [path]);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
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
