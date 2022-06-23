import { Button } from "@mui/material";
import { Icon } from "@iconify/react";

export default function ResumeButton() {
  // -- Functions
  function openResume() {
    window.open("/Luke Weidner Resume.pdf", "_blank");
  }

  // -- Render
  return (
    <Button
      onClick={openResume}
      variant="contained"
      sx={{ alignSelf: "start" }}
      startIcon={<Icon icon="jam:newspaper-f" />}
    >
      My resume
    </Button>
  );
}
