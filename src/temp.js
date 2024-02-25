export async function getTempF(data){
    const tempF = data.current.temp_f;

    return {tempF};
}