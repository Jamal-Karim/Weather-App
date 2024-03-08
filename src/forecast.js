export async function getForecastData(data) {
  const dateTime = parseInt(data.current.last_updated.slice(11, 13));

  const firstHr = dateTime + 1;
  const secondHr = dateTime + 2;
  const thirdHr = dateTime + 3;
  const fourthHr = dateTime + 4;

  let hrsArr = [firstHr, secondHr, thirdHr, fourthHr];

  let forecast = {};

  for (let i = 0; i < hrsArr.length; i++) {
    if (hrsArr[i] > 23) {
      const { temp_f, temp_c, condition, time } =
        data.forecast.forecastday[1].hour[hrsArr[i] - 24]; //changed this line, check if bug occurs in time
      const { text } = condition;
      let updatedTime = parseInt(time.slice(11, 13));
      if (updatedTime === 0) {
        updatedTime = "12:00AM";
      } else if (updatedTime <= 11) {
        updatedTime = `${updatedTime}:00AM`;
      } else if (updatedTime === 12) {
        updatedTime = "12:00PM";
      } else {
        updatedTime -= 12;
        updatedTime = `${updatedTime}:00PM`;
      }
      forecast[hrsArr[i]] = { temp_f, temp_c, text, updatedTime };
    } else {
      const { temp_f, temp_c, condition, time } =
        data.forecast.forecastday[0].hour[hrsArr[i]];
      const { text } = condition;
      let updatedTime = parseInt(time.slice(11, 13));
      if (updatedTime === 0) {
        updatedTime = "12:00AM";
      } else if (updatedTime <= 11) {
        updatedTime = `${updatedTime}:00AM`;
      } else if (updatedTime === 12) {
        updatedTime = "12:00PM";
      } else {
        updatedTime -= 12;
        updatedTime = `${updatedTime}:00PM`;
      }
      forecast[hrsArr[i]] = { temp_f, temp_c, text, updatedTime };
    }
  }

  return { forecast };
}

export function createForecastDiv(forecastObj) {
  const forecastDiv = document.createElement("div");
  forecastDiv.classList.add("forecast");

  //make each hour section

  //hour1
  const hour1 = document.createElement("div");
  hour1.classList.add("hour");

  const hour1Time = document.createElement("p");
  hour1Time.classList.add("time");
  hour1Time.textContent = forecastObj[20].updatedTime;
  hour1.appendChild(hour1Time);

  const hour1Img = document.createElement("img");
  hour1Img.src = "/src/images/weatherConditions/sun.svg";
  hour1.appendChild(hour1Img);

  const hour1Temp = document.createElement("p");
  hour1Temp.classList.add("forecastTemp");
  hour1Temp.textContent = `${forecastObj[20].temp_f} °F`;
  hour1.appendChild(hour1Temp);

  forecastDiv.appendChild(hour1);

  //hour2
  const hour2 = document.createElement("div");
  hour2.classList.add("hour");

  const hour2Time = document.createElement("p");
  hour2Time.classList.add("time");
  hour2Time.textContent = forecastObj[21].updatedTime;
  hour2.appendChild(hour2Time);

  const hour2Img = document.createElement("img");
  hour2Img.src = "/src/images/weatherConditions/cloud.svg";
  hour2.appendChild(hour2Img);

  const hour2Temp = document.createElement("p");
  hour2Temp.classList.add("forecastTemp");
  hour2Temp.textContent = `${forecastObj[21].temp_f} °F`;
  hour2.appendChild(hour2Temp);

  forecastDiv.appendChild(hour2);

  //hour3
  const hour3 = document.createElement("div");
  hour3.classList.add("hour");

  const hour3Time = document.createElement("p");
  hour3Time.classList.add("time");
  hour3Time.textContent = forecastObj[22].updatedTime;
  hour3.appendChild(hour3Time);

  const hour3Img = document.createElement("img");
  hour3Img.src = "/src/images/weatherConditions/cloud.svg";
  hour3.appendChild(hour3Img);

  const hour3Temp = document.createElement("p");
  hour3Temp.classList.add("forecastTemp");
  hour3Temp.textContent = `${forecastObj[22].temp_f} °F`;
  hour3.appendChild(hour3Temp);

  forecastDiv.appendChild(hour3);

  //hour4
  const hour4 = document.createElement("div");
  hour4.classList.add("hour");

  const hour4Time = document.createElement("p");
  hour4Time.classList.add("time");
  hour4Time.textContent = forecastObj[23].updatedTime;
  hour4.appendChild(hour4Time);

  const hour4Img = document.createElement("img");
  hour4Img.src = "/src/images/weatherConditions/sun.svg";
  hour4.appendChild(hour4Img);

  const hour4Temp = document.createElement("p");
  hour4Temp.classList.add("forecastTemp");
  hour4Temp.textContent = `${forecastObj[23].temp_f} °F`;
  hour4.appendChild(hour4Temp);

  forecastDiv.appendChild(hour4);

  return forecastDiv;
}
