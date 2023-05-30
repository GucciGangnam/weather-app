//IMPORTS 
    import { buildPageSkeleton } from "./display-data.js";
    import { getIpLocationData } from "./fetch-data.js";


// on page load. fun pageload function. 1. get ip. 2. get ip location data. 3. build page skeleton. 4. fill page with data.
async function pageLoad() {
    let data = await getIpLocationData();
    buildPageSkeleton(data);
}
pageLoad();











//DELETE ME  import 



// getIpLocationData(); 

// async function getIpLocationDataTime() {
//     let data = await getIpLocationData();
//     let location = data[0].location.name;
//     let time = data[0].location.localtime.slice(-5);
//     console.log(time);
//     console.log(location);
//     return [time, location];
// }
// getIpLocationDataTime();
