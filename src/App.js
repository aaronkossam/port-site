import "./App.css";
import Nav from "./components/Nav";
import Landpage from "./components/Landpage";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="  bg-primary h-lvh font-title text-text">
      <Nav />
      <Landpage />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
