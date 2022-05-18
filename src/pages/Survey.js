import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const xsForm =
  '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd_fnncoeGr4V_f-ayWqelfMGMUCUPd39RJ9ls0_FN-TurDXQ/viewform?embedded=true" width="100%" height="2325" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" >Loading…</iframe>';

const mdForm =
  '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd_fnncoeGr4V_f-ayWqelfMGMUCUPd39RJ9ls0_FN-TurDXQ/viewform?embedded=true" width="100%" height="1925" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" >Loading…</iframe>';

function Survey() {
  window.history.pushState("Nucleoid", "", "/");
  return (
    <Container>
      <Grid container>
        <Grid
          container
          item
          justifyContent={"center"}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <div
            style={{ width: 800 }}
            dangerouslySetInnerHTML={{
              __html: mdForm,
            }}
          />
        </Grid>
        <Grid
          item
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <div
            style={{ width: 350 }}
            dangerouslySetInnerHTML={{
              __html: xsForm,
            }}
          />
        </Grid>
        <br />
        <Grid container item justifyContent={"center"}>
          <Paper
            sx={{
              padding: 2,
            }}
          >
            <Box
              sx={{
                width: {
                  xs: 350,
                  lg: 500,
                },
              }}
            >
              <Grid container item justifyContent={"center"}>
                <GitHubIcon /> &nbsp;&nbsp;
                <a
                  href={"https://github.com/NucleoidJS/Nucleoid"}
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/NucleoidJS/Nucleoid
                </a>
              </Grid>
              <br />
              <Typography>
                Projemizi yildizladiktan* sonra&nbsp;
                <a
                  href={"mailto:survey@nucleoid.com"}
                  target="_blank"
                  rel="noreferrer"
                >
                  survey@nucleoid.com
                </a>
                'a bilgilerinizi email atarak 25TL'lik hediyemizi alabilirsiniz.
              </Typography>
              <br />
              <Typography fontSize={12}>
                *GitHub Policy'den dolayi son 3 ay icinde acilmis GitHub
                hesaplarini kabul edemiyoruz.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <br />
    </Container>
  );
}

export default Survey;
