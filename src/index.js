import { getLocationData } from "./location.js";
import { getTempData } from "./temp.js";
import { getForecastData } from "./forecast.js";

import './styles/main.css';

const errorMessage = document.getElementById('error');
const userCity = document.getElementById('city');
const searchIcon = document.querySelector('.searchIcon');

userCity.addEventListener('focus', () => {
    userCity.removeAttribute('placeholder');
})

userCity.addEventListener('blur', () => {
    if(!userCity.value.trim()){
        userCity.setAttribute('placeholder', 'Enter a city to get started!');
    }
})

export async function getData(city){

    try{

        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9da97e80930143a38c213928241202&q=${city}&days=3`);

        if(!response.ok){
            userCity.value = '';
            userCity.setAttribute('placeholder','Please enter valid city');
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
    
        console.log(data);
    
        return data;

    } catch(error) {
        console.error('Error fetching the data:', error);
        throw error;
    }
        
}

async function combinedData(city){

    try{
        const apiCall = await getData(city);
        const location = await getLocationData(apiCall);
        const tempData = await getTempData(apiCall);
    
        const forecast = await(getForecastData(apiCall));
        console.log(forecast);
    
        const data = {...location, ...tempData, ...forecast};
    
        console.log(data);
    } catch(error) {
        console.error('Error combining data:', error)
    }
    
}

searchIcon.addEventListener('click', (event) => {
    event.preventDefault();

    const city = userCity.value;

    errorMessage.textContent = '';

    combinedData(city);
})