export async function getTempData(data) {
  let tempF = data.current.temp_f;
  tempF = parseInt(tempF.toString().slice(0, 2));

  let tempC = data.current.temp_c;
  tempC = parseInt(tempC.toString().slice(0, 2));

  const humidity = data.current.humidity;
  const wind_mph = data.current.wind_mph;
  const uv = data.current.uv;

  return { tempF, tempC, humidity, wind_mph, uv };
}

export function createHumidityWindUvContainer(humidity, wind_mph, uv) {
  const humidityWindUvContainer = document.createElement("div");
  humidityWindUvContainer.classList.add("humidityWindUVContainer");

  //make humidity div
  const humidityContainer = document.createElement("div");
  humidityContainer.classList.add("humidity");

  const humidityIcon = document.createElement("img");
  humidityIcon.src = "images/humidity.svg";
  humidityContainer.appendChild(humidityIcon);

  const humidityText = document.createElement("h2");
  humidityText.textContent = `${humidity}%`;
  humidityContainer.appendChild(humidityText);

  //append humidity div
  humidityWindUvContainer.appendChild(humidityContainer);

  //make wind div
  const windContainer = document.createElement("div");
  windContainer.classList.add("wind");

  const windIcon = document.createElement("img");
  windIcon.src = "images/wind.svg";
  windContainer.appendChild(windIcon);

  const windText = document.createElement("h2");
  windText.textContent = `${wind_mph}mph`;
  windContainer.appendChild(windText);

  //append wind div
  humidityWindUvContainer.appendChild(windContainer);

  //make uv div
  const uvContainer = document.createElement("div");
  uvContainer.classList.add("uv");

  const uvIcon = document.createElement("img");
  uvIcon.src = "images/uv.svg";
  uvContainer.appendChild(uvIcon);

  const uvText = document.createElement("h2");
  uvText.textContent = uv;
  uvContainer.appendChild(uvText);

  //append uv div
  humidityWindUvContainer.appendChild(uvContainer);

  return humidityWindUvContainer;
}
