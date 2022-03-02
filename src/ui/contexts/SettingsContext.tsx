import PropTypes from "prop-types";
import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import getColorPresets, { colorPresets, defaultPreset } from "../utils/getColorPresets";

// ----------------------------------------------------------------------

export type Settings = {
  onToggleTheme: () => void;
  themeMode: string;
};

const initialState = {
  onToggleTheme: () => {},
  themeMode: "light",
};

const SettingsContext = createContext<Settings>(initialState);

// ----------------------------------------------------------------------

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

function SettingsProvider({ children }: { children: any }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: "light",
  });

  const onToggleTheme = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
