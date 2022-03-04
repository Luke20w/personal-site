import { Stack, Typography, Divider } from "@mui/material";

import { paddingX } from "../theme/layout";
import wave from "../../assets/waves/wave-section-1.png";
import RecognitionCard from "../components/RecognitionCard";
import { recognitions } from "../../content";

export default function RecognitionSection() {
  return (
    <Stack
      paddingX={paddingX}
      paddingY={15}
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "100% 100%",
      }}
      color="white"
      spacing={2}
    >
      <Typography variant="h2">Recognition</Typography>
      <Typography>Sometimes people talk about what I do</Typography>
      <Divider color="white" />
      {recognitions.map((recognition) => (
        <RecognitionCard recognition={recognition} />
      ))}
    </Stack>
  );
}
