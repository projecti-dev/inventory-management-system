import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 6 },
            py: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              fontSize: "22px",
              color: "primary.main",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            IT
            <Box component="span" sx={{ color: "secondary.main" }}>
              Assets
            </Box>
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              {navLinks.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "15px",
                    color: "text.primary",
                    textDecoration: "none",
                    "&:hover": { color: "secondary.main" },
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Typography>
              ))}
              <Button
                variant="outlined"
                onClick={() => navigate("/login")}
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  borderColor: "secondary.main",
                  color: "secondary.main",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#e8f4fd",
                    borderColor: "secondary.main",
                  },
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/signup")}
                sx={{ fontFamily: "Poppins", fontWeight: 500, px: 3 }}
              >
                Get Started
              </Button>
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: "primary.main" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: "100%", p: 3 } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              fontSize: "22px",
              color: "primary.main",
            }}
          >
            IT
            <Box component="span" sx={{ color: "secondary.main" }}>
              Assets
            </Box>
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List disablePadding>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.label}
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              <ListItemText
                primary={link.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => {
              navigate("/login");
              setDrawerOpen(false);
            }}
            sx={{
              fontFamily: "Poppins",
              borderColor: "secondary.main",
              color: "secondary.main",
              py: 1.5,
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
              navigate("/signup");
              setDrawerOpen(false);
            }}
            sx={{ fontFamily: "Poppins", py: 1.5 }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
