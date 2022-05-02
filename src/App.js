import API from "./pages/API";
import Default from "./layouts/Default";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import React from "react";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  if (window.location.pathname === "/survey") {
    window.location.href = "https://bit.ly/nuc-survey";
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
            <Route path={"/get-started"} element={<GetStarted />} />
            <Route path={"/learn"} element={<Learn />} />
            <Route path={"/api"} element={<API />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
