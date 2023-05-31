//IMPORTS 
    import { buildPageSkeleton } from "./display-data.js";
    import { getIpLocationData } from "./fetch-data.js";
    import { displayBackground } from "./display-data.js";


// on page load. fun pageload function. 1. get ip. 2. get ip location data. 3. build page skeleton. 4. fill page with data.
async function pageLoad() {
    let data = await getIpLocationData();
    buildPageSkeleton(data);
    displayBackground(data);
}
pageLoad();



