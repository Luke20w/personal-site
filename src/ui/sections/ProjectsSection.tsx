import { Stack, Divider, Grid } from "@mui/material";

import { projects, projectsHeader } from "../../content";
import { ProjectCard, SectionBody, SectionContainer, SectionHeaderText } from "../components";

export default function ProjectsSection() {
  // -- Render
  return (
    <SectionContainer>
      <SectionHeaderText title={projectsHeader.title} subtitle={projectsHeader.subtitle} />
      <SectionBody>
        <Stack spacing={2}>
          <Divider />
          <Grid container gap={2} sx={{ padding: -2 }}>
            {projects.map((project, index) => (
              <Grid key={index} item>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
