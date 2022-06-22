import { Stack, Box, Divider, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";

import { projects, projectsHeader } from "../../content";
import { ProjectCard, SectionBody, SectionContainer, SectionHeaderText } from "../components";

export default function ProjectsSection() {
  // -- Local state
  const [type, setType] = useState<"personal" | "professional">("personal");

  // -- Functions
  function handleGroupingChange(_: React.MouseEvent<HTMLElement, MouseEvent>, value: "personal" | "professional") {
    setType(value);
  }

  // -- Render
  const personalProjectCards = projects
    .filter((project) => project.type === "personal")
    .map((project, index) => <ProjectCard key={index} project={project} />);
  const professionalProjectCards = projects
    .filter((project) => project.type === "professional")
    .map((project, index) => <ProjectCard key={index} project={project} />);

  return (
    <SectionContainer>
      <SectionHeaderText title={projectsHeader.title} subitle={projectsHeader.subtitle} />
      <SectionBody>
        <Stack spacing={2}>
          <Divider />
          <ToggleButtonGroup value={type} exclusive onChange={handleGroupingChange} sx={{ alignSelf: "start" }}>
            <ToggleButton value="personal">Personal</ToggleButton>
            <ToggleButton value="professional">Professional</ToggleButton>
          </ToggleButtonGroup>
          <Box display="flex" flexWrap="wrap" flexDirection="row" gap={4}>
            {type === "personal" ? personalProjectCards : professionalProjectCards}
          </Box>
        </Stack>
      </SectionBody>
    </SectionContainer>
  );
}
