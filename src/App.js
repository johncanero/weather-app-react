import "./App.css";
import Hero from "./sections/Hero";
import Search from "./components/search";

function App() {
  return (
    <div>
      <Hero />
      <div className="flex justify-center">
        <Search />
      </div>
    </div>
  );
}

export default App;
