# Code Documentation and Walkthrough
This document is a code walkthrough covering the three languages HTML, CSS, and JavaScript, and how they provide the features & functions of the website as well as how they relate to the General Cases and Use Cases described in README.md and Testing.md.

Features & Functions section covers the code from the three languages, HTML, CSS, and JavScript and how they relate to the "Why?", "What?", and "How?" of each feature & function of the website. Each section links the feature & function to one or more General Cases and/or Use Cases described in README.md and Testing.md.

The "</> HTML", ".css{} CSS", and "(Js)" sections provide an overview of the code files and external sources used for this website.

## Features & Functions

### Geo-Location, Google Map and Navigational Controls
#### Geo-Location: ![First loading of the website, Geo-Location](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/1.%20Geo-Location.png)
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

#### Google Map: ![Google Map Dashboard](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/3.%20Google%20Map%20and%20Navigational%20Controls.png)
Why? - Google Map is used to provide Map Markers with information about European capital cities and countries. The Map is the key display upon which further InfoViews and Modals are used to provide further details for the User to acquire basic knowledge of cities and countries.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* All General Cases and Use Cases (0 to 15).

What? - Google Map JavaScript API is used to create the Google Map, Navigational Controls, and Map Markers (together with an internal `markersArray[]`).

A Grid Layout, together with Flexbox is used on this website. The Grid Layout described below uses `grid-template-areas` as they're easy to understand and use (visually clear). The Map area uses 3 columns x 19 rows.

Background is set to `linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` which is the same used throughout the website to create a common look-and-feel.

How? - Some of the code snippets are taken from the Google Map JavaScript API documentation, and are used by the Code Institute and Bill Traversy walkthroughs. index.html has the map placeholder in `<div class="map" id="map"></div>` to display the map from maps.js, and styled by style.css. The linear-gradient background is enabled by the `backgroundColor: "none",` in initMap() and the `background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` in style.css of `html, body {...}`.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

`<div class="map" id="map"></div>`

[Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

```
.parent {
    height: 100%;
    display: grid;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(20, 1fr);
    grid-template-areas:
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "footer  footer footer";
}

.map {
    grid-area: map;
    display: grid;
    height: auto;
    width: auto;
}
```

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
Why? - To allow recognisable ways in which to navigate Google Maps, and creating a common look-and-feel of the website, custom controls are used, creating a better User Design Experience for the User.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 001 - Features and Functions Overview - Google Maps (geoLocation accepted)
* 012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)

What? - Customised, based off of Google Maps JavaScript API example for customised navigation controls, and styled using CSS.

How? - These code snippets are taken from the Google Maps JavaScript API documenation, and modified to suit my website. Index.html has the HTML tags for the Navigational Controls. These are styled by the CSS code which is from Google and modified to suit the website look-and-feel. Maps.js calls on the 2 functions in mapsControls.js, `function initZoomControl(map)` controls the zoom controls (+ and - buttons on the mid-right of the viewport). `function initMapTypeControl(map)` controls the map type selection, of Satellite or Map. The button borders and click status are set by `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`.

One key point to note, as documented under [Testing Notes](https://github.com/NaoiseGaffney/CitiesInCountries#testing-notes) in README.md and Testing.md, is that the `.gm-style .controls button:hover` causes a feature "freeze" on mobile devices when clicking on the controls. Changing to `.gm-style .controls button:active` (`:active`) works fine across all devices. Styling the button to include the same linear-gradient when clicked as is used throughout the website, and a colour-change from black to white when clicked:

```
.gm-style .controls button:active {
    color: rgb(0, 0, 0);
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
}

```
The Raleway font is used as the only font on the website as it's easy to read and pleasing to the eye:

```
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
}
...
.weather,
.btn,
.gm-style,
.controls,
p {
    font-family: 'Raleway', sans-serif;
    margin-bottom: 10px;
}
```

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

### Fixed Footer and CSS Modals
#### Fixed Footer ![]()
Why? - Provide Users an unobtrusive fixed footer with a scrollable Google Map and CSS Modals to provide additional information regarding the use of the website (probably not required), links to the API's and Code Snipptes used to the benefit of collaborating developers and employers, as well as a Contact Form to engage with me and a credibility modal ("Ego-page").

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)
* 005 - User - UC 2 - Feedback Form (geoLocation already accepted)
* 006 - User - UC 3 - CSS Modals (geoLocation already accepted)
* 007 - User - UC 4 - Contact (geoLocation already accepted)
* 008 - Collaborator - UC 5 - Contact (geoLocation already accepted)
* 010 - Collaborator - UC 7 - GitHub Project II (geoLocation already accepted)
* 011 - Collaborator - UC 8 - Feedback Form (geoLocation already accepted)
* 013 - Employer - UC 10 - GitHub Project II (geoLocation already accepted)
* 014 - Employer - UC 11 - GitHub Project MarkDown Documents (geoLocation already accepted)
* 015 - Employer - UC 12 - Feedback Form (geoLocation already accepted)

What? - CSS Modals with an About Modal describing how to navigate and use the website, an API Modal providing links to the API documentation of the API's used on this project/website, a Code Snipped Modal with links to resources and courses used to further my knowledge and skills to create this website, a Contact Form Modal for Users to engage with me, and a Credibility Modal to gain an understanding of who I am and wirth links to the Code Institute Milestone Projects.

How? -

A Grid Layout, together with Flexbox is used on this website. The Grid Layout described below uses `grid-template-areas` as they're easy to understand and use (visually clear). The Fixed Footer area uses 3 columns x 1 row.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

```
<div class="footer  fixed-footer">
            <a href="#id01">
                <i class="fa fa-exclamation" id="fa-exclamation" aria-hidden="true"></i>
                <span class="sr-only">About</span>
            </a>

            <a href="#id02">
                <i class="fa fa-file-code-o" id="fa-file-code-o" aria-hidden="true"></i>
                <span class="sr-only">API's</span>
            </a>

            <a href="#id03">
                <i class="fa fa-code" id="fa-code" aria-hidden="true"></i>
                <span class="sr-only">Code Snippets</span>
            </a>

            <a href="#id04">
                <i class="fa fa-envelope-o" id="fa-envelope-o" aria-hidden="true"></i>
                <span class="sr-only">Contact Form</span>
            </a>

            <a href="#id05">
                <i class="fa fa-user" id="fa-user" aria-hidden="true"></i>
                <span class="sr-only">Naoise Olof Seán Gaffney</span>
            </a>
        </div>
```

[Prodcution Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

```
.parent {
    height: 100%;
    display: grid;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(20, 1fr);
    grid-template-areas:
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "map map map"
        "footer  footer footer";
}
...
.footer {
    display: inline-block;
    grid-area: footer;
    padding: 10px 0;
    position: relative;
    bottom: 0;
    margin: 0;
    text-align: center;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    color: rgb(0, 0, 0);
    -webkit-box-shadow: 0px -6px 20px 0px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px -6px 20px 0px rgba(0, 0, 0, 0.19);
    box-shadow: 0px -6px 20px 0px rgba(0, 0, 0, 0.19);
}
...
a {
    color: rgb(0, 0, 0);
    font-size: 110%;
    padding: 0px 10px;
    text-decoration: none;
}

a i:hover {
    transform: scale(1.5);
}
```

#### CSS Modals
Why? -
What? -
How? -


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




