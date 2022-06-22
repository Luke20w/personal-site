import { Icon } from "@iconify/react";
import { IconButton, Stack } from "@mui/material";
import { social } from "../../content";

export default function SocialIconBar() {
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      {social.map(({ icon, url }, index) => (
        <IconButton key={index} href={url} target="_blank" rel="noopener noreferrer">
          <Icon icon={icon} width={22} height={22} />
        </IconButton>
      ))}
    </Stack>
  );
}
