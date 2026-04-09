import React from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BuildIcon from "@mui/icons-material/Build";

export interface StatCardData {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  bg: string;
}

export const STATS: StatCardData[] = [
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
