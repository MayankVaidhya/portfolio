import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Sociallinks from "./components/Sociallinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <Sociallinks />
    </div>
  );
}

export default App;
