import { getData } from "./index.js";

console.log('location found');

export async function getLocation() {
        const data = await getData();

        const location = data.location.name;

        console.log(location);

        return location;
}

getLocation();