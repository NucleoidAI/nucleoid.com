import MarkDown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ className, children }) => {
  let lang = "javascript"; // default monospaced text
  if (className && className.startsWith("lang-")) {
    lang = className.replace("lang-", "");
  }
  return (
    <SyntaxHighlighter language={lang} style={rainbow}>
      {children}
    </SyntaxHighlighter>
  );
};

const PreBlock = ({ children, ...rest }) => {
  if ("type" in children && children["type"] === "code") {
    return CodeBlock(children["props"]);
  }
  return <pre {...rest}>{children}</pre>;
};

const MarkDownComponent = (props) => {
  const { content } = props;

  return (
    <MarkDown
      options={{
        overrides: {
          pre: PreBlock,
        },
      }}
    >
      {content}
    </MarkDown>
  );
};

export default MarkDownComponent;
