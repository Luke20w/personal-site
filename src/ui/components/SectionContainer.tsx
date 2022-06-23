import { ReactElement } from "react";
import { Stack } from "@mui/material";

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
    <Stack
      paddingX={paddingX}
      color={backgroundImage ? "white" : "text.primary"}
      overflow="hidden"
      sx={backgroundImage ? backgroundContainerStyle : {}}
    >
      {backgroundImage && <SectionBackground image={backgroundImage} />}
      {children}
    </Stack>
  );
}
