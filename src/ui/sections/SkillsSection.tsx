import { Stack, Typography, Box, Divider } from "@mui/material";
import { SkillPill } from "../components";

import { paddingX } from "../theme/layout";
import { skills } from "../../content";
import { Proficiency } from "../../model/Skill";

export default function SkillsSection() {
  const colors = ["#14d969", "#ad00ff", "orange"];

  return (
    <Stack paddingX={paddingX} spacing={2}>
      <Typography variant="h2">Skills</Typography>
      <Typography>I've had the opportunity to learn a lot along the way</Typography>
      <Divider />
      <Stack spacing={2}>
        {Object.keys(Proficiency).map((proficiency, index) => (
          <Stack spacing={1}>
            <Typography variant="h5" color={colors[index]}>
              {proficiency}
            </Typography>
            <Box display="flex" flexWrap="wrap" flexDirection="row" gap={1}>
              {Object.values(skills)
                .filter((skill) => skill.proficiency === proficiency)
                .map((skill, index) => (
                  <SkillPill key={index} skill={skill} />
                ))}
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
