import { Icon } from "@iconify/react";
import { Button, IconButton, Stack } from "@mui/material";
import { social } from "../../content";

import useSettings from "../hooks/useSettings";
import { paddingX } from "../theme/layout";

export default function IconBar() {
  const { themeMode, onToggleTheme } = useSettings();

  return (
    <Stack direction="row" justifyContent="start" spacing={1} paddingX={paddingX} paddingY={5}>
      <Button variant="contained" onClick={onToggleTheme}>
        {themeMode === "light" ? (
          <Icon icon="akar-icons:moon-fill" width={22} height={22} />
        ) : (
          <Icon icon="akar-icons:sun-fill" width={22} height={22} />
        )}
      </Button>
      {social.map(({ icon, url }) => (
        <IconButton href={url} target="_blank" rel="noopener noreferrer">
          <Icon icon={icon} width={22} height={22} />
        </IconButton>
      ))}
    </Stack>
  );
}
