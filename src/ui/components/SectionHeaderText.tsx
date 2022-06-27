import { Stack, Typography } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function SectionHeaderText({
  title,
  subtitle,
  center,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce>
      <Stack spacing={1} marginBottom={2} alignItems={center ? "center" : "start"}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Stack>
    </AnimationOnScroll>
  );
}
