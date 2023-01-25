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
      <Grid
        container
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant={"h4"} textAlign={"center"} sx={{ m: 2 }}>
            OpenAPI Integration
            <br />
            with Nucleoid IDE
            <br />
            <Button
              size={"large"}
              variant={"outlined"}
              sx={{
                m: 3,
                px: 2,
                py: 1,
                textTransform: "none",
              }}
              onClick={() => window.open("https://nucleoid.com/ide/", "_blank")}
            >
              Go to Nucleoid IDE
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{
                display: "block",
                width: "100%",
                maxWidth: 600,
                height: "11px",
                borderRadius: "3px 3px 0px 0px",
              }}
              src={"https://cdn.nucleoid.com/media/frame.png"}
              alt={"Frame"}
            />
          </Box>
          <img
            src={"https://cdn.nucleoid.com/media/screenshot-1.png"}
            style={{
              display: "block",
              width: "100%",
              maxWidth: 600,
              borderColor: "gray",
              borderStyle: "solid",
              borderWidth: "0px 1px 1px 2px",
              background: "white",
            }}
            alt={"Screenshot"}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default HelloWorld;
