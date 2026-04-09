import React from "react";
import { Chip } from "@mui/material";
import type { AssetStatus } from "../types/asset.types";
import { STATUS_STYLES } from "../constants/statusStyles";

interface StatusChipProps {
  status: AssetStatus;
}

export default function StatusChip({ status }: StatusChipProps) {
  const { color, bg } = STATUS_STYLES[status];
  return (
    <Chip
      label={status}
      size="small"
      sx={{
        backgroundColor: bg,
        color,
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "12px",
        border: "none",
      }}
    />
  );
}
