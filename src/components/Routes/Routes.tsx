import Home from "../../pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/about/About";
import Skills from "../../pages/skills/Skills";
import Contact from "../../pages/contact/Contact";
import Projects from "../../pages/projects/Projects";


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
