import "./App.css";
import "./App.css";
import { themeContext } from "./Context";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonials/Testimonial";
import Works from "./components/Works/Works";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        className="container"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navbar />
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
