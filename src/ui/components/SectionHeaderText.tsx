import { Stack, Typography } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function SectionHeaderText({ title, subitle }: { title: string; subitle?: string }) {
  return (
    <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce>
      <Stack spacing={1} marginBottom={2}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="subtitle1">{subitle}</Typography>
      </Stack>
    </AnimationOnScroll>
  );
}
