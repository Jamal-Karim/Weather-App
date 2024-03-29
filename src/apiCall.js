import { getLocationData } from "./location.js";
import { getTempData } from "./temp.js";
import { getForecastData } from "./forecast.js";
import { loadWeatherUi } from "./loadUi.js";

let dataObj;
export { dataObj };
const body = document.querySelector("body");

async function getData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=9da97e80930143a38c213928241202&q=${city}&days=3`
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

export async function combinedData(city) {
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
