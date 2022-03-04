import { Stack } from "@mui/material";

import {
  HeaderSection,
  AboutMeSection,
  ProjectsSection,
  SkillsSection,
  RecognitionSection,
  ExperienceSection,
} from "../sections";
import { NavBar } from "../components";

function Home() {
  return (
    <Stack>
      <NavBar />
      <Stack marginTop={5} spacing={15} paddingBottom={20}>
        <HeaderSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <RecognitionSection />
        <ExperienceSection />
      </Stack>
    </Stack>
  );
}

export default Home;
