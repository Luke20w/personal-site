import { useState } from "react";
import { Stack, Box, Typography, Paper, Button } from "@mui/material";
import Zoom from "react-medium-image-zoom";
import { Icon } from "@iconify/react";

import { SkillPill } from ".";
import { Project } from "../../model";
import { Carousel } from "./util";

export default function ProjectCard({ project }: { project: Project }) {
  // -- Local state
  const [showLongDescription, setShowLongDescription] = useState(false);

  // -- Funtions
  function toggleLongDescription() {
    setShowLongDescription((prev) => !prev);
  }

  // -- Render
  return (
    <Paper sx={{ padding: 3, alignSelf: "start" }} variant="outlined">
      <Stack spacing={2} maxWidth={300}>
        <Stack spacing={1}>
          <Typography variant="h5">{project.title}</Typography>
          <Typography variant="body2">
            {showLongDescription ? project.shortDescription + ". " + project.longDescription : project.shortDescription}
          </Typography>
          {project.longDescription && (
            <Button
              onClick={toggleLongDescription}
              sx={{ color: "text.primary", alignSelf: "start" }}
              startIcon={<Icon icon={showLongDescription ? "eva:chevron-up-outline" : "eva:chevron-down-outline"} />}
            >
              {showLongDescription ? "Read less..." : "Read more..."}
            </Button>
          )}
        </Stack>
        {(project.images || project.videos) && (
          <Carousel
            naturalSlideWidth={100}
            content={[
              ...(project.videos ?? []).map((video) => (
                <video src={video} style={{ width: "100%", borderRadius: 10 }} controls />
              )),
              ...(project.images ?? []).map((image) => (
                <Zoom>
                  <img src={image} style={{ borderRadius: 10 }} alt="" />
                </Zoom>
              )),
            ]}
          />
        )}
        <Box display="flex" flexWrap="wrap" flexDirection="row" gap={1}>
          {project.skills.map((skill, index) => (
            <SkillPill key={index} skill={skill} />
          ))}
        </Box>
      </Stack>
    </Paper>
  );
}
