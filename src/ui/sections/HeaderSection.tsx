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
      spacing={10}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack spacing={2} maxWidth={800}>
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
            <span>Luke Skywalker</span>
            <Typist.Backspace count={9} delay={50} />
            <span>Weidner</span>
          </Typist>
        </Typography>
        <Typography variant="h4">
          <span>I'm a </span>
          <span style={{ color: "#24BAFF" }}>full-stack software engineer </span>
          <span>and rising 3rd year Computer Engineering student at </span>
          <span style={{ color: "#BDB07E" }}>Georgia Tech</span>
        </Typography>
      </Stack>
      <img src={profileImage} alt="" style={{ width: 300, height: 300, borderRadius: "50%" }} />
    </Stack>
  );
}
