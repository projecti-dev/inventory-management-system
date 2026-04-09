import React from "react";
import { Box, Paper } from "@mui/material";
import StatusChip from "./StatusChip";
import type { Asset } from "../types/asset.types";

interface AssetTableProps {
  assets: Asset[];
  onRowClick?: (asset: Asset) => void;
}

const headers = [
  "ID",
  "Name",
  "Category",
  "Serial",
  "Assigned To",
  "Status",
  "Purchase Date",
];

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  fontSize: "13px",
  color: "#636e72",
  borderBottom: "1px solid #f1f1f1",
  fontWeight: 500,
  fontFamily: "Poppins",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "12px",
  fontSize: "14px",
  borderBottom: "1px solid #f9f9f9",
  fontFamily: "Poppins",
};

export default function AssetTable({ assets, onRowClick }: AssetTableProps) {
  return (
    <Paper
      elevation={0}
      sx={{ borderRadius: 3, p: 3, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h} style={thStyle}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assets.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  style={{ ...tdStyle, textAlign: "center", color: "#636e72" }}
                >
                  No assets found
                </td>
              </tr>
            ) : (
              assets.map((asset) => (
                <tr
                  key={asset.id}
                  onClick={() => onRowClick?.(asset)}
                  onMouseEnter={(e) => {
                    if (onRowClick)
                      e.currentTarget.style.backgroundColor = "#f9f9f9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  style={{ cursor: onRowClick ? "pointer" : "default" }}
                >
                  <td
                    style={{
                      ...tdStyle,
                      fontSize: "13px",
                      color: "#636e72",
                      fontFamily: "monospace",
                    }}
                  >
                    {asset.id}
                  </td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>{asset.name}</td>
                  <td style={tdStyle}>{asset.category}</td>
                  <td
                    style={{
                      ...tdStyle,
                      fontSize: "12px",
                      color: "#636e72",
                      fontFamily: "monospace",
                    }}
                  >
                    {asset.serial}
                  </td>
                  <td style={tdStyle}>{asset.assignedTo}</td>
                  <td style={tdStyle}>
                    <StatusChip status={asset.status} />
                  </td>
                  <td style={{ ...tdStyle, color: "#636e72" }}>
                    {asset.purchaseDate}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Box>
    </Paper>
  );
}
