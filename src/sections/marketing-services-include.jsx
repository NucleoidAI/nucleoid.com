import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Image from "src/components/image";

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: "Declarative",
    description:
      "Nucleoid is embedded inside Node.js and renders the very same JavaScript codes and makes the necessary adjustments in the state.",
    icon: "https://cdn.nucleoid.com/media/019-cube.png",
  },
  {
    title: "AI-managed",
    description:
      "Our runtime environment automatically deduces and infers solutions based on the given logic, enhancing decision-making.",
    icon: "https://cdn.nucleoid.com/media/007-AI.png",
  },
  {
    title: "Built-in Datastore",
    description:
      "Write code that mirrors human reasoning, making complex problem-solving more intuitive and efficient.",
    icon: "https://cdn.nucleoid.com/media/019-database-5.png",
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: "center",
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <Image
              visibleByDefault
              disabledEffect
              alt="marketing market"
              src={value.icon}
              sx={{ width: 64, height: 64, mx: "auto" }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              {" "}
              {value.description}{" "}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
