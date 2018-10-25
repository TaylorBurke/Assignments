// for docs:

// https://developers.google.com/maps/documentation/geocoding/intro#GeocodingRequests


// async makes the function automatically return a promise


import Input from './Input';



async function getCoordinates(address){
    const geoCodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyAIXfsEKJ-Z-wo2QOI9l8-zBdKbHWpwVrc`)
    
    if (geoCodeResponse.status != 200) {
        throw new Error(`invalid status code ${geoCodeResponse.status}`) 
    }
    const result = (await geoCodeResponse.json()).results[0]
    if (!result) {
        // throw new Error("no result found")
        // OR

        return null
    }

    const {lat, lng} = result.geometry.location

    return {lat, lng}
}

console.log(getCoordinates('362 W Concord Pl Saratoga Springs UT'));

export default getCoordinates;