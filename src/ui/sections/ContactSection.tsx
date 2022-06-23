import { Stack, Typography, Divider, IconButton } from "@mui/material";

import { SectionBody, SectionContainer, SectionHeaderText, SocialIconBar } from "../components";
import { contactHeader, contactOptions } from "../../content";
import { Icon } from "@iconify/react";

export default function ContactSection() {
  // -- Functions
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      <SectionHeaderText title={contactHeader.title} subitle={contactHeader.subtitle} />
      <SectionBody>
        <Stack spacing={10}>
          <Stack spacing={2}>
            <Divider />
            {contactOptions.map((option, index) => (
              <ContactItem key={index} info={option.info} icon={option.icon} />
            ))}
          </Stack>
          <Typography variant="subtitle1" onClick={scrollToTop} sx={{ cursor: "pointer", alignSelf: "center" }}>
            👆 Back to the top?
          </Typography>
          <SocialIconBar />
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
