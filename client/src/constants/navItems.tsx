import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DevicesIcon from "@mui/icons-material/Devices";
import AddBoxIcon from "@mui/icons-material/AddBox";

export interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", path: "/", icon: <DashboardIcon fontSize="small" /> },
  { label: "Assets", path: "/assets", icon: <DevicesIcon fontSize="small" /> },
  {
    label: "Add Asset",
    path: "/assets/new",
    icon: <AddBoxIcon fontSize="small" />,
  },
];
