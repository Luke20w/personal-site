import { Stack, Box, Typography } from "@mui/material";

import { SkillPill } from ".";
import { Project } from "../../model";

export default function ExperienceCard({ project, ...rest }: { project: Project; [key: string]: any }) {
  return (
    <Stack spacing={1} maxWidth={300} {...rest}>
      <Stack>
        <Typography variant="h4">{project.title}</Typography>
        <Typography>{project.description}</Typography>
      </Stack>
      {project.images &&
        project.images.map((image) => <img src={image} style={{ borderRadius: 5, maxWidth: 350, marginBottom: 5 }} />)}
      <Box display="flex" flexWrap="wrap" flexDirection="row" gap={1}>
        {project.skills.map((skill, index) => (
          <SkillPill key={index} skill={skill} />
        ))}
      </Box>
    </Stack>
  );
}
