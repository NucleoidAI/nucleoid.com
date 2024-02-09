import { Box, Typography } from "@mui/material";

function Column({ image, title, description, alt }) {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img src={image} width={100} alt={alt} />
        <br />
        <Typography variant={"h4"}>{title}</Typography>
        <br />
        <Typography>{description}</Typography>
      </Box>
    </>
  );
}

export default Column;
