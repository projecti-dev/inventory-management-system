import { Box, Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: { xs: "22px", md: "28px" },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: "text.secondary", fontSize: "15px", mt: 0.5 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
