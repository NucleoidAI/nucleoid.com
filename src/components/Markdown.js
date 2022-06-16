import ReactMarkdown from "react-markdown";
import emojione from "emojione";

function Markdown({ content }) {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children, ...props }) {
          return (
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
