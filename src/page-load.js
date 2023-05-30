// get users IP adress
async function getIp() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.log("error getting ip");
    }
}
export { getIp };
