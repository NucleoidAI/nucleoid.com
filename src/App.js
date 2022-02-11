import API from "./pages/API";
import Dev from "./pages/Dev";
import GetStarted from "./pages/GetStarted";
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
        <Route path={["/get-started"]} component={GetStarted} />
        <Route path={["/learn"]} component={Learn} />
        <Route path={["/api"]} component={API} />
        <Route path={["/dev"]} component={Dev} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
