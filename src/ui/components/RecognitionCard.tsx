import { Stack, Box, Typography, Button } from "@mui/material";

import { Recognition } from "../../model";

export default function RecognitionCard({ recognition, ...rest }: { recognition: Recognition; [key: string]: any }) {
  return (
    <Stack spacing={2} {...rest}>
      <Stack spacing={1}>
        <Typography variant="h4">{recognition.title}</Typography>
        <Typography>{recognition.description}</Typography>
      </Stack>
      {recognition.links && (
        <Box display="flex" flexWrap="wrap" flexDirection="row" gap={1}>
          {recognition.links.map((link, index) => (
            <Button
              key={index}
              variant="outlined"
              color="info"
              sx={{ padding: 2 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6">{link.title}</Typography>
            </Button>
          ))}
        </Box>
      )}
      {/* {recognition.image && <img src={recognition.image} style={{ borderRadius: 5, maxWidth: 350, marginBottom: 5 }} />} */}
    </Stack>
  );
}
