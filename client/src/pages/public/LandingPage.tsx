import { Box } from "@mui/material";
import Navbar from "../../components/landing/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import Footer from "../../components/landing/Footer";

export default function LandingPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </Box>
  );
}
