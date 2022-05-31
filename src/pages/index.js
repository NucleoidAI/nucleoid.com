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
      title={`${siteConfig.title} - Low-code Framework for Node.js`}
      description="Nucleoid is an open source (Apache 2.0), low-code framework for Node.js that AI-powered runtime creates fully working application with API endpoints based on business logic in vanilla JavaScript and built-in datastore."
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
