import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "../template/about/About";
import Skills from "../template/skills/Skills";
import Contact from "../template/contact/Contact";
import Projects from "../template/projects/Projects";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
