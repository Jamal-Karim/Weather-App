import { getLocationData } from "./location.js";
import { getTempData } from "./temp.js";
import { getForecastData } from "./forecast.js";
import { loadWeatherUi } from "./loadUi.js";
import { handleCurrentTemp } from "./buttons.js";

import "./styles/main.css";

const body = document.querySelector("body");
const userCity = document.getElementById("city");
const searchIcon = document.querySelector(".searchIcon");

let onCelsius = false;
export { onCelsius };

let dataObj;

userCity.addEventListener("focus", () => {
  userCity.removeAttribute("placeholder");
});

userCity.addEventListener("blur", () => {
  if (!userCity.value.trim()) {
    userCity.setAttribute("placeholder", "Enter a city to get started!");
  }
});

export async function getData(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=9da97e80930143a38c213928241202&q=${city}&days=3`
    );

    if (!response.ok) {
      userCity.value = "";
      userCity.setAttribute("placeholder", "Please enter valid city");
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching the data:", error);
    throw error;
  }
}

async function combinedData(city) {
  try {
    const apiCall = await getData(city);
    const location = await getLocationData(apiCall);
    const tempData = await getTempData(apiCall);

    const forecast = await getForecastData(apiCall);
    console.log(forecast);

    const data = { ...location, ...tempData, ...forecast };

    console.log(data);
    dataObj = data;
    console.log(dataObj.forecast[Object.keys(dataObj.forecast)[0]]);
    body.appendChild(
      loadWeatherUi(
        data.condition,
        data.tempF,
        data.tempC,
        data.location,
        data.condition,
        data.sunrise,
        data.sunset,
        data.humidity,
        data.wind_mph,
        data.uv,
        data.forecast
      )
    );
  } catch (error) {
    console.error("Error combining data:", error);
    throw error;
  }
}

//landing page for loading first weather ui
searchIcon.addEventListener("click", async (event) => {
  event.preventDefault();

  const city = userCity.value;

  await combinedData(city);
});

//loading weather ui after initial one
body.addEventListener("click", async (event) => {
  let userCity2;
  try {
    userCity2 = document.getElementById("city2");
    if (event.target.matches(".searchIcon2 img")) {
      console.log("search  2 clicked!");
      event.preventDefault();

      const city = userCity2.value;
      await combinedData(city);

      const existingWeatherUi = document.querySelector(".weatherUi");
      if (existingWeatherUi) {
        existingWeatherUi.remove();
      }
    }
  } catch (error) {
    console.error("Error handling event:", error);
    if (userCity2) {
      userCity2.value = "";
      userCity2.setAttribute("placeholder", "Not valid city");
    }
  }
});

//temp button toggling and logic
body.addEventListener("click", (event) => {
  handleCurrentTemp(event, dataObj, onCelsius);
});
