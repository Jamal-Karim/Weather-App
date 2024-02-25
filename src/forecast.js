export async function getForecastData(data){
    const dateTime = parseInt(data.current.last_updated.slice(11,13));

    const firstHr = dateTime + 1;
    const secondHr = dateTime + 2;
    const thirdHr = dateTime + 3;
    const fourthHr = dateTime + 4;

    let hrsArr = [firstHr, secondHr, thirdHr, fourthHr];

    let forecast = {};

    for(let i = 0; i < hrsArr.length; i++){
        if(hrsArr[i] > 23){
            forecast[hrsArr[i]] = data.forecast.forecastday[1].hour[hrsArr[i] - 23]
        } else {
            forecast[hrsArr[i]] = data.forecast.forecastday[0].hour[hrsArr[i]];
        }
    }


    return {forecast};
}