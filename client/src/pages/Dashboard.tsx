import { Box, Paper, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import AssetTable from "../components/AssetTable";
import { MOCK_ASSETS } from "../constants/assetData";
import { STATS } from "../constants/dashboardData";

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
        {STATS.map((stat) => (
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
