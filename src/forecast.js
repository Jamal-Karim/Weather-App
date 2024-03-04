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
        data.forecast.forecastday[1].hour[hrsArr[i] - 23];
      const { text } = condition;
      let updatedTime = parseInt(time.slice(11, 13));
      if (updatedTime === 0) {
        updatedTime = "12:00 AM";
      } else if (updatedTime <= 11) {
        updatedTime = `${updatedTime}:00 AM`;
      } else if (updatedTime === 12) {
        updatedTime = "12:00 PM";
      } else {
        updatedTime -= 12;
        updatedTime = `${updatedTime}:00 PM`;
      }
      forecast[hrsArr[i]] = { temp_f, temp_c, text, updatedTime };
    } else {
      const { temp_f, temp_c, condition, time } =
        data.forecast.forecastday[0].hour[hrsArr[i]];
      const { text } = condition;
      let updatedTime = parseInt(time.slice(11, 13));
      if (updatedTime === 0) {
        updatedTime = "12:00 AM";
      } else if (updatedTime <= 11) {
        updatedTime = `${updatedTime}:00 AM`;
      } else if (updatedTime === 12) {
        updatedTime = "12:00 PM";
      } else {
        updatedTime -= 12;
        updatedTime = `${updatedTime}:00 PM`;
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
  hour1Time.textContent = "1:00 PM";
  hour1.appendChild(hour1Time);

  const hour1Img = document.createElement("img");
  hour1Img.src = "/src/images/sun.svg";
  hour1.appendChild(hour1Img);

  const hour1Temp = document.createElement("p");
  hour1Temp.classList.add("forecastTemp");
  hour1Temp.textContent = "86 °F";
  hour1.appendChild(hour1Temp);

  forecastDiv.appendChild(hour1);

  //hour2
  const hour2 = document.createElement("div");
  hour2.classList.add("hour");

  const hour2Time = document.createElement("p");
  hour2Time.classList.add("time");
  hour2Time.textContent = "2:00 PM";
  hour2.appendChild(hour2Time);

  const hour2Img = document.createElement("img");
  hour2Img.src = "/src/images/cloud.svg";
  hour2.appendChild(hour2Img);

  const hour2Temp = document.createElement("p");
  hour2Temp.classList.add("forecastTemp");
  hour2Temp.textContent = "86 °F";
  hour2.appendChild(hour2Temp);

  forecastDiv.appendChild(hour2);

  //hour3
  const hour3 = document.createElement("div");
  hour3.classList.add("hour");

  const hour3Time = document.createElement("p");
  hour3Time.classList.add("time");
  hour3Time.textContent = "3:00 PM";
  hour3.appendChild(hour3Time);

  const hour3Img = document.createElement("img");
  hour3Img.src = "/src/images/cloud.svg";
  hour3.appendChild(hour3Img);

  const hour3Temp = document.createElement("p");
  hour3Temp.classList.add("forecastTemp");
  hour3Temp.textContent = "46 °F";
  hour3.appendChild(hour3Temp);

  forecastDiv.appendChild(hour3);

  //hour4
  const hour4 = document.createElement("div");
  hour4.classList.add("hour");

  const hour4Time = document.createElement("p");
  hour4Time.classList.add("time");
  hour4Time.textContent = "4:00 PM";
  hour4.appendChild(hour4Time);

  const hour4Img = document.createElement("img");
  hour4Img.src = "/src/images/sun.svg";
  hour4.appendChild(hour4Img);

  const hour4Temp = document.createElement("p");
  hour4Temp.classList.add("forecastTemp");
  hour4Temp.textContent = "46 °F";
  hour4.appendChild(hour4Temp);

  forecastDiv.appendChild(hour4);

  return forecastDiv;
}
