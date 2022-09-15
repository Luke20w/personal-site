import { Icon } from "@iconify/react";
import { Divider, Stack, Typography } from "@mui/material";

import { contactHeader, contactOptions } from "../../content";
import { ResumeButton, SectionBody, SectionContainer, SectionHeaderText } from "../components";

export default function ContactSection() {
  // -- Functions
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  // -- Components
  function ContactItem({ icon, info }: { icon: string; info: string }) {
    return (
      <Stack spacing={1} direction="row" alignItems="center">
        <Icon icon={icon} width={22} height={22} />
        <Typography>{info}</Typography>
      </Stack>
    );
  }

  return (
    <SectionContainer>
      <SectionHeaderText title={contactHeader.title} subtitle={contactHeader.subtitle} center />
      <SectionBody>
        <Stack spacing={3}>
          <Divider />
          <Stack spacing={3} alignItems="center">
            {contactOptions.map((option, index) => (
              <ContactItem key={index} info={option.info} icon={option.icon} />
            ))}
            <ResumeButton />
          </Stack>
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
