import { ReactElement } from "react";
import { Box } from "@mui/material";

import { paddingX } from "../theme/layout";
import SectionBackground from "./SectionBackground";

export default function SectionContainer({
  backgroundImage,
  children,
  paddingY = 20,
}: {
  backgroundImage?: string;
  children?: ReactElement | ReactElement[];
  paddingY?: number;
}) {
  const backgroundContainerStyle = {
    position: "relative",
    paddingY: paddingY,
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
      <Box sx={{ maxWidth: 1200, width: "100%" }}>{children}</Box>
    </Box>
  );
}
