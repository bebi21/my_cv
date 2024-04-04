import { Waypoint } from "react-waypoint";
import "./App.css";
import ExampleComponent from "./components/AnimationText/AnimationText";
import Banner from "./components/Banner/Banner";
import Example from "./components/header/Header";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Project";
import About from "./components/About/About";
import End from "./components/End/Footer";

function App() {
  return (
    <>
      <div className='bg-black' id='top'>
        <Example />
        <Banner />
        <Skills />
        <Projects />
        <About />
        <End />
      </div>

      {/* <ExampleComponent /> */}
    </>
  );
}

export default App;
