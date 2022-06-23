import { Stack, Divider } from "@mui/material";

import wave from "../../assets/waves/wave-section-2.png";
import { recognitionHeader, recognitions } from "../../content";
import { SectionBody, SectionHeaderText, RecognitionCard, SectionContainer } from "../components";

export default function RecognitionSection() {
  return (
    <SectionContainer backgroundImage={wave}>
      <SectionHeaderText title={recognitionHeader.title} subitle={recognitionHeader.subtitle} center />
      <SectionBody>
        <Stack spacing={2}>
          <Divider color="white" />
          {recognitions.map((recognition, index) => (
            <RecognitionCard key={index} recognition={recognition} />
          ))}
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
