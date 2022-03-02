import { Stack, Box, Typography, Chip } from "@mui/material";
import { Icon } from "@iconify/react";

import { Project } from "../../model";
import { Skill } from "../../model/Project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Stack maxWidth={500}>
      <Typography variant="h4">{project.title}</Typography>
      <Typography>{project.description}</Typography>
      <Box marginTop={2} display="flex" flexWrap="wrap" flexDirection="row" gap={1}>
        {project.skills.map((skill) => (
          <SkillPill skill={skill} />
        ))}
      </Box>
    </Stack>
  );
}

function SkillPill({ skill }: { skill: Skill }) {
  return <Chip style={{ paddingLeft: 5 }} label={skill.name} icon={<Icon icon={skill.icon} />} />;
}
