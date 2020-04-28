let home = "Should not be undefined...";

let geoloc = document.getElementById("geoloc");

let getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            let returnPosition = navigator.geolocation.getCurrentPosition(showPosition);
            console.log(returnPosition);
        } else {
            geoloc.innerHTML = "Geolocation is not supported by this browser.";
            console.log("Geolocation is not supported by this browser.");
        }
        const error = false;

        if (!error) {
            resolve();
        } else {
            reject("Error: Something went wrong... :-( ...");
        }
    })
    
}

let showPosition = (position) => {
    console.log(position);
    console.log(position.coords);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    geoloc.innerHTML = `<p>Position Latitude: ${position.coords.latitude}</p><p>Position Longitude: ${position.coords.longitude}</p>`
    geoloc.innerHTML += `<p>{ lat: ${position.coords.latitude}, lng: ${position.coords.longitude} }</p>`;
    returnPosition = `{ lat: ${ position.coords.latitude }, lng: ${ position.coords.longitude }`;
    return returnPosition;
}

let showError = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.")
            break;
    }
}

console.log(getLocation());
console.log(home);
// let homeValue = getLocation().then(console.log(home)).catch(error => console.log(error));
// < !--getLocation JS Script-- >
// <script src="/test/geoLocTest.js"></script>