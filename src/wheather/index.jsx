import React, { useEffect, useState } from "react";
import Search from "../search";
const Wheather = () => {
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const [wheather, setWheather] = useState(null);

  const fetchWheather = async (param) => {
    setloading(true);
    try {
      const responce = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=1d7e6b5edbc4064d90ac8501df0dfdfc
        `
      );
      const data = await responce.json();
      if (data) {
        setWheather(data);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  };
  const handleSearch = () => {
    fetchWheather(search);
    setSearch("");
  };
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  useEffect(() => {
    fetchWheather("karachi");
  }, []);

  console.log(wheather);
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>LOADING.....!</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {wheather?.name},<span>{wheather?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div>{wheather?.main?.temp}</div>
          <p className="description">
            {wheather && wheather.weather && wheather.weather[0]
              ? wheather.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{wheather?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{wheather?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wheather;
