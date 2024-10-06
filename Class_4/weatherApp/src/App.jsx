import React from 'react';
import "./index.css";
import curlocationImg from "./assets/current-location-svgrepo-com.svg";
function App() {

  const [content, setContent] = React.useState("");
  const [weatherObj, setWeatherObj] = React.useState({
    temp: "--",
    location: "--",
    date: "--",
    time: "--",
    condition: "--",
    src: null,
  });

    async function fetchWeather(location) {
      const url = `http://api.weatherapi.com/v1/current.json?key=6fc74cf82bc44773a8a171855241407&q=${location}&aqi=no`;
      // fetch -> inbuilt function to get http response from a server
      const response = await fetch(url);
      if (response.status == 400) {
        alert("location is invalid");
        return null;
      } else if (response.status == 200) {
        const json = await response.json();
        return json;
      }
    }

  const handleClick = async () => {
    console.log("Button was clicked")
      if (content != "") {
      // you need to make the request
        const data = await fetchWeather(content);
        if (data == null) {
          alert("no data found for this location");
          return;
        }
        // after getting the data -> data extract 
        const temp = data.current.temp_c;
        const location = data.location.name;
        const timeData = data.location.localtime;
        const [date, time] = timeData.split(" ");
        const iconLink = data.current.condition.icon;
        const condition = data.current.condition.text;
        // update the state 
        let newobj = {
          "temp": temp,
          "location": location,
          "date": date,
          "time": time,
          "condition": condition,
          "src": iconLink
        }
        setWeatherObj(newobj);
        
    }
    else {
      alert("Location can't be empty")
    }
    setContent("")
  }

  const handleInput = (e) => {
    setContent(e.target.value);
    console.log(content)
  }

  return (
    <>
      <header className="h-[150px] bg-[#2c3e50] flex items-center justify-center">
        <div id="input-container" className="w-[60%] flex justify-between">
          <input
            id=""
            type="text"
            placeholder="Enter Location"
            className="text-white text-xl bg-transparent outline-none py-4 px-0  border-b-2 border-white w-[84%]"
            value={content}
            onChange={handleInput}
          />

          <img
            id="currentLocationSvg"
            className="h-[2.5rem]  mt-[1rem] mr-[1rem] hover:scale-110 transition duration-300 "
            src={curlocationImg}
            alt="curLoc-svg"
          />
          <button
            onClick={handleClick}
            id="search"
            className="bg-green-400 text-white text-lg py-4 px-8 rounded-lg cursor-pointer hover:bg-green-500 "
          >
            Search
          </button>
        </div>
      </header>
      <main className="flex items-center justify-center text-white bg-[#01161E] h-[calc(100vh-150px)]">
        <div id="weather-container" className="flex gap-4 items-center h-20">
          <div id="temperature" className="temperature">
            {weatherObj.temp}°C
          </div>
          <div className="location-date">
            <div id="location" className="text-[2rem] mb-[1.6rem]">
              {weatherObj.location}
            </div>
            <span id="time" className="time">
              {weatherObj.time}
            </span>
            <span id="day" className="day"></span>
            <span id="date" className="date">
              {weatherObj.date}
            </span>
          </div>
        </div>

        <div id="weather-state" className="weather-state">
          <img id="emoji" src={weatherObj.src}/>
          <div id="condition" className="text-center">
            {weatherObj.condition}
          </div>
        </div>
      </main>
    </>
  );
}

export default App
