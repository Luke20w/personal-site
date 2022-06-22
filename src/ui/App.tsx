import "animate.css/animate.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "react-medium-image-zoom/dist/styles.css";

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
