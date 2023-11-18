import "./App.css";
import Experience from "./routing/pages/Experience";
import HomePage from "./routing/pages/HomePage";

import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./routing/pages/Contact";
import AboutPage from "./routing/pages/AboutPage";
import Footer from "./components/Footer";
import OurServices from "./routing/pages/OurServices";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurServices" element={<OurServices />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
