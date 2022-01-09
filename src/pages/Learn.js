import Default from "../layouts/Default";
import Markdown from "../components/Markdown";
import learnMD from "../markdowns/learn.md";

function Learn() {
  return (
    <Default>
      <Markdown path={learnMD} />
    </Default>
  );
}

export default Learn;
