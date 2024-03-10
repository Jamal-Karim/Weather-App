import { handleCurrentTemp } from "./buttons.js";
import { combinedData, dataObj } from "./apiCall.js";

import "./styles/main.css";

const body = document.querySelector("body");
const userCity = document.getElementById("city");
const searchIcon = document.querySelector(".searchIcon");

let onCelsius = false;
export { onCelsius };

userCity.addEventListener("focus", () => {
  userCity.removeAttribute("placeholder");
});

userCity.addEventListener("blur", () => {
  if (!userCity.value.trim()) {
    userCity.setAttribute("placeholder", "Enter a city to get started!");
  }
});

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
