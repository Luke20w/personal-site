import { Stack, Typography, Box, Divider, ToggleButtonGroup, ToggleButton } from "@mui/material";

import { SectionBody, SectionContainer, SectionHeaderText, SkillPill } from "../components";
import { skills, skillsHeader } from "../../content";
import { Category, Proficiency } from "../../model/Skill";
import { useState } from "react";

export default function SkillsSection() {
  // -- Constants
  const COLORS = ["#14d969", "#ad00ff", "orange"];

  // -- Local state
  const [grouping, setGrouping] = useState<"proficiency" | "category">("proficiency");

  // -- Functions
  function handleGroupingChange(_: React.MouseEvent<HTMLElement, MouseEvent>, value: "proficiency" | "category") {
    setGrouping(value);
  }

  // -- Render
  const groupingType = grouping === "proficiency" ? Proficiency : Category;
  return (
    <SectionContainer>
      <SectionHeaderText title={skillsHeader.title} subtitle={skillsHeader.subtitle} />
      <SectionBody>
        <Stack spacing={2}>
          <Divider />
          <Stack spacing={3}>
            <ToggleButtonGroup value={grouping} exclusive onChange={handleGroupingChange} sx={{ alignSelf: "start" }}>
              <ToggleButton value="proficiency">Group by proficiency</ToggleButton>
              <ToggleButton value="category">Group by field</ToggleButton>
            </ToggleButtonGroup>
            <Stack spacing={2}>
              {Object.keys(groupingType).map((value, index) => (
                <Stack key={index} spacing={1}>
                  <Typography variant="h5" color={COLORS[index]}>
                    {value}
                  </Typography>
                  <Box display="flex" flexWrap="wrap" flexDirection="row" gap={1}>
                    {Object.values(skills)
                      .filter((skill) => skill[grouping] === value)
                      .map((skill, index) => (
                        <SkillPill key={index} skill={skill} />
                      ))}
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
