import Dev from "./pages/Dev";
import Home from "./pages/Home";
import React from "react";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path={["/"]} component={Home} />
        <Route path={["/dev"]} component={Dev} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
