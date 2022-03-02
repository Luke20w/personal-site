import { Stack, Typography } from "@mui/material";
import Typist from "react-typist";

import { paddingX } from "../theme/layout";

export default function HeaderSection() {
  return (
    <Stack paddingX={paddingX} marginTop={5} spacing={2} width="50%">
      <Typography variant="h1">
        <Typist
          cursor={{
            show: true,
            blink: true,
            element: "|",
            hideWhenDone: true,
            hideWhenDoneDelay: 1000,
          }}
        >
          <span>Hi, I'm Luke,</span>
          <div />
          <Typist.Delay ms={1000} />
          <span>Luke Weidner</span>
        </Typist>
      </Typography>{" "}
      <Typography variant="h4">
        <span>I'm a </span>
        <span style={{ color: "#AD00FF" }}>full-stack software engineer </span>
        <span>and rising 3rd year Computer Engineering student at </span>
        <span style={{ color: "#B3A369" }}>Georgia Tech</span>
      </Typography>
    </Stack>
  );
}
