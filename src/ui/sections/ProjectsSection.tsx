import { Stack, Box, Divider } from "@mui/material";

import { projects, projectsHeader } from "../../content";
import { ProjectCard, SectionBody, SectionContainer, SectionHeaderText } from "../components";

export default function ProjectsSection() {
  // -- Render
  return (
    <SectionContainer>
      <SectionHeaderText title={projectsHeader.title} subitle={projectsHeader.subtitle} />
      <SectionBody>
        <Stack spacing={2}>
          <Divider />
          <Box display="flex" flexWrap="wrap" flexDirection="row" gap={4}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Box>
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
