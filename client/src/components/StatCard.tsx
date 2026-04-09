import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

interface StatCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  bg: string;
}

export default function StatCard({
  label,
  value,
  icon,
  color,
  bg,
}: StatCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{ borderRadius: 3, p: 3, backgroundColor: bg, flex: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "14px",
            color,
          }}
        >
          {label}
        </Typography>
        <Box sx={{ color }}>{icon}</Box>
      </Box>
      <Typography
        sx={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "36px", color }}
      >
        {value}
      </Typography>
    </Paper>
  );
}
