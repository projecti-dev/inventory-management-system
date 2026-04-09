import React from "react";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BuildIcon from "@mui/icons-material/Build";
import SearchIcon from "@mui/icons-material/Search";
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const FEATURES: Feature[] = [
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
