import { m } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Image from "../components/image";
import CompactLayout from "../layouts/compact";
import { RouterLink } from "../routes/components";
import { varBounce, MotionContainer } from "../components/animate";

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <>
      <Helmet>
        <title> 500 Internal Server Error</title>
      </Helmet>

      <CompactLayout>
        <MotionContainer>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              500 Internal Server Error
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: "text.secondary" }}>
              There was an error, please try again later.
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Image
              alt="500"
              src="https://cdn.nucleoid.com/media/d1afb01b-ca2e-4752-8f5b-d01f9c73e8d6.png"
              sx={{
                mx: "auto",
                maxWidth: 320,
                my: { xs: 5, sm: 8 },
              }}
            />
          </m.div>

          <Button
            component={RouterLink}
            href="/"
            size="large"
            color="inherit"
            variant="contained"
          >
            Go to Home
          </Button>
        </MotionContainer>
      </CompactLayout>
    </>
  );
}
