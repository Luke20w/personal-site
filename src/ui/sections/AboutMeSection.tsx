import { Stack, Typography, Divider, Button, Link } from "@mui/material";

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
      <SectionHeaderText title={aboutMeHeader.title} subtitle={aboutMeHeader.subtitle} />
      <SectionBody>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Divider color="white" />
            <Typography variant="body1" marginTop={2} style={{ whiteSpace: "pre-line" }}>
              <span>{aboutMeContent.beforeKleo}</span>
              <Link href="https://www.kleolearn.com" target="_blank" sx={{ color: "white", fontWeight: "bold" }}>
                Kleo
              </Link>
              <span>{aboutMeContent.afterKleo}</span>
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
