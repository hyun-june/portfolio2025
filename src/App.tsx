import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className=" text-[var(--text-green)] px-[4em] flex flex-col">
      <nav className="border-b-2 border-gray-200 text-4xl mt-2">PORTFOLIO</nav>
      <div className="flex my-10">
        <section className="grid h-full w-full self-center justify-self-center">
          <div className="flex  w-full">
            <Profile src="캐릭터.png" />
            <div className="flex flex-col flex-1">
              <div className="grid grid-cols-2 border-b-2 border-gray-200 py-2">
                <Home />
                <Skills />
              </div>
              <Project />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
