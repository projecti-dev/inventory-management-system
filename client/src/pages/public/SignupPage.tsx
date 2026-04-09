import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

interface SignupForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialForm: SignupForm = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<SignupForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange =
    (field: keyof SignupForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    // API call will go here
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f6fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
    >
      {/* Logo */}
      <Typography
        onClick={() => navigate("/")}
        sx={{
          fontFamily: "Poppins",
          fontWeight: 800,
          fontSize: "26px",
          color: "primary.main",
          mb: 4,
          cursor: "pointer",
        }}
      >
        IT
        <Box component="span" sx={{ color: "secondary.main" }}>
          Assets
        </Box>
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 440,
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Icon + Title */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              backgroundColor: "#e8f8f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <PersonAddOutlinedIcon sx={{ color: "#00b894", fontSize: 24 }} />
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "22px",
              color: "primary.main",
            }}
          >
            Create an account
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              color: "text.secondary",
              mt: 0.5,
            }}
          >
            Join your IT team on ITAssets
          </Typography>
        </Box>

        {/* Fields */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <TextField
            label="Full name"
            value={form.fullName}
            onChange={handleChange("fullName")}
            required
            fullWidth
            size="small"
            autoComplete="name"
          />

          <TextField
            label="Email address"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            required
            fullWidth
            size="small"
            autoComplete="email"
          />

          <TextField
            label="Password"
            type="password"
            value={form.password}
            onChange={handleChange("password")}
            required
            fullWidth
            size="small"
            autoComplete="new-password"
          />

          <TextField
            label="Confirm password"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange("confirmPassword")}
            required
            fullWidth
            size="small"
          />

          {/* Error message */}
          {error && (
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "13px",
                color: "error.main",
                textAlign: "center",
              }}
            >
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            disabled={loading}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              py: 1.4,
              fontSize: "15px",
              mt: 0.5,
            }}
          >
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            color: "text.secondary",
          }}
        >
          Already have an account?{" "}
          <Box
            component="span"
            onClick={() => navigate("/login")}
            sx={{
              color: "secondary.main",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Sign in
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
}
