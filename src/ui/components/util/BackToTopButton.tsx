import { Typography } from "@mui/material";

export default function BackToTopButton() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Typography variant="subtitle1" onClick={scrollToTop} sx={{ cursor: "pointer", alignSelf: "center" }}>
      👆 Back to the top?
    </Typography>
  );
}
