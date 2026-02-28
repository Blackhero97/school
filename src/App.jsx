import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import TeachersPage from "./pages/TeachersPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ChatAgent from "./components/ChatAgent";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      <ChatAgent />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/haqida" element={<AboutPage />} />
                <Route path="/dasturlar" element={<ProgramsPage />} />
                <Route path="/oqituvchilar" element={<TeachersPage />} />
                <Route path="/yangiliklar" element={<NewsPage />} />
                <Route path="/boglanish" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
