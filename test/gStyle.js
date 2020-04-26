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
    const toolTipButtons = `<br><div class="modalActions"><button class="button" id="buttonOver">Overview</button><button class="buttton" id="buttonStats">Statistics</button></div>`;

    let markersArray = [
        {
            coords: home,
            iconImage: '/assets/images/150px-IRL_Dublin_flag.svg.png',
            content: `<h3>Dublin, Ireland</h3>${weatherInfo}<hr><p>6 Oldcourt Close, Ballycullen, D24 RHY2</p><p>Dublin, Ireland</p>${toolTipButtons}`,
            name: "Dublin, Ireland",
            overview: `<div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        },
        {
            coords: { lat: 51.5074, lng: 0.1278 },
            content: `<p>London, England: 51.5074° N, 0.1278°</p>${weatherInfo} ${toolTipButtons}`,
            name: "London, England",
            overview: `<div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        },
        {
            coords: { lat: 54.5973, lng: -5.9301 },
            content: `<p>Belfast, Northern Ireland: 54.5973° N, 5.9301° W</p>${weatherInfo} ${toolTipButtons}`,
            name: "Belfast, Northern Ireland",
            overview: `<div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        },
        {
            coords: { lat: 51.4816, lng: -3.1791 },
            content: `<p>Cardiff, Wales: 51.4816° N, 3.1791° W</p>${weatherInfo} ${toolTipButtons}`,
            name: "Cardiff, Wales",
            overview: `<div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        },
        {
            coords: { lat: 55.9533, lng: -3.1883 },
            content: `<p>Edinburg, Scotland: 55.9533° N, 3.1883° W</p>${weatherInfo} ${toolTipButtons}`,
            name: "Edinburgh, Scotland",
            overview: `<div class="overview" id="overview">Edinburgh, Scotland - Overview</div>`,
            d3: `<div class="d3" id="d3">Edinburgh, Scotland - D3</div>`
        },
        {
            coords: { lat: 1.3521, lng: 103.8198 },
            content: `<p>Singapore, Singapore: 1.3521° N, 103.8198° E</p>${weatherInfo} ${toolTipButtons}`,
            name: "Singapore, Singapore",
            overview: `<div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        },
        {
            coords: { lat: 59.3293, lng: 18.0686 },
            content: `<p>Stockholm, Sweden: 59.3293° N, 18.0686° E</p>${weatherInfo} ${toolTipButtons}`,
            name: "Stockholm, Sweden",
            overview: `<div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
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
            content: props.content,
            name: props.name,
            overview: props.overview,
            d3: props.d3
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
                        let tempValue = parseInt(data["main"]["temp"]);
                        let descValue = data["weather"][0]["description"];
                        let airPressure = data["main"]["pressure"];
                        let nameValue = data["name"];

                        /* console.log(tempValue, descValue, nameValue); */
                        if (document.getElementById("weather")) {
                            let weatherID = document.getElementById("weather").id = "weather" + nameValue;
                            let buttonIDOver = document.getElementById("buttonOver").id = "buttonOver" + nameValue;
                            let buttonIDStats = document.getElementById("buttonStats").id = "buttonStats" + nameValue;
                            document.getElementById(buttonIDOver).className = "button"; // "Q & D Fix" to ensure the buttons are styled correctly.
                            document.getElementById(buttonIDStats).className = "button"; // "Q & D Fix" to ensure the buttons are styled correctly.
                            configureButtonEventHandlers(buttonIDOver, buttonIDStats);
                            //overviewButton(buttonIDOver);
                            //statisticsButton(buttonIDStats);

                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                        } else {
                            let weatherID = "weather" + nameValue;
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                            // Update weather data dynamically after each "Mouseover" on Map Marker.
                        }
                    })
                    .catch(err => console.log(err));
            });

            /* Added a timeout to give the user enough time to notice and click on the buttons */
            marker.addListener("mouseout", function () {
                setTimeout(function () {
                    infoWindow.close(map, marker);
                }, 3000);
            });
        };


        /* === WHY?
            To allow the client/end-user to click on buttons for further details to better understand the city/town (Overview), as well as relevant statistics about the place (Statistics).
    
        === WHAT?
            D3 API - Graphs in Scalable Vector Graphics: https://github.com/d3/d3#installing
    
        === HOW?
            HTML: Create the navigation elements with relevant classes and id's, to be referenced by CSS and modified via JS.
            CSS: Style the Google Maps navigation elements, .gm-style... classes.
            JS: Create and call custom functions, ZoomControl, MapType Control, and FullScreenControl.
        */

        const backdrop = document.getElementById("backdrop");

        const toggleBackdrop = () => {
            backdrop.classList.toggle("visible");
        };

        const addModal = document.getElementById("add-modal");

        const toggleModal = () => {
            addModal.classList.toggle("visible");
        };

        let configureButtonEventHandlers = (buttonIDOver, buttonIDStats) => {
            let buttonOverview = document.getElementById(buttonIDOver);
            let buttonStats = document.getElementById(buttonIDStats);

            const overviewModalHandler = () => {
                toggleBackdrop();
                toggleModal();
                document.getElementById("modal-content").innerHTML = `Overview: ${marker.name} ${marker.overview} ${marker.d3}`;
                console.log("Clicked on Overview Button", buttonIDOver);
            }
            buttonOverview.addEventListener("click", overviewModalHandler);

            const statisticsModalHandler = () => {
                toggleBackdrop();
                toggleModal();
                document.getElementById("modal-content").innerHTML = "Stats... " + marker.name + " " + marker.overview + " " + marker.d3;
                console.log("Clicked on Statistics Button", buttonIDStats);
            }
            buttonStats.addEventListener("click", statisticsModalHandler);
        };

        // Footer: About Modal
        let footerAboutIconClick = document.getElementById("fa-exclamation");

        const faAboutHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<div><image src="/assets/images/MarkerTTModal.png" height="150" align="left" style="margin: 0px 10px 0px 0px"</> Please hover over the Goggle Map Markers, view the information, and click on the Overview and Statistics buttons for further details.</div>`;
        }
        footerAboutIconClick.addEventListener("click", faAboutHandler);

        // Footer: API Modal
        let footerAPIIconClick = document.getElementById("fa-file-code-o");

        const faAPIHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<div><span><img src="/assets/images/GoogleMapsAPI.png" height="16"></></span><span><a href="https://developers.google.com/maps/documentation/javascript/tutorial" target="_target">Google Maps JavaScript API Description - to create the map and markers.</a></span></div>
            <div><span><img src="/assets/images/OpenWeatherAPI.jpeg" height="16"></></span><span><a href="https://openweathermap.org/api/one-call-api" target="_target">OpenWeather API Description - adding real-time weather information to the marker tool-tips.</a></span></div>
            <div><span><img src="/assets/images/D3API.jpeg" height="16"></></span><span><a href="https://github.com/d3/d3/blob/master/API.md" target="_target">D3 API Description - to display dynamic graphs and statistics.</a></span></div>
            <div><span><img src="/assets/images/EmailJSAPI.png" height="16"></></span><span><a href="https://www.emailjs.com/" target="_target">EmailJS API Description - to enjoy user feedback to improve the website.</a></span></div>`;
        }
        footerAPIIconClick.addEventListener("click", faAPIHandler);

        // Footer: Code Snippets Modal
        let footerCodeSnippetsIconClick = document.getElementById("fa-code");

        const faCodeSnippetsHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<div><span><i class="fa fa-code" id="fa-code" aria-hidden="true" color="196, 224, 255"></i></span><span><a href="https://codeinstitute.net/" target="_target">Google Maps API - Code Institute walkthrough by Matt Rudge.</a></span></div>
            <div><span><i class="fa fa-code" id="fa-code" aria-hidden="true" color="196, 224, 255"></i></span><span><a href="https://youtu.be/Zxf1mnP5zcw" target="_target">Google Maps API - Bill Traversy @ Traversy Media.</a></span></div>
            <div><span><i class="fa fa-code" id="fa-code" aria-hidden="true"></i></span><span><a href="https://youtu.be/GXrDEA3SIOQ" target="_target">OpenWeather API - OpenWeather API JavaScript example and walkthrough by Shanjah Raj.</a></span></div>
            <div><span><i class="fa fa-code" id="fa-code" aria-hidden="true"></i></span><span><a href="https://www.udemy.com/course/build-data-uis-with-d3-firebase/" target="_target">Udemy Course on D3 & Firebase by Shaun Pelling.</a></span></div>
            <div><span><i class="fa fa-code" id="fa-code" aria-hidden="true"></i></span><span><a href="https://www.udemy.com/course-dashboard-redirect/?course_id=2508942" target="_target">Udemy Course on JavaScript the Complete Guide 2020 by Maximilian Schwarzmüller.</a></span></div>`;
        }
        footerCodeSnippetsIconClick.addEventListener("click", faCodeSnippetsHandler);

        // Footer: Contact Form Modal
        let footerContactFormIconClick = document.getElementById("fa-envelope-o");

        const faContactFormHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<div class="center-form">
                <h4>Please get in touch!</h4>
                    <form onsubmit="return sendMail(this);">
                        <div><input type="text" name="name" class="form-control" id="fullname" placeholder="Name" required/><div>
                        <div><input type="text" name="emailaddress" class="form-control" id="emailaddress" placeholder="Email: name@domain.com" required/></div>
                        <span><textarea rows="3" cols="35" name="projectsummary" class="form-control" id="projectsummary" placeholder="Your comments and thoughts." required></textarea></span>
                        <div><button type="submit" value="send" class="button" id="contactsubmit">Send Project Request</button></div>
                    </form>
                </div>`;
        }
        footerContactFormIconClick.addEventListener("click", faContactFormHandler);

        // Footer: Contact Modal
        let footerContactIconClick = document.getElementById("fa-user");

        const faContactHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                "Please hover over the Goggle Map Markers, view the information, and click on the buttons for further details.";
        }
        footerContactIconClick.addEventListener("click", faContactHandler);

        // Close Modal Button
        let closeButton = document.getElementById("close");

        const closeButtonHandler = () => {
            toggleModal();
            toggleBackdrop();
            document.getElementById("add-modal").style.background = "white"; // Resetting the background modal colour to white.
        }

        closeButton.addEventListener("click", closeButtonHandler);
    };

    /* JSON returned from OpenWeather API Call for { lat: 53.274346, lng: -6.348835 } (Firhouse, Dublin, Ireland)
    https://api.openweathermap.org/data/2.5/weather?lat=53.274346&lon=-6.348835&units=metric&appid=4788a47d724b35cf9cc4e281a1893b4c

        {
            "coord": {
                "lon": -6.35, "lat": 53.27
            },
            "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }],
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