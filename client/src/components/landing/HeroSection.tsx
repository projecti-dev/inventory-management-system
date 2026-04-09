import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DevicesIcon from "@mui/icons-material/Devices";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: 3, md: 6 },
        py: { xs: 8, md: 14 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 6, md: 4 },
      }}
    >
      {/* Left — Text */}
      <Box sx={{ maxWidth: { xs: "100%", md: 560 } }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "#e8f4fd",
            color: "secondary.main",
            px: 2,
            py: 0.75,
            borderRadius: 5,
            mb: 3,
          }}
        >
          <DevicesIcon sx={{ fontSize: 16 }} />
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "13px" }}
          >
            IT Asset Management
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 800,
            fontSize: { xs: "32px", md: "52px" },
            lineHeight: 1.15,
            color: "primary.main",
            mb: 3,
          }}
        >
          Manage your IT assets{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            with ease
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: 1.7,
            color: "text.secondary",
            mb: 5,
            maxWidth: 480,
          }}
        >
          Track every device, monitor assignments, and manage maintenance — all
          from one clean, simple dashboard built for IT teams.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/signup")}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: "15px",
            }}
          >
            Get Started Free
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={() => navigate("/login")}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              color: "text.secondary",
              fontSize: "15px",
              textDecoration: "underline",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
              },
            }}
          >
            Already have an account?
          </Button>
        </Box>
      </Box>

      {/* Right — Visual */}
      <Box
        sx={{
          width: { xs: "100%", md: 480 },
          backgroundColor: "#f5f6fa",
          borderRadius: 4,
          p: 3,
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* Mock dashboard preview */}
        <Box
          sx={{ backgroundColor: "primary.main", borderRadius: 2, p: 2, mb: 2 }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "secondary.main",
              fontSize: "14px",
            }}
          >
            IT Assets
          </Typography>
        </Box>
        {[
          {
            label: "Total Assets",
            value: "24",
            color: "#e8f4fd",
            text: "#0984e3",
          },
          { label: "Assigned", value: "18", color: "#e8f8f5", text: "#00b894" },
          { label: "Available", value: "4", color: "#f0eeff", text: "#6c5ce7" },
          {
            label: "Maintenance",
            value: "2",
            color: "#fdf0ed",
            text: "#e17055",
          },
        ].map((stat) => (
          <Box
            key={stat.label}
            sx={{
              backgroundColor: stat.color,
              borderRadius: 2,
              p: 1.5,
              mb: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "13px",
                fontWeight: 500,
                color: stat.text,
              }}
            >
              {stat.label}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 700,
                color: stat.text,
              }}
            >
              {stat.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
