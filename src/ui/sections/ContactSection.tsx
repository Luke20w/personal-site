import { Stack, Typography, Divider, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

import { ResumeButton, SectionBody, SectionContainer, SectionHeaderText } from "../components";
import { contactHeader, contactOptions } from "../../content";

export default function ContactSection() {
  // -- Functions
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  // -- Components
  function ContactItem({ icon, info }: { icon: string; info: string }) {
    return (
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        sx={{
          "&:hover": {
            "& #copy": {
              opacity: 1,
            },
          },
        }}
      >
        <Icon icon={icon} width={22} height={22} />
        <Typography>{info}</Typography>
        <IconButton id="copy" sx={{ opacity: 0 }} onClick={() => copyToClipboard(info)}>
          <Icon icon="bxs:copy" width={16} height={16} />
        </IconButton>
      </Stack>
    );
  }

  return (
    <SectionContainer>
      <SectionHeaderText title={contactHeader.title} subtitle={contactHeader.subtitle} />
      <SectionBody>
        <Stack spacing={10}>
          <Stack spacing={2}>
            <Divider />
            <ResumeButton />
            {contactOptions.map((option, index) => (
              <ContactItem key={index} info={option.info} icon={option.icon} />
            ))}
          </Stack>
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
