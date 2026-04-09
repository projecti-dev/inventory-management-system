import type { AssetStatus } from "../types/asset.types";

export const STATUS_STYLES: Record<AssetStatus, { color: string; bg: string }> =
  {
    Assigned: { color: "#00b894", bg: "#e8f8f5" },
    Available: { color: "#6c5ce7", bg: "#f0eeff" },
    Maintenance: { color: "#e17055", bg: "#fdf0ed" },
  };

export const CATEGORIES = [
  "Laptop",
  "Monitor",
  "Phone",
  "Tablet",
  "Keyboard",
  "Mouse",
  "Server",
  "Printer",
  "Other",
];

export const STATUSES: AssetStatus[] = ["Available", "Assigned", "Maintenance"];
