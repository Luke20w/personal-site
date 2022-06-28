import { Stack } from "@mui/material";
import { SocialIconBar, BackToTopButton } from "../components";

import {
  HeaderSection,
  AboutMeSection,
  ProjectsSection,
  SkillsSection,
  RecognitionSection,
  ContactSection,
} from "../sections";

function Home() {
  return (
    <Stack>
      <Stack spacing={15} paddingTop={10} paddingBottom={5}>
        <HeaderSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <RecognitionSection />
        <ContactSection />
        <Stack spacing={5}>
          <BackToTopButton />
          <SocialIconBar />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
