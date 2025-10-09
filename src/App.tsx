import Main from "./components/Main";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="h-full text-[var(--text-green)] p-[4em]">
      <Main />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
