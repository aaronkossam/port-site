import "./App.css";
import Nav from "./components/Nav";
import Landpage from "./components/Landpage";
import Skill from "./components/Skill";
function App() {
  return (
    <div className="  bg-primary h-lvh font-title text-text">
      <Nav />
      <Landpage />
      <Skill />
    </div>
  );
}

export default App;
