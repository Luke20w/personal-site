import { ReactElement } from "react";
import { Box } from "@mui/material";

import { paddingX } from "../theme/layout";
import SectionBackground from "./SectionBackground";

export default function SectionContainer({
  backgroundImage,
  children,
}: {
  backgroundImage?: string;
  children?: ReactElement | ReactElement[];
}) {
  const backgroundContainerStyle = {
    position: "relative",
    paddingY: 20,
  };

  return (
    <Box
      paddingX={paddingX}
      color={backgroundImage ? "white" : "text.primary"}
      overflow="hidden"
      sx={{
        display: "flex",
        justifyContent: "center",
        ...(backgroundImage ? backgroundContainerStyle : {}),
      }}
    >
      {backgroundImage && <SectionBackground image={backgroundImage} />}
      <Box sx={{ maxWidth: 1200 }}>{children}</Box>
    </Box>
  );
}
