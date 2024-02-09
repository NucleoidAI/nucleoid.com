import { memo } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { RouterLink } from "src/routes/components";

// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
  const singleLogo = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Typography
        fontSize="38px"
        fontWeight={400}
        sx={{
          background:
            "linear-gradient(135deg, rgba(32,153,88,1) 0%, rgba(0,141,114,1) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          MozBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozTextFillColor: "transparent",
        }}
      >
        nuc
      </Typography>
    </Box>
  );

  const fullLogo = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Typography
        fontSize="34px"
        fontWeight={400}
        sx={{
          background:
            "linear-gradient(135deg, rgba(32,153,88,1) 0%, rgba(0,141,114,1) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          MozBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozTextFillColor: "transparent",
        }}
      >
        Nucleoid
      </Typography>
    </Box>
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: "pointer",
          display: "inline-flex",
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
};

export default memo(Logo);
