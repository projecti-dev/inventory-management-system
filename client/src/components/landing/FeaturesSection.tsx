import { Box, Typography, Paper } from "@mui/material";
import { FEATURES } from "../../constants/featuresData";

export default function FeaturesSection() {
  return (
    <Box
      id="features"
      sx={{
        backgroundColor: "#f5f6fa",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              fontSize: { xs: "26px", md: "38px" },
              color: "primary.main",
              mb: 2,
            }}
          >
            Everything you need to manage IT assets
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "15px", md: "17px" },
              color: "text.secondary",
              maxWidth: 520,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            A complete toolkit for IT teams to track, assign, and maintain all
            company equipment from one place.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {FEATURES.map((feature) => (
            <Paper
              key={feature.title}
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: 3,
                border: "1px solid #f0f0f0",
                transition: "box-shadow 0.2s",
                "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  backgroundColor: feature.bg,
                  color: feature.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2.5,
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "primary.main",
                  mb: 1,
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  color: "text.secondary",
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
