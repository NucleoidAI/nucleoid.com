import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import emojione from "emojione";
import { rainbow as hljs } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Children, createElement } from "react";

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

function Markdown({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: HeadingRenderer,
        h2: HeadingRenderer,
        h3: HeadingRenderer,
        code({ inline, className, children, ...props }) {
          return !inline ? (
            <SyntaxHighlighter
              children={String(children).slice(0, -1)}
              style={hljs}
              PreTag={"div"}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {emojione.shortnameToImage(content)}
    </ReactMarkdown>
  );
}

export default Markdown;
