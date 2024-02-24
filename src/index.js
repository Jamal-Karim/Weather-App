console.log('hello world');

async function getData(){
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=9da97e80930143a38c213928241202&q=corona&days=3');

    const data = await response.json();

    console.log(data);

    return data;
}

getData();