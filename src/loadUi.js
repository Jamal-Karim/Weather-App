import { createForecastDiv } from "./forecast";
import { createHumidityWindUvContainer } from "./temp";

export function loadWeatherUi(
  weatherSvg,
  fahrenheit,
  celsius,
  cityName,
  weatherText,
  sunRise,
  sunSet,
  humidity,
  wind_mph,
  uv,
  forecast
) {
  const backgroundImg = document.querySelector(".mainImg");
  const landingDiv = document.querySelector(".titleContainer");

  backgroundImg.style.display = "none";
  landingDiv.style.display = "none";

  //top div
  const weatherUi = document.createElement("div");
  weatherUi.classList.add("weatherUi");

  //header forecast
  const header = document.createElement("div");
  header.classList.add("headerForecast");

  //input div code
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("inputContainer2");

  const input = document.createElement("input");
  input.setAttribute("id", "city2");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter a city!");
  inputContainer.appendChild(input);

  const searchDiv = document.createElement("div");
  searchDiv.classList.add("searchIcon2");
  const searchImg = document.createElement("img");
  searchImg.src = "/src/images/searchIcon.svg";
  searchDiv.appendChild(searchImg);
  inputContainer.appendChild(searchDiv);

  //appending input container div to header
  header.appendChild(inputContainer);

  //temp buttons
  const tempBtns = document.createElement("div");
  tempBtns.classList.add("tempBtns");

  const F = document.createElement("button");
  F.textContent = "F";
  F.classList.add("tempBtn");
  F.classList.add("activeBtn");
  F.classList.add("F");
  tempBtns.appendChild(F);

  const C = document.createElement("button");
  C.textContent = "C";
  C.classList.add("tempBtn");
  C.classList.add("C");
  tempBtns.appendChild(C);

  //appending temp buttons to header
  header.appendChild(tempBtns);

  //header section done
  weatherUi.appendChild(header);

  //Weather stats container
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("statsContainer");

  statsContainer.appendChild(
    createLeftContainer(
      weatherSvg,
      fahrenheit,
      celsius,
      cityName,
      weatherText,
      sunRise,
      sunSet
    )
  );

  const rightContainer = document.createElement("div");
  rightContainer.classList.add("rightContainer");

  rightContainer.appendChild(createForecastDiv(forecast));
  rightContainer.appendChild(
    createHumidityWindUvContainer(humidity, wind_mph, uv)
  );

  statsContainer.appendChild(rightContainer);

  weatherUi.appendChild(statsContainer);

  return weatherUi;
}

function createLeftContainer(
  weatherSvg,
  fahrenheit,
  celsius,
  cityName,
  weatherText,
  sunRise,
  sunSet
) {
  //left section of ui
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("leftContainer");

  const currentStats = document.createElement("div");
  currentStats.classList.add("currStats");

  const weatherCondition = document.createElement("div");
  weatherCondition.classList.add("weatherCondition");

  const weatherImg = document.createElement("img");
  weatherImg.src = `/src/images/weatherConditions/${chooseSvg(weatherSvg)}`; //change to parameter
  weatherCondition.appendChild(weatherImg);

  //add weather condition div
  currentStats.appendChild(weatherCondition);

  const temperature = document.createElement("h1");
  temperature.classList.add("temp");
  //append temp
  currentStats.appendChild(temperature);

  const place = document.createElement("p");
  place.classList.add("place");
  place.textContent = `${cityName}, ${weatherText}`;

  //append place
  currentStats.appendChild(place);

  const sunTimes = document.createElement("div");
  sunTimes.classList.add("sunTimes");

  //sunrise
  const sunRiseDiv = document.createElement("div");
  sunRiseDiv.classList.add("sunrise");

  const sunRiseText = document.createElement("p");
  sunRiseText.classList.add("sunriseTime");
  sunRiseText.textContent = sunRise.slice(1);

  const sunRiseSvg = document.createElement("img");
  sunRiseSvg.src = "/src/images/sunrise.svg";

  sunRiseDiv.appendChild(sunRiseText);
  sunRiseDiv.appendChild(sunRiseSvg);

  //sunset
  const sunSetDiv = document.createElement("div");
  sunSetDiv.classList.add("sunset");

  const sunSetText = document.createElement("p");
  sunSetText.classList.add("sunsetTime");
  sunSetText.textContent = sunSet.slice(1);

  const sunSetSvg = document.createElement("img");
  sunSetSvg.src = "/src/images/sunset.svg";

  sunSetDiv.appendChild(sunSetText);
  sunSetDiv.appendChild(sunSetSvg);

  //append suntimes div to currstats
  sunTimes.appendChild(sunRiseDiv);
  sunTimes.appendChild(sunSetDiv);

  currentStats.appendChild(sunTimes);

  //left container done
  leftContainer.appendChild(currentStats);

  return leftContainer;
}

export function chooseSvg(condition) {
  condition = condition.toLowerCase();

  if (condition.includes("sunny") || condition.includes("clear")) {
    return "sun.svg";
  } else if (condition.includes("cloudy") || condition.includes("overcast")) {
    return "cloud.svg";
  } else if (
    condition.includes("drizzle") ||
    condition.includes("rain") ||
    condition.includes("mist")
  ) {
    return "rain.svg";
  } else if (condition.includes("sleet")) {
    return "sleet.svg";
  } else if (condition.includes("snow")) {
    return "snow.svg";
  } else if (condition.includes("fog")) {
    return "fog.svg";
  } else if (condition.includes("thunder")) {
    return "thunder.svg";
  }
}
