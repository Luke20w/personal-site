import { Stack } from "@mui/material";

import {
  HeaderSection,
  AboutMeSection,
  ProjectsSection,
  SkillsSection,
  RecognitionSection,
  ContactSection,
} from "../sections";
import { NavBar } from "../components";

function Home() {
  return (
    <Stack>
      <NavBar />
      <Stack marginTop={5} spacing={15} paddingBottom={5}>
        <HeaderSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <RecognitionSection />
        <ContactSection />
      </Stack>
    </Stack>
  );
}

export default Home;
