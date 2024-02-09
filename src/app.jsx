/* eslint-disable perfectionist/sort-imports */
import "src/global.css";

import { SettingsDrawer, SettingsProvider } from "src/components/settings";

import { LocalizationProvider } from "src/locales";
import { MotionLazy } from "src/components/animate/motion-lazy";
import ProgressBar from "src/components/progress-bar";
import Router from "src/routes";
import ThemeProvider from "src/theme";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <LocalizationProvider>
      <SettingsProvider
        defaultSettings={{
          themeMode: "dark", // 'light' | 'dark'
          themeDirection: "ltr", //  'rtl' | 'ltr'
          themeColorPresets: "preset02", // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
        }}
      >
        <ThemeProvider>
          <MotionLazy>
            <ProgressBar />
            <SettingsDrawer />
            <Router />
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
  );
}
