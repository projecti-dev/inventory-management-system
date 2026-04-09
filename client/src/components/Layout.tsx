import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { NAV_ITEMS } from "../constants/navItems";

const DRAWER_WIDTH = 240;

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const DrawerContent = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        py: 3,
        px: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 800,
          fontSize: "20px",
          color: "secondary.main",
          mb: 4,
          px: 1,
        }}
      >
        IT Assets
      </Typography>

      <List disablePadding sx={{ flexGrow: 1 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.label}
              onClick={() => {
                navigate(item.path);
                setDrawerOpen(false);
              }}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                backgroundColor: isActive ? "secondary.main" : "transparent",
                color: isActive ? "white" : "grey.400",
                "&:hover": {
                  backgroundColor: isActive
                    ? "secondary.main"
                    : "rgba(255,255,255,0.08)",
                  color: "white",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 36 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "15px",
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <ListItemButton
        sx={{
          borderRadius: 2,
          color: "grey.400",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "white",
          },
        }}
      >
        <ListItemIcon sx={{ color: "inherit", minWidth: 36 }}>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary="Logout"
          sx={{
            "& .MuiListItemText-primary": {
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "15px",
            },
          }}
        />
      </ListItemButton>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {isMobile && (
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: "primary.main",
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 800,
                color: "secondary.main",
              }}
            >
              IT Assets
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? drawerOpen : true}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            border: "none",
          },
        }}
      >
        {DrawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          mt: { xs: 8, md: 0 },
          backgroundColor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
