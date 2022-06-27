import { Icon } from "@iconify/react";
import { Button, Stack } from "@mui/material";

import useSettings from "../hooks/useSettings";
import SocialIconBar from "./SocialIconBar";

export default function IconBar() {
  const { themeMode, onToggleTheme } = useSettings();

  return (
    <Stack direction="row" justifyContent="start" spacing={1} paddingBottom={5}>
      <Button variant="contained" onClick={onToggleTheme}>
        {themeMode === "light" ? (
          <Icon icon="akar-icons:moon-fill" width={22} height={22} />
        ) : (
          <Icon icon="akar-icons:sun-fill" width={22} height={22} />
        )}
      </Button>
      <SocialIconBar />
    </Stack>
  );
}
