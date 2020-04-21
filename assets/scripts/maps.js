/** Single Map Marker and infoWindow */

/* === WHY?
To place map markers of places I've travelled to in both business and pleasure, giving the audience of what I've done, where, and why.
Map Marker -- 'hover' --> Tool-tip -- 'click' --> Overview Modal -- 'click Detail Button' --> Detail Modal || 'click D3 Button' --> Graphs...


=== WHAT?
Google Maps API - Bill Traversy @ Traversy Media: https://www.youtube.com/watch?v=Zxf1mnP5zcw and Code Institute Walkthrough by Matt Rudge.
Added several Locations/Markers with iconImage, and Content ("tool-tips")
Added Mouseover and Mouseout as it's user-friendly and performs nicer than Click
Saving Click for JS Modal (Code Institute Milestone Project II)

OpenWeather API - Shanjah Raj: https://www.youtube.com/watch?v=GXrDEA3SIOQ&t=472s and OpenWeather API Doc: https://openweathermap.org/api/one-call-api?gclid=Cj0KCQjws_r0BRCwARIsAMxfDRiC6VCy8j0Jlfc27LsuhT9RbEdMJu3T0d9Z12oRrBRMFemuwWGUKIMaAj5DEALw_wcB
Using Lat Lon from marker.position Object converted to String, formatted, and converted to an Array used by the fetch-then-catch Promise.

D3 API - 

=== HOW?
HTML: Create the navigation elements with relevant classes and id's, to be referenced by CSS and modified via JS.
CSS: Style the Google Maps navigation elements, .gm-style... classes.
JS: Create and call custom functions, ZoomControl, MapType Control, and FullScreenControl.
*/

