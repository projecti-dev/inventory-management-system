import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AssetTable from "../components/AssetTable";
import { MOCK_ASSETS } from "../constants/assetData";

export default function Assets() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = MOCK_ASSETS.filter((a) =>
    [a.name, a.category, a.assignedTo, a.serial]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { sm: "center" },
          gap: 2,
        }}
      >
        <PageHeader title="Assets" subtitle="Manage all IT equipment" />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={() => navigate("/assets/new")}
          sx={{
            height: 44,
            px: 3,
            whiteSpace: "nowrap",
            alignSelf: { xs: "flex-start", sm: "auto" },
          }}
        >
          Add Asset
        </Button>
      </Box>

      <TextField
        placeholder="Search by name, category, serial or person..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="small"
        sx={{ maxWidth: 420, backgroundColor: "white", borderRadius: 2 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
          },
        }}
      />

      <AssetTable
        assets={filtered}
        onRowClick={(asset) => navigate(`/assets/${asset.id}`)}
      />
    </Box>
  );
}
