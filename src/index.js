import { getLocationData } from "./location.js";
import { getTempData } from "./temp.js";
import { getForecastData } from "./forecast.js";
import { loadWeatherUi } from "./loadUi.js";

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
  const userCity2 = document.getElementById("city2");
  if (event.target.matches(".searchIcon2 img")) {
    console.log("search  2 clicked!");
    event.preventDefault();

    const city = userCity2.value;
    const existingWeatherUi = document.querySelector(".weatherUi");
    if (existingWeatherUi) {
      existingWeatherUi.remove();
    }

    await combinedData(city);
  }
});

//temp button toggling and logic
body.addEventListener("click", async (event) => {
  const target = event.target;
  const tempStat = document.querySelector(".temp");

  if (target.classList.contains("tempBtn")) {
    const fBtn = document.querySelector(".F");
    const cBtn = document.querySelector(".C");

    if (target === fBtn) {
      fBtn.classList.add("activeBtn");
      cBtn.classList.remove("activeBtn");
      onCelsius = false;
      if (tempStat) {
        tempStat.textContent = `${dataObj.tempF} °F`;
      }
    } else if (target === cBtn) {
      cBtn.classList.add("activeBtn");
      fBtn.classList.remove("activeBtn");
      onCelsius = true;
      if (tempStat) {
        tempStat.textContent = `${dataObj.tempC} °C`;
      }
    }
  }
});
