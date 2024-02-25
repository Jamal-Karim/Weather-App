import { getLocationData } from "./location.js";
import { getTempData } from "./temp.js";

export async function getData(){
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=9da97e80930143a38c213928241202&q=corona&days=3');

    const data = await response.json();

    console.log(data);

    return data;
}

async function combinedData(){
    const apiCall = await getData();
    const location = await getLocationData(apiCall);
    const tempData = await getTempData(apiCall);

    const data = {...location, ...tempData};

    console.log(data);
}

combinedData();