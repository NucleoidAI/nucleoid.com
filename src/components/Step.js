import { Box, Typography } from "@mui/material";

function Step({ image, title, description, alt }) {
  return (
    <>
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
        <Box sx={{ marginRight: 3 }}>
          <img src={image} width={150} alt={alt} />
        </Box>
        <Box>
          <Typography fontSize={28}>{title}</Typography>
          <Typography>{description}</Typography>
          <br />
          <br />
        </Box>
      </Box>
    </>
  );
}

export default Step;
