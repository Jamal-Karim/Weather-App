export function handleCurrentTemp(event, dataObj, onCelsius) {
  const target = event.target;
  const tempStat = document.querySelector(".temp");
  const hourElements = [
    document.getElementById("forecastTemp1"),
    document.getElementById("forecastTemp2"),
    document.getElementById("forecastTemp3"),
    document.getElementById("forecastTemp4"),
  ];

  if (target.classList.contains("tempBtn")) {
    const fBtn = document.querySelector(".F");
    const cBtn = document.querySelector(".C");

    if (target === fBtn) {
      toggleActiveBtn(fBtn, cBtn);
      onCelsius = false;
      updateTemperatureDisplay(tempStat, dataObj.tempF, onCelsius);
      handleForecastTemp(dataObj, hourElements, onCelsius);
    } else if (target === cBtn) {
      toggleActiveBtn(cBtn, fBtn);
      onCelsius = true;
      updateTemperatureDisplay(tempStat, dataObj.tempC, onCelsius);
      handleForecastTemp(dataObj, hourElements, onCelsius);
    }
  }
}

function toggleActiveBtn(activeBtn, inactiveBtn) {
  activeBtn.classList.add("activeBtn");
  inactiveBtn.classList.remove("activeBtn");
}

function updateTemperatureDisplay(tempStat, temperature, isCelsius) {
  if (tempStat) {
    tempStat.textContent = `${temperature} ${isCelsius ? "°C" : "°F"}`;
  }
}

function handleForecastTemp(dataObj, hourElements, isCelsius) {
  const keys = Object.keys(dataObj.forecast);
  keys.forEach((key, index) => {
    const temperature = isCelsius
      ? dataObj.forecast[key].temp_c
      : dataObj.forecast[key].temp_f;
    const parsedTemp = parseInt(temperature.toString().slice(0, 2));
    hourElements[index].textContent = `${parsedTemp} ${
      isCelsius ? "°C" : "°F"
    }`;
  });
}
