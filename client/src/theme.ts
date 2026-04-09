import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2d3436",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0984e3",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f6fa",
      paper: "#ffffff",
    },
    success: {
      main: "#00b894",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#e17055",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
