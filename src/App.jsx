import { Toolbar, CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import PageFadeIn from "./components/PageFadeIn";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Programs from "./pages/Programs";
import Membership from "./pages/Membership";
import Schedule from "./pages/Schedule";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import DropIn from "./pages/DropIn";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import ScrollCleanup from "./utils/ScrollCleanup.jsx";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <ScrollCleanup />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route
          path="/programs"
          element={
            <PageFadeIn key={location.pathname}>
              <Programs />
            </PageFadeIn>
          }
        />
        <Route
          path="/membership"
          element={
            <PageFadeIn key={location.pathname}>
              <Membership />
            </PageFadeIn>
          }
        />
        <Route
          path="/schedule"
          element={
            <PageFadeIn key={location.pathname}>
              <Schedule />
            </PageFadeIn>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/contact"
          element={
            <PageFadeIn key={location.pathname}>
              <Contact />
            </PageFadeIn>
          }
        />
        <Route
          path="/faq"
          element={
            <PageFadeIn key={location.pathname}>
              <Faq />
            </PageFadeIn>
          }
        />
        <Route
          path="/dropin"
          element={
            <PageFadeIn key={location.pathname}>
              <DropIn />
            </PageFadeIn>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
