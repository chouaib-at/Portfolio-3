import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/sidebar.jsx ";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Resume from "./components/sidebar/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default App;
