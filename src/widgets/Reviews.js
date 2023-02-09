import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import gtag from "../gtag";
import { useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const list = [
  {
    src: "/media/review8.png",
    alt: "very interesting, definitely revolutionary idea :rocket: it will save tons of coding work!",
  },
  {
    src: "/media/review3.png",
    alt: "cool, it definitely looks interesting, i look forward to seeing it grow :)",
  },
  {
    src: "/media/review7.png",
    alt: "It is impressive that Nucleoid has AI that makes adjustment in the JS state.",
  },
  {
    src: "/media/review6.png",
    alt: "Interesting approach. Need to see more extensive example. @NucleoidJS",
  },
  {
    src: "/media/review4.png",
    alt: "lookin like a cool project!",
  },
  {
    src: "/media/review2.png",
    alt: "Forward to the future, the new revolution is growing.",
  },
  {
    src: "/media/review5.png",
    alt: "looking to contribute very soon",
  },
  {
    src: "/media/review1.png",
    alt: "I just looked at Nucleoid and it looks very interesting! I really like the concept of having the DB in the runtime, directly, and the database being declarative/reactive. Definitely the way of the future!",
  },
];

const width = 375;
const gap = 20;

function Reviews() {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up("md"));
  const ref = useRef();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant={"h4"}>Join the Community</Typography>
        </Box>
        <Box width={breakpoint ? 600 : "100%"}>
          Thanks to declarative programming, we have a brand-new approach to
          data and logic. As we are still discovering what we can do with this
          powerful programming model, please join us with any types of
          contribution!
        </Box>
        <Button
          startIcon={<GitHubIcon />}
          size={"large"}
          variant={"outlined"}
          sx={{
            textTransform: "none",
          }}
          onClick={() => {
            gtag("event", "click_reviews", {
              page_location: window.location.href,
              page_path: window.location.pathname,
            });

            window.open("https://github.com/NucleoidJS/Nucleoid", "_blank");
          }}
        >
          Go to GitHub
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          overflow: "hidden",
          mt: 3,
        }}
        ref={ref}
      >
        {list.map((item) => (
          <span
            style={{
              margin: "5px",
              padding: "5px",
              border: "1px solid gray",
              borderRadius: "5px",
            }}
          >
            <img
              width={width}
              src={`https://cdn.nucleoid.com${item.src}`}
              alt={item.alt}
            />
          </span>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton
          onClick={() => {
            ref.current.scrollBy({
              left: -(width + gap),
              behavior: "smooth",
            });
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            ref.current.scrollBy({
              left: width + gap,
              behavior: "smooth",
            });
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default Reviews;
