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
            let updatedTime = parseInt(time.slice(11,13));
            if(updatedTime === 0){
                updatedTime = '12:00 AM';
            } else if (updatedTime <= 11){
                updatedTime = `${updatedTime}:00 AM`;
            } else if (updatedTime === 12 ){
                updatedTime = '12:00 PM';
            } else{
                updatedTime -= 12;
                updatedTime = `${updatedTime}:00 PM`;
            }
            forecast[hrsArr[i]] = {temp_f, temp_c, text, updatedTime};
        } else {
            const {temp_f, temp_c, condition, time} = data.forecast.forecastday[0].hour[hrsArr[i]];
            const {text} = condition;
            let updatedTime = parseInt(time.slice(11,13));
            if(updatedTime === 0){
                updatedTime = '12:00 AM';
            } else if (updatedTime <= 11){
                updatedTime = `${updatedTime}:00 AM`;
            } else if (updatedTime === 12 ){
                updatedTime = '12:00 PM';
            } else{
                updatedTime -= 12;
                updatedTime = `${updatedTime}:00 PM`;
            }
            forecast[hrsArr[i]] = {temp_f, temp_c, text, updatedTime};
        }
    }


    return {forecast};
}