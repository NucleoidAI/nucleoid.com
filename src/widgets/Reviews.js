import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";
import { Box, IconButton } from "@mui/material";

const list = [
  {
    src: "/media/review1.png",
    alt: "I just looked at Nucleoid and it looks very interesting! I really like the concept of having the DB in the runtime, directly, and the database being declarative/reactive. Definitely the way of the future!",
  },
  {
    src: "/media/review2.png",
    alt: "Forward to the future, the new revolution is growing.",
  },
  {
    src: "/media/review3.png",
    alt: "cool, it definitely looks interesting, i look forward to seeing it grow :)",
  },
  {
    src: "/media/review4.png",
    alt: "lookin like a cool project!",
  },
  {
    src: "/media/review5.png",
    alt: "looking to contribute very soon",
  },
  {
    src: "/media/review6.png",
    alt: "Interesting approach. Need to see more extensive example. @NucleoidJS",
  },
  {
    src: "/media/review7.png",
    alt: "It is impressive that Nucleoid has AI that makes adjustment in the JS state.",
  },
  {
    src: "/media/review8.png",
    alt: "very interesting, definitely revolutionary idea :rocket: it will save tons of coding work!",
  },
];

for (let i = list.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [list[i], list[j]] = [list[j], list[i]];
}

const width = 375;
const gap = 20;

function Reviews() {
  const ref = useRef();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          overflow: "hidden",
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
