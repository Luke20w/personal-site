import { Icon } from "@iconify/react";
import { Button } from "@mui/material";

export default function ResumeButton() {
  // -- Functions
  function openResume() {
    window.open("/Luke Weidner Resume.pdf", "_blank");
  }

  // -- Render
  return (
    <Button onClick={openResume} variant="contained" startIcon={<Icon icon="jam:newspaper-f" />}>
      My resume
    </Button>
  );
}
