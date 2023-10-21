import "./App.css";
import { Hero } from "./sections/Hero";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider>
      <meta title="Portfolio - RoR9" />
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
