import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 4,
        px: { xs: 3, md: 6 },
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 800,
          fontSize: "20px",
          color: "secondary.main",
          mb: 1,
        }}
      >
        IT
        <Box component="span" sx={{ color: "#ffffff" }}>
          Assets
        </Box>
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "13px",
          color: "grey.500",
        }}
      >
        © {new Date().getFullYear()} ITAssets. All rights reserved.
      </Typography>
    </Box>
  );
}
