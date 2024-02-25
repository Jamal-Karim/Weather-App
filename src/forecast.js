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
            const {temp_f, temp_c, condition, time} = data.forecast.forecastday[1].hour[hrsArr[i] - 23];
            const {text} = condition;
            const splicedTime = time.slice(11,16);
            forecast[hrsArr[i]] = {temp_f, temp_c, text, splicedTime};
        } else {
            const {temp_f, temp_c, condition, time} = data.forecast.forecastday[0].hour[hrsArr[i]];
            const {text} = condition;
            const splicedTime = time.slice(11,16);
            forecast[hrsArr[i]] = {temp_f, temp_c, text, splicedTime};
        }
    }


    return {forecast};
}