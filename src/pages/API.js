import { Container } from "@mui/material";
import Markdown from "../components/Markdown";

// eslint-disable-next-line import/no-webpack-loader-syntax
import apiMD from "!!raw-loader!../markdowns/api.md";

function API() {
  return (
    <Container>
      <Markdown content={apiMD} />
    </Container>
  );
}

export default API;
