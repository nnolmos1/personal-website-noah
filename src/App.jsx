import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DesignWork from "./pages/DesignWork";

export default function App() { 
  return (
    <> 
      <Navbar />

      <Routes> 
        <Route path="/" element={
          <main>  
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        } />

      <Route path="/design" element= {
        <DesignWork />
      } />
      </Routes>
    </>
  )
}