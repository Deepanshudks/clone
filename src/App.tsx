import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/notFound";
import About from "./Pages/About";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
      });
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
