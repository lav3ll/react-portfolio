import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import NavTabs from "./components/NavTabs";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Project";
import Footer from "./components/Footer/Footer"; // Import Footer component

function App() {
  return (
    <Router>
      {/* Wrap all components in a parent element */}
      <div>
        <NavTabs />
        <Header />
        {/* Wrap Routes component and Footer component */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/contact/*" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
