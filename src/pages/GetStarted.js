import Default from "../layouts/Default";
import Markdown from "../components/Markdown";
import getStartedMD from "../markdowns/get-started.md";

function GetStarted() {
  return (
    <Default>
      <Markdown path={getStartedMD} />
    </Default>
  );
}

export default GetStarted;
