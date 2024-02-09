import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";

import Image from "src/components/image";
import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

const LISTS = [
  "Combines Learning and Reasoning",
  "Enhanced Understanding and Decision-Making",
  "Leveraging Formal Logic in AI",
];

// ----------------------------------------------------------------------

export default function MarketingServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid xs={12} md={6} lg={5}>
          <Image
            alt="services"
            src="/assets/images/marketing/297fde45-b543-4b00-96bf-9f02950db079.png"
            sx={{
              borderRadius: 2,
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h3">What is Neuro-Symbolic AI?</Typography>

            <Typography sx={{ color: "text.secondary" }}>
              Neuro-Symbolic AI combines the strengths of neural networks
              (neuro) and symbolic AI to create systems that can both understand
              and reason about the world. Neural networks are excellent at
              processing and learning from large amounts of data, particularly
              in tasks that involve pattern recognition, such as image and
              speech recognition. They, however, struggle with tasks that
              require deep logical reasoning or understanding the underlying
              causal relationships in data.
              <br />
              <br />
              <center>
                <Image
                  alt="Neuro is used for learning and Symbolic is used for reasoning in Neuro-Symbolic AI"
                  src="/assets/images/marketing/9ea56621-bcfe-4495-b291-0c26ba8b18ab.png"
                  width={200}
                />
              </center>
              <br />
              Symbolic AI, on the other hand, involves the use of symbolic
              reasoning to process knowledge and solve problems. It is based on
              the manipulation of symbols (which represent objects and concepts)
              and the use of logic to infer new knowledge or make decisions.
              Symbolic AI excels at tasks that require understanding of rules,
              structured logic, and explicit knowledge representation, but it
              lacks the flexibility and learning capability of neural networks,
              especially when dealing with noisy, unstructured data.
            </Typography>

            <Stack spacing={2}>
              {LISTS.map((text) => (
                <Stack key={text} direction="row" alignItems="center">
                  <Box
                    component="span"
                    sx={{
                      mr: 2,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                    }}
                  />
                  {text}
                </Stack>
              ))}
            </Stack>
          </Stack>
          <br />
          <center>
            <Button
              onClick={() =>
                window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
              }
              href={paths.marketing.caseStudies}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Check Our Work
            </Button>
          </center>
        </Grid>
      </Grid>
    </Container>
  );
}
