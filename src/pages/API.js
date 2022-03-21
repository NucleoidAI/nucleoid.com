import { Container } from "@mui/material";
import Markdown from "../components/Markdown";
// eslint-disable-next-line import/no-webpack-loader-syntax
import apiMD from "!!raw-loader!../markdowns/api.md";
import gtag from "../gtag";

function API() {
  gtag("event", "page_view", {
    page_title: "API",
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
  return (
    <Container>
      <Markdown content={apiMD} />
    </Container>
  );
}

export default API;
