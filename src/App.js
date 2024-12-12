import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
