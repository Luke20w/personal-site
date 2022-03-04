import { Stack, Typography, Box, Divider, ListItem, List } from "@mui/material";
import { experience } from "../../content";
import { ProjectCard } from "../components";
import { paddingX } from "../theme/layout";

export default function ExperienceSection() {
  return (
    <Stack paddingX={paddingX} spacing={2}>
      <Typography variant="h2">Experience</Typography>
      <Divider />
      <Stack spacing={2}>
        {experience.map((experience) => (
          <Stack>
            <List>
              <Typography variant="h4">{experience.company}</Typography>
              <Typography fontStyle="italic">{experience.title}</Typography>
              {experience.points.map((point) => (
                <ListItem>{`• ${point}`}</ListItem>
              ))}
            </List>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
