import API from "./pages/API";
import Default from "./layouts/Default";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import React from "react";
import Survey from "./pages/Survey";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
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
            <Route path={"/community"} element={<Survey />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
