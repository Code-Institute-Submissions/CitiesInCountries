# Code Documentation and Walkthrough

## Features & Functions

### Geo-Location, Google Map and Navigational Controls
#### Geo-Location: ![First loading of the website]()
Why? - The User requires only to accept the browser's request for the current location to have the map centre on their current location. This is their starting point for exploring the map marker InfoWindows to acquire information regarding European capital cities and countries.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* All General Cases and Use Cases (0 to 15).

What? - Map is centred on Firhouse, Dublin, Ireland, requesting Geo-Location access from the user, and when accepted centres the map on the user's location. If Geo-Location is not accepted or the browser doesn't support Geo-Location, the map is centred on Firhouse, Dublin, Ireland (the centre of my Universe :-) ).

How? - `getCurrentLocation(map, home);` has 2 parameters, the Google Map Object `map`, and a location `home` (`let home = { lat: 53.274346, lng: -6.348835 };`). First a check is performed to see whether the browser supports Geo-Location, if not the mpa is centred on `home`. If Geo-Location is supported, then the browser requests the User's permission to use the current location. If accepted, the map is centred on the current location, and if not it's centred on the default which is `home`.

[Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

`getCurrentLocation(map, home);`

```
const getCurrentLocation = (map, home) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let pos = { lat: position.coords.latitude, lng: position.coords.longitude };
            map.setCenter(pos);
        }, () => {
            handleLocationError();
        });
    }
    else {
        handleLocationError();
    }
    const handleLocationError = () => {
        map.setCenter(home);
    };
};
```

#### Google Map: ![]()
Why? - Google Map is used to provide Map Markers with information about European capital cities and countries. The Map is the key display upon which further InfoViews and Modals are used to provide further details for the User to acquire basic knowledge of cities and countries.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* All General Cases and Use Cases (0 to 15).

What? - Google Map JavaScript API is used to create the Google Map, Navigational Controls, and Map Markers (together with an internal `markersArray[]`).

Background is set to `linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` which is the same used throughout the website to create a common look-and-feel.

How? - These code snippets are taken from the Google Map JavaScript API documentation, and is used by the Code Institute and Bill Traversy walkthroughs. index.html has the map placeholder in `<div class="map" id="map"></div>` to display the map from maps.js, and styled by style.css. The linear-gradient background is enabled by the `backgroundColor: "none",` in initMap() and the `background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` in style.css of `html, body {...}`.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

`<div class="map" id="map"></div>`

[Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

```
#map {
    height: 100%;
}

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
}
```

[Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

```
function initMap() {
    let home = { lat: 53.274346, lng: -6.348835 };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: home,
        disableDefaultUI: true,
        backgroundColor: "none",
    });
    ...
```

#### Navigational Controls: ![]()
Why? - To allow recognisable ways in which to navigate Google Maps, and creating a common look-and-feel of the website, custom controls are used, creating a better USer Design Experience for the User.

What? - Customised, based off of Google Maps JavaScript API example for customised navigation controls, and styled using CSS.

How? - 

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

```
<div style="display:none">
            <div class="controls zoom-control">
                <button class="zoom-control-in" title="Zoom In">+</button>
                <button class="zoom-control-out" title="Zoom Out">−</button>
            </div>
            <div class="controls maptype-control maptype-control-is-map">
                <button class="maptype-control-map" title="Show road map">Map</button>
                <button class="maptype-control-satellite" title="Show satellite imagery">Satellite</button>
            </div>
            <div class="controls scale-control scale-control-is-map">
                <button class="scale-control-map" title="Street View">Street View</button>
            </div>
            <div class="controls fullscreen-control">
                <button title="Toggle Fullscreen">
                    <span class="fullscreen-control-icon fullscreen-control-top-left"></span>
                    <span class="fullscreen-control-icon fullscreen-control-top-right"></span>
                    <span class="fullscreen-control-icon fullscreen-control-bottom-left"></span>
                    <span class="fullscreen-control-icon fullscreen-control-bottom-right"></span>
                </button>
            </div>
        </div>
```

[Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

```
.gm-style .controls {
    font-size: 36px;
    background-color: rgb(255, 255, 255);
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-sizing: border-box;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 300;
    height: 1em;
    margin: 6px;
    text-align: center;
    user-select: none;
    padding: 2px;
    width: 1em;
}

.gm-style .controls button {
    border: 0;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-family: 'Raleway', sans-serif;
}

.gm-style .controls button:active {
    color: rgb(0, 0, 0);
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
}

.gm-style .controls button:focus {
    outline: none;
}

.gm-style .controls.zoom-control {
    display: flex;
    flex-direction: column;
    height: auto;
}

.gm-style .controls.zoom-control button {
    font: 0.85em Raleway;
    margin: 1px;
    padding: 0;
}

.gm-style .controls.maptype-control {
    display: flex;
    flex-direction: row;
    width: auto;
}

.gm-style .controls.maptype-control button {
    display: inline-block;
    font-size: 0.5em;
    margin: 0 1px;
    padding: 0 6px;
}

.gm-style .controls.maptype-control.maptype-control-is-map .maptype-control-map {
    font-weight: 700;
}

.gm-style .controls.maptype-control.maptype-control-is-satellite .maptype-control-satellite {
    font-weight: 700;
}

.gm-style .controls.fullscreen-control button {
    display: block;
    font-size: 1em;
    height: 100%;
    width: 100%;
}

.gm-style .controls.fullscreen-control .fullscreen-control-icon {
    border-style: solid;
    height: 0.25em;
    position: absolute;
    width: 0.25em;
}

.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-left {
    border-width: 2px 0 0 2px;
    left: 0.1em;
    top: 0.1em;
}

.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-left {
    border-width: 0 2px 2px 0;
}

.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-right {
    border-width: 2px 2px 0 0;
    right: 0.1em;
    top: 0.1em;
}

.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-right {
    border-width: 0 0 2px 2px;
}

.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-left {
    border-width: 0 0 2px 2px;
    left: 0.1em;
    bottom: 0.1em;
}

.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-left {
    border-width: 2px 2px 0 0;
}

.gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-right {
    border-width: 0 2px 2px 0;
    right: 0.1em;
    bottom: 0.1em;
}

.gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-right {
    border-width: 2px 0 0 2px;
}

.gm-style-iw,
.gm-style-iw-c {
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
}

/* Consistent Font use on the website - Google Map, Tool-Tips, Controls and Text */
.weather,
.btn,
.gm-style,
.controls,
p {
    font-family: 'Raleway', sans-serif;
    margin-bottom: 10px;
}
```

[Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

```
	initZoomControl(map);
    initMapTypeControl(map);
```

[Production Code: mapControls.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/mapControls.js)

```
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
```

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* All General Cases and Use Cases (0 to 15).

### Fixed Footer and CSS Modals
### Google Map Markers
### Google Map Marker InfoWindows and Content
### JS Overview Modal
### JS Statistics Modal

## </> HTML 5

### index.html

## .css{} CSS 3

### style.css

## (Js) JavaScript

### maps.js
### d3Stats.js
### mapControls.js
### sendemail.js




