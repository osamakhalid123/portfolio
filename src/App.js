import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import MyWork from "./Components/MyWork";
import SideBar from "./Components/NavBar";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <SideBar />
      <Home />
      {/* <About /> */}
      <Skills />
      <MyWork />
      <Contact />
    </>
  );
}

export default App;
