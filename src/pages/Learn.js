import Default from "../layouts/Default";
import ReactMarkdown from "react-markdown";
import learnMD from "../markdowns/learn.md";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

function Learn() {
  const [markdown, setMarkdown] = useState();

  useEffect(() => {
    fetch(learnMD)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <Default>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </Default>
  );
}

export default Learn;
