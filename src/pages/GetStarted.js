import Default from "../layouts/Default";
import Markdown from "../components/Markdown";
// eslint-disable-next-line import/no-webpack-loader-syntax
import getStartedMD from "!!raw-loader!../markdowns/get-started.md";

function GetStarted() {
  return (
    <Default>
      <Markdown content={getStartedMD} />
    </Default>
  );
}

export default GetStarted;
