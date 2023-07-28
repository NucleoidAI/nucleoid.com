import { Container, Divider, Grid, Typography } from "@mui/material";

import Bulletin from "../widgets/Bulletin";
import CleanCode from "../widgets/CleanCode";
import Columns from "../widgets/Columns";
import Features from "../widgets/Features";
import HelloWorld from "../widgets/HelloWorld";
import Install from "../widgets/Install";
import Onboard from "../components/Onboard/Onboard";
import OpenAPIIntegration from "../widgets/OpenAPIIntegration";
import Prompt from "../widgets/Prompt";
import Reviews from "../widgets/Reviews";
import Settings from "../settings";
import Space from "../components/Space";
import Steps from "../widgets/Steps";
import ThinkersClub from "../widgets/ThinkersClub";
import gtag from "../gtag";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    gtag("event", "page_view", {
      page_title: "Home",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });

    if (!Settings.landing()) {
      Settings.landing(false);
    }
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
          <Onboard />
          <Space height={25} />
          <Steps />
          <Space height={125} mobile={false} />
          <HelloWorld />
          <Space height={50} />
          <Reviews />
          <Space height={150} mobile={false} />
          <OpenAPIIntegration />
          <Space height={50} />
          <Space height={100} mobile={false} />
          <Features />
          <Space height={50} />
          <Space height={100} mobile={false} />
          <CleanCode />
          <Space height={150} />
          <ThinkersClub />
          <Space />
          <Space mobile={false} />
        </Grid>
        <Divider />
        <Space />
        <Bulletin />
        <Space />
      </Container>
    </>
  );
}

export default Home;
