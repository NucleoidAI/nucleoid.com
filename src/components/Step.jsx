/* eslint-disable */
import { Box, Typography } from "@mui/material";

function Step({ image, bullet, title, description, alt }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        maxWidth: 750,
        margin: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ mr: 5, pt: 3 }}>
        <img src={image} width={110} alt={alt} />
      </Box>
      <Box sx={{ maxWidth: 500 }}>
        <Box flex flexDirection="row">
          <Typography display="inline" fontSize={24}>
            {bullet}
          </Typography>
          &nbsp;
          <Typography display="inline" fontSize={28}>
            {title}
          </Typography>
        </Box>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}

export default Step;
