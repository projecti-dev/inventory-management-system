import { Box, Paper, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BuildIcon from "@mui/icons-material/Build";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import AssetTable from "../components/AssetTable";
import { MOCK_ASSETS } from "../constants/assetData";

const stats = [
  {
    label: "Total Assets",
    value: 24,
    icon: <DevicesIcon />,
    color: "#0984e3",
    bg: "#e8f4fd",
  },
  {
    label: "Assigned",
    value: 18,
    icon: <AssignmentIndIcon />,
    color: "#00b894",
    bg: "#e8f8f5",
  },
  {
    label: "Available",
    value: 4,
    icon: <CheckCircleIcon />,
    color: "#6c5ce7",
    bg: "#f0eeff",
  },
  {
    label: "Maintenance",
    value: 2,
    icon: <BuildIcon />,
    color: "#e17055",
    bg: "#fdf0ed",
  },
];

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <PageHeader title="Dashboard" subtitle="Overview of all IT assets" />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Box>

      <Paper
        elevation={0}
        sx={{ borderRadius: 3, p: 3, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "17px",
            mb: 2.5,
          }}
        >
          Recent Assets
        </Typography>
        <AssetTable assets={MOCK_ASSETS.slice(0, 5)} />
      </Paper>
    </Box>
  );
}
