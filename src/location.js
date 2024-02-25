export async function getLocationData(data) {
    const location = data.location.name;

    const condition = data.current.condition.text;

    const sunrise = data.forecast.forecastday[0].astro.sunrise;

    const sunset = data.forecast.forecastday[0].astro.sunset;

    return {location, condition, sunrise, sunset};
}