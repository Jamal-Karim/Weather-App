export async function getLocationData(data) {
    const location = data.location.name;

    const condition = data.current.condition.text;

    return {location, condition};
}