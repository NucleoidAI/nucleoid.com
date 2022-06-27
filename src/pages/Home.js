import Bulletin from "../widgets/Bulletin";
import Columns from "../widgets/Columns";
import Features from "../widgets/Features";
import GitHubIcon from "@mui/icons-material/GitHub";
import HelloWorld from "../widgets/HelloWorld";
import Install from "../widgets/Install";
import Prompt from "../widgets/Prompt";
import Space from "../components/Space";
import Steps from "../widgets/Steps";
import gtag from "../gtag";
import { useEffect } from "react";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";

function Home() {
  useEffect(() => {
    gtag("event", "page_view", {
      page_title: "Home",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  });

  return (
    <>
      <Prompt />
      <Container>
        <Grid container spacing={2}>
          <Space height={35} />
          <Install />
          <Space height={35} />
          <Columns />
          <Space />
          <Grid container item xs={12} justifyContent={"center"}>
            <Typography variant={"h2"}>How it works</Typography>
          </Grid>
          <Space height={25} />
          <Steps />
          <Space mobile={false} />
          <HelloWorld />
          <Space />
          <Features />
        </Grid>
        <Space />
        <Grid container item xs={12} justifyContent={"center"}>
          <Button
            startIcon={<GitHubIcon />}
            size={"large"}
            variant={"outlined"}
            sx={{
              p: 2,
            }}
            onClick={() =>
              window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
            }
          >
            Star us on GitHub
          </Button>
        </Grid>
        <Space />
        <Divider />
        <Space />
        <Bulletin />
        <Space />
      </Container>
    </>
  );
}

export default Home;