function initMap() {
    let home = { lat: 53.274346, lng: -6.348835 }; // My home coords for centering the map, and for marking my home
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: home,
        disableDefaultUI: true,
    }); // Create a new Map and center on Home

    const weatherInfo = `<div class="weather" id="weather"></div>`;
    const toolTipButtons = `<br><div class="modal__actions"><button class="btn btn--passive">Overview</button><button class="btn btn--success">Graphs</button></div>`;

    let markersArray = [
        {
            coords: home,
            iconImage: '/assets/images/150px-IRL_Dublin_flag.svg.png',
            content: `<h3>Dublin, Ireland</h3>${weatherInfo}<hr><p>6 Oldcourt Close, Ballycullen, D24 RHY2</p><p>Dublin, Ireland</p>${toolTipButtons}`
        },
        {
            coords: { lat: 51.5074, lng: 0.1278 },
            content: `<p>London, England: 51.5074° N, 0.1278°</p>${weatherInfo} ${toolTipButtons}`
        },
        {
            coords: { lat: 54.5973, lng: -5.9301 },
            content: `<p>Belfast, Northern Ireland: 54.5973° N, 5.9301° W</p>${weatherInfo} ${toolTipButtons}`
        },
        {
            coords: { lat: 51.4816, lng: -3.1791 },
            content: `<p>Cardiff, Wales: 51.4816° N, 3.1791° W</p>${weatherInfo} ${toolTipButtons}`
        },
        {
            coords: { lat: 55.9533, lng: -3.1883 },
            content: `<p>Edinburg, Scotland: 55.9533° N, 3.1883° W</p>${weatherInfo} ${toolTipButtons}`
        },
        {
            coords: { lat: 1.3521, lng: 103.8198 },
            content: `<p>Singapore, Singapore: 1.3521° N, 103.8198° E</p>${weatherInfo} ${toolTipButtons}`
        },
        {
            coords: { lat: 59.3293, lng: 18.0686 },
            content: `<p>Stockholm, Sweden: 59.3293° N, 18.0686° E</p>${weatherInfo} ${toolTipButtons}`
        }
    ];

    for (let i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    }

    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            iconImage: props.iconImage,
            content: props.content
        });

        // Check for separate icon for this marker (see if iconImage exists)
        if (props.iconImage) {
            // Set iconImage
            marker.setIcon(props.iconImage);
        }

        // Check for Content for "tool-tip"
        if (props.content) {
            // Set Content for each Marker
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener("mouseover", function () {
                infoWindow.open(map, marker);

                let markerString = String(marker.position); // Convert marker.position Object to String to manipulate the lat and lon for the OpenWeather API call.
                markerString = markerString.replace(/[() ]/g, "");  // Remove whitespace and parenthesis () from markerString: (lat, lon).
                /* markerString = markerString.split(" ").join(""); // Remove whitespace in middle of markerString: lat, lon. */
                markerStringArray = markerString.split(","); // Split the String into an Array to provide the OpenWeather API call correctly formatted lat and lon.

                /* console.log(markerString, markerStringArray); */

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${markerStringArray[0]}&lon=${markerStringArray[1]}&units=metric&appid=4788a47d724b35cf9cc4e281a1893b4c`)
                    .then(response => response.json())
                    .then(data => {
                        let tempValue = parseInt(data['main']['temp']);
                        let descValue = data['weather'][0]['description'];
                        let airPressure = data['main']['pressure'];
                        let nameValue = data['name'];

                        /* console.log(tempValue, descValue, nameValue); */
                        if (document.getElementById("weather")) {
                            let weatherID = document.getElementById("weather").id = "weather" + nameValue;
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                            console.log("If: ", weatherID);
                        } else {
                            let weatherID = "weather" + nameValue;
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                            console.log("Else :", weatherID);
                        }

                        /* let weatherID = document.getElementById("weather").id = "weather" + nameValue; */

                        /* console.log(weatherID); */

                        /* document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue; */

                        /* console.log(marker.content, marker.position); */
                    })
                    .catch(err => console.log(err));
            });

            /* Added a timeout to give the user enough time to notice and click on the buttons */
            marker.addListener("mouseout", function () {
                setTimeout(function () {
                    infoWindow.close(map, marker);
                }, 3000);
            });

            /* Click ensures the tool-tip remains open, enabling us to click on the buttons before the tool-tip vanishes (mouseover, mouseout) */
            /*
                        marker.addListener("click", function () {
                            infoWindow.open(map, marker);
                        }); */
        }
    }

    /* JSON returned from OpenWeather API Call for { lat: 53.274346, lng: -6.348835 } (Firhouse, Dublin, Ireland)
    https://api.openweathermap.org/data/2.5/weather?lat=53.274346&lon=-6.348835&units=metric&appid=4788a47d724b35cf9cc4e281a1893b4c

        {
            "coord": {
                "lon": -6.35, "lat": 53.27
            },
            "weather": [{
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }],
            "base": "stations",
            "main": {
                "temp": 13.61,
                "feels_like": 9.16,
                "temp_min": 12.78,
                "temp_max": 14,
                "pressure": 1020,
                "humidity": 54
            },
            "visibility": 10000, "wind": {
                "speed": 4.6,
                "deg": 80
            },
            "clouds": {
                "all": 13
            }, "dt": 1587489390, "sys": {
                "type": 1,
                "id": 1568,
                "country": "IE",
                "sunrise": 1587445893,
                "sunset": 1587497767
            },
            "timezone": 3600,
            "id": 3315276,
            "name": "Firhouse",
            "cod": 200
        }
    */


    /* === WHY?
    To control the style of the Google Map navigation elements we replace the default controls.
    
    === WHAT?
    Google Maps API - Replacing Default Controls: https://developers.google.com/maps/documentation/javascript/examples/control-replacement
    
    === HOW?
    HTML: Create the navigation elements with relevant classes and id's, to be referenced by CSS and modified via JS.
    CSS: Style the Google Maps navigation elements, .gm-style... classes.
    JS: Create and call custom functions, ZoomControl, MapType Control, and FullScreenControl.
    */
    initZoomControl(map);
    initMapTypeControl(map);
    initFullscreenControl(map);
}

function initZoomControl(map) {
    document.querySelector('.zoom-control-in').onclick = function () {
        map.setZoom(map.getZoom() + 1);
    };
    document.querySelector('.zoom-control-out').onclick = function () {
        map.setZoom(map.getZoom() - 1);
    };
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(
        document.querySelector('.zoom-control'));
}

function initMapTypeControl(map) {
    let mapTypeControlDiv = document.querySelector('.maptype-control');
    document.querySelector('.maptype-control-map').onclick = function () {
        mapTypeControlDiv.classList.add('maptype-control-is-map');
        mapTypeControlDiv.classList.remove('maptype-control-is-satellite');
        map.setMapTypeId('roadmap');
    };

    document.querySelector('.maptype-control-satellite').onclick =
        function () {
            mapTypeControlDiv.classList.remove('maptype-control-is-map');
            mapTypeControlDiv.classList.add('maptype-control-is-satellite');
            map.setMapTypeId('hybrid');
        };

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        mapTypeControlDiv);
}

function initFullscreenControl(map) {
    let elementToSendFullscreen = map.getDiv().firstChild;
    let fullscreenControl = document.querySelector('.fullscreen-control');
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
        fullscreenControl);

    fullscreenControl.onclick = function () {
        if (isFullscreen(elementToSendFullscreen)) {
            exitFullscreen();
        } else {
            requestFullscreen(elementToSendFullscreen);
        }
    };

    document.onwebkitfullscreenchange =
        document.onmsfullscreenchange =
        document.onmozfullscreenchange =
        document.onfullscreenchange = function () {
            if (isFullscreen(elementToSendFullscreen)) {
                fullscreenControl.classList.add('is-fullscreen');
            } else {
                fullscreenControl.classList.remove('is-fullscreen');
            }
        };
}

function isFullscreen(element) {
    return (document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement) == element;
}

function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullScreen) {
        element.msRequestFullScreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen();
    }
}