import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
