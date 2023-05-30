// imports 
    import { getIp } from "./page-load.js";



// fetch data based on current location 
async function getIpLocationData() {
    let userIP = await getIp();
    let responseCurrent = await fetch(`http://api.weatherapi.com/v1/current.json?key=a9811b07fc0241d8b7145620232505&q=${userIP}&aqi=no`)
    let responseForecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a9811b07fc0241d8b7145620232505&q=${userIP}&days=7&aqi=no&alerts=no`)
    let ipDataCurrent = await responseCurrent.json()
    let ipDataForecast = await responseForecast.json()
    console.log(ipDataCurrent)
    console.log(ipDataForecast)
    return [ipDataCurrent, ipDataForecast]
}
export { getIpLocationData };

// fetch data based on search request

async function getSearchLocationData(searchRequest) {
    let responseCurrent = await fetch(`http://api.weatherapi.com/v1/current.json?key=a9811b07fc0241d8b7145620232505&q=${searchRequest}&aqi=no`)
    let responseForecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a9811b07fc0241d8b7145620232505&q=${searchRequest}&days=7&aqi=no&alerts=no`)
    let searchDataCurrent = await responseCurrent.json()
    let searchDataForecast = await responseForecast.json()
    console.log(searchDataCurrent)
    console.log(searchDataForecast)
    return [searchDataCurrent, searchDataForecast]
}
export { getSearchLocationData };

// build page skeleton with no data. 

