import { Stack } from "@mui/material";

import { HeaderSection, AboutMeSection, ProjectsSection } from "../sections";
import { NavBar } from "../components";

function Home() {
  return (
    <Stack>
      <NavBar />
      <Stack spacing={15} paddingBottom={20}>
        <HeaderSection />
        <AboutMeSection />
        <ProjectsSection />
      </Stack>
    </Stack>
  );
}

export default Home;
