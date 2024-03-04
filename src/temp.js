export async function getTempData(data) {
  const tempF = data.current.temp_f;
  const tempC = data.current.temp_c;
  const humidity = data.current.humidity;
  const wind_mph = data.current.wind_mph;
  const uv = data.current.uv;

  return { tempF, tempC, humidity, wind_mph, uv };
}
