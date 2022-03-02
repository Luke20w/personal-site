import { Icon } from "@iconify/react";
import { Button, IconButton, Stack } from "@mui/material";

import useSettings from "../hooks/useSettings";

export default function NavBar() {
  const { themeMode, onToggleTheme } = useSettings();

  return (
    <Stack direction="row" justifyContent="flex-end" spacing={1} padding={5}>
      <IconButton>
        <Icon icon="akar-icons:github-fill" width={22} height={22} />
      </IconButton>
      <IconButton>
        <Icon icon="akar-icons:linkedin-box-fill" width={22} height={22} />
      </IconButton>
      <IconButton>
        <Icon icon="akar-icons:instagram-fill" width={22} height={22} />
      </IconButton>
      <IconButton>
        <Icon icon="akar-icons:snapchat-fill" width={22} height={22} />
      </IconButton>
      <Button variant="contained" style={{ marginLeft: 20 }} onClick={onToggleTheme}>
        {themeMode === "light" ? (
          <Icon icon="akar-icons:moon-fill" width={22} height={22} />
        ) : (
          <Icon icon="akar-icons:sun-fill" width={22} height={22} />
        )}
      </Button>
    </Stack>
  );
}
