import React from "react";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import theme from "../theme";
import { ThemeProvider } from "@mui/material";
import Home from "./Home";

function App() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <ThemeProvider theme={theme}>
        <main>
          <Home />
        </main>
      </ThemeProvider>
    </Layout>
  );
}

export default App;
