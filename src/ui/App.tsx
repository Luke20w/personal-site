import ThemeProvider from "./theme";

import Home from "./pages/Home";
import { SettingsProvider } from "./contexts/SettingsContext";

export default function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </SettingsProvider>
  );
}
