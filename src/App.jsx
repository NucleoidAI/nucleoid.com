import Default from "./layouts/Default";
import Home from "./pages/Home";
import React from "react";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import context from "./context/context"
import reducer from "./context/reducer"
import ContextProvider from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <ContextProvider state={context} reducer={reducer}>
            <Routes>
              <Route path="/" element={<Default />}>
              <Route index element={<Home />} />
              </Route>
            </Routes>
          </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
