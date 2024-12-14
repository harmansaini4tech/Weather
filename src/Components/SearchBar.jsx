import React, { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import Rain from "../../public/images/10d.svg";
import Clear from "../../public/images/01d.svg";
import Haze from "../../public/images/50d.svg";
import Clouds from "../../public/images/04d.svg";
import Strom from "../../public/images/11d.svg";
import Snow from "../../public/images/13d.svg";
import InformationWeather from "./InformationWeather";

const SearchBar = () => {
  const searchRef = useRef();
  const [data, setData] = useState({
    main: "Clear",
    temp: "266.15",
    humditity: "43",
    speed: "54",
    aboutSky: "Clear",
    image: Clear,
  });
  const [errorMsg, seterrorMsg] = useState(null);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // console.log(searchRef.current.value)
    try {
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          searchRef.current.value ? searchRef.current.value : "india"
        }&appid=b5d1fbca7d361161e928ebee3827ba6b`
      );
      console.log(weatherData.data);
      seterrorMsg(null);

      setData({
        main: weatherData.data.weather[0].main,
        temp: weatherData.data.main.temp,
        humditity: weatherData.data.main.humidity,
        speed: weatherData.data.wind.speed,
        aboutSky: weatherData.data.weather[0].description,
        image:
          weatherData.data.weather[0].main == "Clouds"
            ? Clouds
            : weatherData.data.weather[0].main == "Clear"
            ? Clear
            : weatherData.data.weather[0].main == "Rain"
            ? Rain
            : weatherData.data.weather[0].main == "Thunderstorm"
            ? Strom
            : weatherData.data.weather[0].main == "Snow"
            ? Snow
            : weatherData.data.weather[0].main == "Haze"
            ? Haze
            : weatherData.data.weather[0].main == "Mist"
            ? Haze
            : weatherData.data.weather[0].main == "Smoke"
            ? Haze
            : weatherData.data.weather[0].main == "Dust"
            ? Haze
            : Clear,
      });
    } catch (error) {
      seterrorMsg("Please enter the vaild city");
    }
  };
  console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        className="row p-4 d-flex justify-content-center"
      >
        <div class=" col-8 col-md-4 col-lg-2 d-flex align-items-center justify-content-end flex-column">
          <input
            type="text"
            ref={searchRef}
            className="form-control shadow-none"
            placeholder="Enter city name"
            required
          />
          <div className=" text-danger">{errorMsg}</div>
        </div>

        <div className=" col-4 col-md-4 col-lg-2">
          <button className=" btn btn-success btn-md " type="submit">
            Search
          </button>
        </div>
      </form>

      <InformationWeather data={data}></InformationWeather>
    </>
  );
};

export default SearchBar;
