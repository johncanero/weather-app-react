import "./App.css";
import Hero from "./sections/Hero";
import Search from "./components/search";
import CurrentWeather from "./components/current-weather/current-weather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div>
      <Hero />
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
