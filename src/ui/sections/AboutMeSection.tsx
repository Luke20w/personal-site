import { Stack, Typography, Divider } from "@mui/material";

import { SectionBody, SectionContainer, SectionHeaderText } from "../components";
import { aboutMeContent, aboutMeHeader } from "../../content";

import wave from "../../assets/waves/wave-section-1.png";

export default function AboutMeSection() {
  return (
    <SectionContainer backgroundImage={wave}>
      <SectionHeaderText title={aboutMeHeader.title} subitle={aboutMeHeader.subtitle} />
      <SectionBody>
        <Stack spacing={2}>
          <Divider color="white" />
          <Typography variant="body1" marginTop={2} style={{ whiteSpace: "pre-line" }}>
            {aboutMeContent}
          </Typography>
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
