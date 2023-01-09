import "./App.css";
import Hero from "./sections/Hero";
import Search from "./components/search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div>
      <Hero />
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
