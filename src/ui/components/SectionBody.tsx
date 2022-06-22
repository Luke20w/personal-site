import { ReactElement } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function SecionBody({ children }: { children?: ReactElement | ReactElement[] }) {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
      {children}
    </AnimationOnScroll>
  );
}
