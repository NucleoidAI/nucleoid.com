import { m } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Image from "../components/image";
import CompactLayout from "../layouts/compact";
import { RouterLink } from "../routes/components";
import { varBounce, MotionContainer } from "../components/animate";

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found!</title>
      </Helmet>

      <CompactLayout>
        <MotionContainer>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              Page Not Found!
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: "text.secondary" }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Image
              alt="404"
              src="https://cdn.nucleoid.com/media/d1afb01b-ca2e-4752-8f5b-d01f9c73e8d6.png"
              sx={{
                mx: "auto",
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
