import { Stack, Typography, Box, Divider } from "@mui/material";
import { projects } from "../../content";
import { ProjectCard } from "../components";

import { paddingX } from "../theme/layout";

export default function ProjectsSection() {
  return (
    <Stack paddingX={paddingX} spacing={2}>
      <Typography variant="h2">Projects</Typography>
      <Typography>The way I do anything best if by diving right in - so projects are my thing</Typography>
      <Divider />
      <Box display="flex" flexWrap="wrap" flexDirection="row" gap={4}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} k />
        ))}
      </Box>
    </Stack>
  );
}
