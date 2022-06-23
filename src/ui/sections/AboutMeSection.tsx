import { Stack, Typography, Divider, Button } from "@mui/material";

import { SectionBody, SectionContainer, SectionHeaderText } from "../components";
import { aboutMeContent, aboutMeHeader } from "../../content";

import wave from "../../assets/waves/wave-section-1.png";

export default function AboutMeSection() {
  // -- Functions
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  // -- Render
  return (
    <SectionContainer backgroundImage={wave}>
      <SectionHeaderText title={aboutMeHeader.title} subitle={aboutMeHeader.subtitle} />
      <SectionBody>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Divider color="white" />
            <Typography variant="body1" marginTop={2} style={{ whiteSpace: "pre-line" }}>
              {aboutMeContent}
            </Typography>
          </Stack>
          <Typography variant="subtitle1" onClick={scrollToBottom} sx={{ cursor: "pointer" }}>
            🤝 Reach out
          </Typography>
          <Button></Button>
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
