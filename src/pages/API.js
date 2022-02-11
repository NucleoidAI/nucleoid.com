import Default from "../layouts/Default";
import Markdown from "../components/Markdown";
import apiMD from "../markdowns/api.md";

function API() {
  return (
    <Default>
      <Markdown path={apiMD} />
    </Default>
  );
}

export default API;
