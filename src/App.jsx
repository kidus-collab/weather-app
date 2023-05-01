import { useState, useEffect } from "react";
import { FaLocationArrow, FaSearch } from "react-icons/fa";
import axios from "axios";
import "./index.css";

//images
//import cloudy from "./src/assets/cloudy.gif";
//import sunny from "./src/assets/sunny.png";
//import rainy from "./src/assets/rainy.png";

function App() {
  //const [data, setData] = useState();
  const [hidden, setHidden] = useState(false);
  //const images = [cloudy, sunny, rainy];
  const [cityName, setcityName] = useState("");

  useEffect(() => {
    const API_key = "f23e2e598da031a32d83cff24990f245";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cityName]);
  const handleSubmit = () => {
    setHidden(true);
  };

  return (
    <div class="bg-blue-950  relative top-0 w-full   h-screen items-center justify-center">
      <div className="absolute rounded-xl py-3 text-blue-950  font-bold border-2 top-1/3 left-1/3 border-white bg-white mx-auto ">
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <FaLocationArrow className="ml-10" />
          <input
            type="text"
            className="bg-transparent -mt-1 active:border-none"
            placeholder="enter your location"
            onChange={setcityName((e) => e.target.value)}
            value={cityName}
          />
          <button type="submit">
            <FaSearch className="" />
          </button>
        </form>
        <div>{hidden ? <div></div> : <h1>page not found</h1>}</div>
      </div>
    </div>
  );
}

export default App;
