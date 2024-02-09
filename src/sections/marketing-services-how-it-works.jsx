import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineDot from "@mui/lab/TimelineDot";
import Container from "@mui/material/Container";
import TimelineItem from "@mui/lab/TimelineItem";
import Typography from "@mui/material/Typography";
import TimelineContent from "@mui/lab/TimelineContent";
import { alpha, useTheme } from "@mui/material/styles";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import { useResponsive } from "src/hooks/use-responsive";

import { bgGradient } from "src/theme/css";

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    prompt: '"Define human with a name"',
  },
  {
    prompt: "Human is defined in the context.",
    code:
      "> class Human {\n" +
      "    constructor(name) {\n" +
      "      this.name = name;\n" +
      "    }\n" +
      "  }",
  },
  {
    prompt: '"All humans are mortal"',
  },
  {
    prompt: "Mortality is defined for humans.",
    code: "> $Human.mortal = true",
  },
  {
    prompt: '"Socrates is a human"',
  },
  {
    prompt: "Socrates is created as a human.",
    code: "> socrates = new Human('Socrates')",
  },
  {
    prompt: '"Is Socrates mortal?"',
  },
  {
    prompt: "Confirmed that Socrates is mortal",
    code: "> socrates.mortal === true\ntrue",
  },
];

const COLORS = ["primary", "secondary", "warning", "success"];

// ----------------------------------------------------------------------

export default function MarketingServicesHowItWorks() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: "/assets/background/overlay_2.jpg",
        }),
        color: "common.white",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          How It Works
        </Typography>
        <Typography
          sx={{
            m: 3,
            mx: "auto",
            opacity: 0.72,
            maxWidth: 480,
            textAlign: "center",
          }}
          fontSize={22}
        >
          Socrates&apos;s syllogism
        </Typography>
        <Typography
          sx={{
            mx: "auto",
            opacity: 0.72,
            maxWidth: 480,
            textAlign: "center",
            mb: { xs: 8, md: 10 },
          }}
        >
          <i>
            &quot;All humans are mortal. Socrates is a human. Therefore,
            Socrates is mortal.&quot;
          </i>
        </Typography>

        <Timeline position={mdUp ? "alternate-reverse" : "right"}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                "&:before": {
                  ...(!mdUp && { display: "none" }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index % 5]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                {!(index % 2) && <Typography>{value.prompt}</Typography>}
                {!!(index % 2) && (
                  <>
                    <Typography color="gray">{value.prompt}</Typography>
                    <Typography>
                      <pre>
                        <code>{value.code}</code>
                      </pre>
                    </Typography>
                  </>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
