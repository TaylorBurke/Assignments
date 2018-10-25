

async function getAirData(lat, lng){
    const breezeResponse = await fetch
    (`https://api.breezometer.com/baqi/?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}&key=d654b7a536cd449ba7f5d924a1757f30`)
    

    if (Math.floor(breezeResponse.status/100) !== 2) {
        throw new Error(`invalid status code ${breezeResponse.status}`) 
    }

    return await breezeResponse.json()
}

export default getAirData;