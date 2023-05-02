import { useState, useEffect } from "react";
import {
  FaLocationArrow,
  FaSearch,
  FaWaveSquare,
  FaWind,
} from "react-icons/fa";
import axios from "axios";
import "./index.css";
//images
import cloudy from "./src/assets/cloudy.gif";
import sunny from "./src/assets/sunny.png";
import rainy from "./src/assets/rainy.png";

function App() {
  const [data, setData] = useState();
  const images = [cloudy, sunny, rainy];
  const [cityName, setcityName] = useState("");
  // const [show, setShow] = useState(false);

  useEffect(() => {
    const API_key = "f23e2e598da031a32d83cff24990f245";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cityName, data]);

  return (
    <div class="bg-blue-950  relative top-0 w-full   h-screen items-center justify-center">
      <div className="absolute rounded-xl py-3 text-blue-950  font-bold border-2 top-1/3 left-1/3 border-white bg-white mx-auto ">
        <form className="flex gap-4">
          <FaLocationArrow className="ml-10" />
          <input
            type="text"
            className="bg-transparent -mt-1 active:border-none"
            placeholder="enter your location"
            onChange={(e) => setcityName(e.target.value)}
            value={cityName}
          />
          <button type="submit" onSubmit={(e) => e.preventDefault}>
            <FaSearch className="mr-5" />
          </button>
        </form>
        <div className="items-center justify-center ease-in duration-300 transition">
          {switch(data.main.temp) { 
             case(cloudy): 
              return <video src={images[0]} /> 
              break;
             case(sunny):
               return <img src={images[1]} /> 
              break; 
             case(rainy): 
               return <img src={images[2]} />
              break;
          }}
          <div className="mx-auto items-center justify-center mt-12">
            <h1 className="text-center text-6xl">{data.main.temp}</h1>
            <h4 className="text-center font-bold text-xl">Scattered Clouds</h4>
          </div>
          <div className="flex ml-8 mt-9 mb-2">
            <div className="flex gap-2 w-1/2">
              <FaWaveSquare className="w-6 h-6 my-auto" />
              <div>
                <h3 className="text-xl mt-1">{data.main.humidity}%</h3>
                <p className="opacity-70 text-sm -mt-1">Humidity</p>
              </div>
            </div>
            <div className="flex gap-2 w-1/2">
              <FaWind className="w-6 h-6 my-auto" />
              <div>
                <h3 className="text-xl mt-1">{data.wind.speed} Km/h</h3>
                <p className="opacity-70 text-sm -mt-1">Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
