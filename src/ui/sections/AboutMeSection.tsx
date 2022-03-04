import { Stack, Typography, Divider } from "@mui/material";

import { paddingX } from "../theme/layout";
import wave from "../../assets/waves/wave-section-1.png";

export default function AboutMeSection() {
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
      <Typography variant="h2">About Me</Typography>
      <Divider color="white" />
      <Typography variant="body1" marginTop={2}>
        Laboris minim id aute elit ea deserunt nulla proident duis laboris. Duis officia labore anim pariatur. Sit
        fugiat ad esse amet laboris culpa non eiusmod dolore. Minim nulla nisi excepteur consequat officia enim deserunt
        dolor veniam quis cupidatat eiusmod anim. Consequat sint quis reprehenderit dolor excepteur tempor excepteur
        mollit qui laboris deserunt occaecat. Minim qui proident officia occaecat non id aliquip velit sint dolor ipsum
        veniam. Veniam labore sint cupidatat labore ea minim elit.
      </Typography>
    </Stack>
  );
}
