import { Stack, Typography, Box } from "@mui/material";
import { Project } from "../../model";
import { Skill, SkillLevel } from "../../model/Project";
import { ProjectCard } from "../components";

import { paddingX } from "../theme/layout";

export default function ProjectsSection() {
  const skills = {
    react: new Skill("React", SkillLevel.Advanced, "akar-icons:react-fill", "#1a73e8"),
    node: new Skill("Node", SkillLevel.Advanced, "akar-icons:node-fill", "#8ab437"),
    typescript: new Skill("TypeScript", SkillLevel.Advanced, "cib:typescript", "#007acc"),
    javascript: new Skill("JavaScript", SkillLevel.Advanced, "cib:javascript", "#f0db4f"),
    git: new Skill("Git", SkillLevel.Advanced, "cib:git", "#f05032"),
    aws: new Skill("AWS", SkillLevel.Advanced, "bxl:aws", "#e34f26"),
    reactNative: new Skill("React Native", SkillLevel.Advanced, "akar-icons:react-fill", "#61dafb"),
  };

  const projects = [
    new Project(
      "Project 1",
      "Lorem dolore in fugiat et duis amet consequat amet adipisicing. Do voluptate officia eiusmod sit. Exercitation occaecat ad aliqua sint aliquip consequat qui laboris enim quis aliquip.",
      [skills.react, skills.node, skills.typescript, skills.javascript, skills.git, skills.aws, skills.reactNative]
    ),
  ];

  return (
    <Stack paddingX={paddingX} spacing={2}>
      <Typography variant="h2">Projects</Typography>
      <Typography variant="body1" marginTop={2}>
        Laboris minim id aute elit ea deserunt nulla proident duis laboris. Duis officia labore anim pariatur. Sit
        fugiat ad esse amet laboris culpa non eiusmod dolore. Minim nulla nisi excepteur consequat officia enim deserunt
        dolor veniam quis cupidatat eiusmod anim. Consequat sint quis reprehenderit dolor excepteur tempor excepteur
        mollit qui laboris deserunt occaecat. Minim qui proident officia occaecat non id aliquip velit sint dolor ipsum
        veniam. Veniam labore sint cupidatat labore ea minim elit.
      </Typography>
      <Box display="flex" flexWrap="wrap" flexDirection="row">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Box>
    </Stack>
  );
}
