import { Stack, Typography, Button } from "@mui/material";

import { Recognition } from "../../model";

export default function RecognitionCard({ recognition }: { recognition: Recognition }) {
  return (
    <Stack spacing={2} alignItems="center">
      <img src={recognition.image} width={100} style={{ margin: 50 }} alt="" />
      <Stack spacing={2} alignItems="center">
        <Typography>{recognition.description}</Typography>
        {recognition.links && (
          <Stack flexWrap="wrap" direction="row" justifyContent="center">
            {recognition.links.map((link, index) => (
              <Button
                key={index}
                variant="outlined"
                color="info"
                sx={{ padding: 2, margin: 1 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="h6">{link.title}</Typography>
              </Button>
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
