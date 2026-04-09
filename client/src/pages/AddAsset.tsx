import { useState } from "react";
import {
  Box,
  Paper,
  Button,
  TextField,
  MenuItem,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import PageHeader from "../components/PageHeader";
import type { AssetForm } from "../types/asset.types";
import { CATEGORIES, STATUSES } from "../constants/statusStyles";

const initialForm: AssetForm = {
  name: "",
  category: "",
  serial: "",
  assignedTo: "",
  status: "",
  purchaseDate: "",
  notes: "",
};

export default function AddAsset() {
  const navigate = useNavigate();
  const [form, setForm] = useState<AssetForm>(initialForm);

  const handleChange =
    (field: keyof AssetForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New asset:", form);
    alert(`Asset "${form.name}" saved! (API coming soon)`);
    navigate("/assets");
  };

  return (
    <Box sx={{ maxWidth: 680 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/assets")}
        sx={{ color: "text.secondary", fontFamily: "Poppins", mb: 1 }}
      >
        Back
      </Button>

      <PageHeader
        title="Add New Asset"
        subtitle="Fill in the details for the new IT asset"
      />

      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{
          borderRadius: 3,
          p: { xs: 2.5, md: 4 },
          mt: 3,
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "15px",
            color: "text.secondary",
          }}
        >
          Asset Information
        </Typography>

        <TextField
          label="Asset Name"
          placeholder='e.g. MacBook Pro 14"'
          value={form.name}
          onChange={handleChange("name")}
          required
          fullWidth
          size="small"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <TextField
            select
            label="Category"
            value={form.category}
            onChange={handleChange("category")}
            required
            fullWidth
            size="small"
          >
            <MenuItem value="" disabled>
              Select category
            </MenuItem>
            {CATEGORIES.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Status"
            value={form.status}
            onChange={handleChange("status")}
            required
            fullWidth
            size="small"
          >
            {STATUSES.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <TextField
          label="Serial Number"
          placeholder="e.g. MBP-2023-001"
          value={form.serial}
          onChange={handleChange("serial")}
          fullWidth
          size="small"
        />

        <Divider />

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "15px",
            color: "text.secondary",
          }}
        >
          Assignment
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <TextField
            label="Assigned To"
            placeholder="Employee name"
            value={form.assignedTo}
            onChange={handleChange("assignedTo")}
            fullWidth
            size="small"
          />
          <TextField
            label="Purchase Date"
            type="date"
            value={form.purchaseDate}
            onChange={handleChange("purchaseDate")}
            fullWidth
            size="small"
            slotProps={{ inputLabel: { shrink: true } }}
          />
        </Box>

        <TextField
          label="Notes"
          placeholder="Any additional notes..."
          value={form.notes}
          onChange={handleChange("notes")}
          fullWidth
          multiline
          minRows={3}
          size="small"
        />

        <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            onClick={() => navigate("/assets")}
            sx={{ fontFamily: "Poppins", px: 3 }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<SaveIcon />}
            sx={{ fontFamily: "Poppins", px: 3 }}
          >
            Save Asset
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
