import Dev from "./pages/Dev";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import React from "react";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path={["/home"]} component={Home} />
        <Route path={["/learn"]} component={Learn} />
        <Route path={["/dev"]} component={Dev} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
