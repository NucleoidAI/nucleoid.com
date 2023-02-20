import Markdown from "../components/Markdown";
import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const helloWorldMD = `
\`\`\`javascript
class Item {
  constructor(name, barcode) {
    this.name = name;
    this.barcode = barcode;
  }
}

// 👇 Only needed a business logic and 💖
app.post("/items", (req) => {
  const name = req.body.name;
  const barcode = req.body.barcode;
  
  const check = Item.find(i => i.barcode === barcode);

  if(check) {
    throw "DUPLICATE_BARCODE";
  }

  return new Item(name, barcode);
});
\`\`\`
`;

function HelloWorld() {
  return (
    <>
      <Grid item xs={12} lg={6} sx={{ padding: { lg: 5 } }}>
        <Typography fontSize={42}>Hello World&nbsp;&#9889;</Typography>
        <Typography fontSize={20}>
          ChatGPT: Create an item with given name and barcode, but the barcode
          must be unique...&nbsp;
          <span style={{ background: "#3f3f3f" }}>&nbsp;</span>
        </Typography>
        <Markdown content={helloWorldMD} />
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={6}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography fontSize={22}>
          &#128077; This is pretty much it, you successfully saved your object
          with the business logic without installing &nbsp;
          <u>external database</u> or anything else!
        </Typography>
        <br />
        <Grid container item justifyContent={"center"}>
          <Button
            size={"large"}
            onClick={() => window.location.assign("/docs/")}
          >
            Learn more
          </Button>
        </Grid>
        <br />
        <Paper sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"https://cdn.nucleoid.com/media/typescript.png"}
              alt={"TypeScript"}
              width={25}
            />
            <Typography sx={{ marginLeft: 1 }}>
              &nbsp;TypeScript support coming soon..
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default HelloWorld;
