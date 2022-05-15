import { Stack, Typography } from "@mui/material";
import Typist from "react-typist";

import { paddingX } from "../theme/layout";

import profileImage from "../../assets/images/Profile.jpg";

export default function HeaderSection() {
  return (
    <Stack
      paddingX={paddingX}
      direction={{
        xs: "column",
        lg: "row",
      }}
      spacing={7}
      justifyContent="space-between"
    >
      <Stack spacing={2} width={800}>
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
        </Typography>
        <Typography variant="h4">
          <span>I'm a </span>
          <span style={{ color: "#AD00FF" }}>full-stack software engineer </span>
          <span>and rising 3rd year Computer Engineering student at </span>
          <span style={{ color: "#B3A369" }}>Georgia Tech</span>
        </Typography>
      </Stack>
      <img src={profileImage} alt="" style={{ width: 300, height: 300, borderRadius: "50%" }} />
    </Stack>
  );
}
