import { ReactElement } from "react";
import { Stack, Box, IconButton } from "@mui/material";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from "pure-react-carousel";
import { Icon } from "@iconify/react";

export default function Carousel({
  naturalSlideWidth,
  content,
}: {
  naturalSlideWidth: number;
  content: ReactElement[];
}) {
  return (
    <CarouselProvider
      naturalSlideWidth={naturalSlideWidth}
      naturalSlideHeight={0}
      isIntrinsicHeight
      totalSlides={content.length}
    >
      <div style={{ position: "relative", alignItems: "center", justifyContent: "center" }}>
        <Stack spacing={1}>
          <Slider>
            {content.map((component, index) => (
              <Slide key={index} index={0}>
                {component}
              </Slide>
            ))}
          </Slider>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <ButtonBack style={{ background: "none", border: "none" }}>
              <IconButton>
                <Icon
                  icon="eva:arrow-ios-back-outline"
                  style={{ cursor: "pointer", color: "text.primary" }}
                  width={22}
                  height={22}
                />
              </IconButton>
            </ButtonBack>
            <DotGroup renderDots={RenderDotGroup} />
            <ButtonNext style={{ background: "none", border: "none" }}>
              <IconButton>
                <Icon
                  icon="eva:arrow-ios-forward-outline"
                  style={{ cursor: "pointer", color: "text.primary" }}
                  width={22}
                  height={22}
                />
              </IconButton>
            </ButtonNext>
          </Stack>
        </Stack>
      </div>
    </CarouselProvider>
  );
}

function RenderDotGroup({ currentSlide, totalSlides }: { currentSlide?: number; totalSlides?: number }) {
  return (
    <Stack spacing={0.5} direction="row" justifyContent="center">
      {new Array(totalSlides).fill(0).map((_, index) => (
        <RenderDot key={index} index={index} selected={index === currentSlide} />
      ))}
    </Stack>
  );
}

function RenderDot({ index, selected }: { index: number; selected: boolean }) {
  return (
    <Dot slide={index} style={{ background: "none", border: "none" }}>
      <Box
        sx={{
          width: 8,
          height: 8,
          backgroundColor: selected ? "text.primary" : "action.disabledBackground",
          borderRadius: 4,
        }}
      />
    </Dot>
  );
}
