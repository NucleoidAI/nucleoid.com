import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";

import ContextProvider from "./context/context";
import Default from "./layouts/Default";
import Home from "./pages/Home";
import Settings from "./settings";
import context from "./context/context";
import reducer from "./context/reducer";
import theme from "./theme";

function App() {
  if (!Settings.landing()) {
    Settings.landing({ level: 0 });
  }

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
