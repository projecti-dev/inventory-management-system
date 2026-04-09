import { Box, Typography, Paper } from "@mui/material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BuildIcon from "@mui/icons-material/Build";
import SearchIcon from "@mui/icons-material/Search";
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";

const features = [
  {
    icon: <TrackChangesIcon sx={{ fontSize: 32 }} />,
    title: "Asset Tracking",
    description:
      "Track every device with serial numbers, purchase dates, and full history.",
    color: "#0984e3",
    bg: "#e8f4fd",
  },
  {
    icon: <AssignmentIndIcon sx={{ fontSize: 32 }} />,
    title: "Employee Assignment",
    description:
      "Assign and unassign equipment to staff members with a single click.",
    color: "#00b894",
    bg: "#e8f8f5",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 32 }} />,
    title: "Maintenance Status",
    description:
      "Flag assets for maintenance and keep your inventory up to date.",
    color: "#e17055",
    bg: "#fdf0ed",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 32 }} />,
    title: "Powerful Search",
    description:
      "Find any asset instantly by name, category, serial, or assignee.",
    color: "#6c5ce7",
    bg: "#f0eeff",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32 }} />,
    title: "Secure Access",
    description:
      "Role-based authentication ensures only authorized staff can manage assets.",
    color: "#fdcb6e",
    bg: "#fdf6e3",
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 32 }} />,
    title: "Dashboard Overview",
    description:
      "Get a real-time snapshot of your entire IT inventory at a glance.",
    color: "#0984e3",
    bg: "#e8f4fd",
  },
];

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
        {/* Section Header */}
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

        {/* Features Grid */}
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
          {features.map((feature) => (
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
