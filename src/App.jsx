import { Toolbar, CssBaseline } from "@mui/material";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Membership from "./pages/Membership";
import Schedule from "./pages/Schedule";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
