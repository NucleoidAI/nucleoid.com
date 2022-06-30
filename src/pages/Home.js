import Bulletin from "../widgets/Bulletin";
import CleanCode from "../widgets/CleanCode";
import Columns from "../widgets/Columns";
import Features from "../widgets/Features";
import HelloWorld from "../widgets/HelloWorld";
import Install from "../widgets/Install";
import Prompt from "../widgets/Prompt";
import Rocket from "../widgets/Rocket";
import Space from "../components/Space";
import Steps from "../widgets/Steps";
import gtag from "../gtag";
import { useEffect } from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";

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
          <Space height={30} />
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
          <CleanCode />
          <Space />
          <Features />
        </Grid>
        <Space />
        <Rocket />
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
