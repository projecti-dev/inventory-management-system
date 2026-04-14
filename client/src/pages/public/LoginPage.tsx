import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../../context/AuthContext";

interface LoginForm {
  email: string;
  password: string;
}

const initialForm: LoginForm = { email: "", password: "" };

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState<LoginForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange =
    (field: keyof LoginForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await login(form.email, form.password);
    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#eef1f7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
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
          maxWidth: 420,
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        }}
      >
        {/* Icon + Title */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              backgroundColor: "#e8f4fd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <LockOutlinedIcon sx={{ color: "secondary.main", fontSize: 24 }} />
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "22px",
              color: "primary.main",
            }}
          >
            Welcome back
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              color: "text.secondary",
              mt: 0.5,
            }}
          >
            Sign in to your account
          </Typography>
        </Box>

        {/* Fields */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
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
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange("password")}
            required
            fullWidth
            size="small"
            autoComplete="current-password"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon fontSize="small" />
                      ) : (
                        <VisibilityIcon fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

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
            {loading ? "Signing in..." : "Sign In"}
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
          Don't have an account?{" "}
          <Box
            component="span"
            onClick={() => navigate("/signup")}
            sx={{
              color: "secondary.main",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Sign up
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
}
