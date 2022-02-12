import Default from "../layouts/Default";
import Markdown from "../components/Markdown";
// eslint-disable-next-line import/no-webpack-loader-syntax
import apiMD from "!!raw-loader!../markdowns/api.md";

function API() {
  return (
    <Default>
      <Markdown content={apiMD} />
    </Default>
  );
}

export default API;
