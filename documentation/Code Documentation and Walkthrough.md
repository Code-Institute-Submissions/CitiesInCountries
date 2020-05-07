# Code Documentation and Walkthrough
This document is a code walkthrough covering the three languages HTML, CSS, and JavaScript, and how they provide the features & functions of the website as well as how they relate to the General Cases and Use Cases described in README.md and Testing.md.

Features & Functions section covers the code from the three languages, HTML, CSS, and JavScript and how they relate to the "Why?", "What?", and "How?" of each feature & function of the website. Each section links the feature & function to one or more General Cases and/or Use Cases described in README.md and Testing.md.

The "</> HTML", ".css{} CSS", and "(Js)" sections provide an overview of the code files and external sources used for this website.

Please note that this is a mid- to high-level code walkthrough, at a feature and function level, and not covering every single line of code whether it's HTML, CSS, or JavaScript. The assumption is that you as a reader have a foundational knowledge of the 3 languages. At times I take note of a particular line of code if it has a key impact on a feature and/or function.

The structure of each section is:

* Main Heading
	* Sub-Heading & Screenshot (if applicable) of the Feature & Function
		* Why?
			* Use Case Cross-Reference
		* What?
		* How?
			* Link to Code
			* Code Snippets

## Features & Functions

### Geo-Location, Google Map and Navigational Controls
#### --- * --- * === { Geo-Location } === * --- * ---
![First loading of the website, Geo-Location](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/1.%20Geo-Location.png)
Why? - The User requires only to accept the browser's request for the current location to have the map centre on their current location. This is their starting point for exploring the map marker InfoWindows to acquire information regarding European capital cities and countries.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* All General Cases and Use Cases (0 to 15).

What? - Map is centred on Firhouse, Dublin, Ireland, requesting Geo-Location access from the user, and when accepted centres the map on the user's location. If Geo-Location is not accepted or the browser doesn't support Geo-Location, the map is centred on Firhouse, Dublin, Ireland (the centre of my Universe :-) ).

How? - `getCurrentLocation(map, home);` has 2 parameters, the Google Map Object `map`, and a location `home` (`let home = { lat: 53.274346, lng: -6.348835 };`). First a check is performed to see whether the browser supports Geo-Location, if not the mpa is centred on `home`. If Geo-Location is supported, then the browser requests the User's permission to use the current location. If accepted, the map is centred on the current location, and if not it's centred on the default which is `home`.

[Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

Geo-Location request via the browser to centre the Google Map at the User's current location.

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

#### --- * --- * === { Google Map } === * --- * ---
![Google Map Dashboard](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/3.%20Google%20Map%20and%20Navigational%20Controls.png)

Why? - Google Map is used to provide Map Markers with information about European capital cities and countries. The Map is the key display upon which further InfoViews and Modals are used to provide further details for the User to acquire basic knowledge of cities and countries.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* All General Cases and Use Cases (0 to 15).

What? - Google Map JavaScript API is used to create the Google Map, Navigational Controls, and Map Markers (together with an internal `markersArray[]`).

A Grid Layout, together with Flexbox is used on this website. The Grid Layout described below uses `grid-template-areas` as they're easy to understand and use (visually clear). The Map area uses 3 columns x 19 rows.

Background is set to `linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` which is the same used throughout the website to create a common look-and-feel.

How? - Some of the code snippets are taken from the Google Map JavaScript API documentation, and are used by the Code Institute and Bill Traversy walkthroughs. index.html has the map placeholder in `<div class="map" id="map"></div>` to display the map from maps.js, and styled by style.css. The linear-gradient background is enabled by the `backgroundColor: "none",` in initMap() and the `background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` in style.css of `html, body {...}`.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Google Map placeholder used by maps.js to place the Google Map and Map Markers using the `#map` element.

`<div class="map" id="map"></div>`

[Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

Grid Layout for the Google Map and Fixed Footer. Using `grid-template-areas` as it's easy to understand this visual layout.

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

`#map` is the Google Map placeholder, the `height: 100%;` is a Google recommendation. The `html, body {...}` sets basic parameters, uses the Raleway Font and sets the linear-gradient used throughout the website.

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

The main Google Map initMap function, from the Google Map JavaScript API documentation. I've set `home` to my home address (the centre of my Universe :-) and the default map centre of Geo-Location isn't used). `disableDefaultUI: true,` disables the default Google Map controls, as I use customised ones instead to better align to website layout and design. `backgroundColor: "none",` disables the default Google Map background colour of grey, and is set to the linear-gradient used throughout the website in style.css.

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

#### --- * --- * === { Navigational Controls } === * --- * ---
![Google Map, Map Type](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Google%20Nav%20Controls%20-%20Map%20Sattelite.png) ![Google Map Zoom Controls](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Google%20Map%20Nav%20Controls%20-%20Zoom.png)

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

These HTML elements and attributes are from the Google Map JavaScript API documentation for the customisation of the Google Map Navigational Controls.

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

Google Map JavaScript API documentation for customised Navigational Controls. I've modified these styles to suit the overall website layout and design layout and style.

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

These 2 function calls are for the customised Naviagational Controls and are saved in a separate file described below, mapControls.js.

```
	initZoomControl(map);
	initMapTypeControl(map);
```

[Production Code: mapControls.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/mapControls.js)

The 2 Google Map Navigational Control functions linked to the website buttons. Further controls can be added, such as the Full-Screen control, however, as the website uses the Google Map as a Dashboard taking up 95% of the viewport the Full-Screen control is of little use.

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
#### --- * --- * === { Fixed Footer } === * --- * ---
![Fixed Footer](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/4.%20Fixed%20Footer.png)
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

How? - A Grid Layout, together with Flexbox is used on this website. The Grid Layout described below uses `grid-template-areas` as they're easy to understand and use (visually clear). The Fixed Footer area uses 3 columns x 1 row.

FontAwesome icons are used for the Fixed Footer links. Styling of the Fixed Footer with the linear-gradient feature and Raleway font.

Grid Layout for the Fixed Footer with the same linear-gradient used throughout the website, the Raleway Font, and 3D shadow giving the website a 3D look-and-feel.

The FontAwesome Fixed Footer links are styled by `a {...}` and `a i:hover` zooming in on the icons when hovered over to make them stand out as clickable elements.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Loading the FontAwesome CSS version 4.7 from the CDN. The FontAwesome icons are used in the Fixed Footer and the Fixed Footer CSS Modals.

```
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">

```

The HTML Fixed Footer FontAwesome Links. Support for Screen-Readers too.

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

Grid Layout for the Google Map and Fixed Footer. Using `grid-template-areas` as it's easy to understand this visual layout. Styling of the links and hover scaling of the FontAwesome icons.

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

#### --- * --- * === { CSS Modals - Overview } === * --- * ---
Why? - The Fixed Footer CSS Modals provide the Users with clear instructions (if required) on how to navigate and use the features of the website, as well as information on API's, Code Snippets, and Courses used to gain the knowledge and skills to create this website. In addition to this, the Contact Form enables the User to contact the owner of the website, and the Credibility CSS Modal provides assessors, collaborators and employers an opportunity to assess the Code Quality and Software Development Practices used.

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

What? - The Footer links are: About which describes the use and navigation of the website, API's providing links to the descriptions of the API's used on this website to provide data and functionality, Code Snippets providing links to tutorials and courses with knowledge and skills used on this website, Contact Form to provide greatly appreciated feedback, and About Me to view my Resumé, GitHub, and GaffCo for professional communication competence!

How? - Hovering over the FontAwesome icons scales it to 1.5 times the original size, clicking on it opens the About CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking of any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Index.html contains the Fixed Footer FontAwesome links, and the CSS Modals and their content. Styling of the CSS Modals is specified in style.css. The only JavaScript component is the Contact Form sendemail.js script.

The code details are covered under each CSS Modal sub-heading (About, API's, Code Snippets, Contact Form, Credibility).

#### --- * --- * === { CSS Modals - About } === * --- * ---
![About CSS Modal](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/5.%20FF%20CSS%20Modal%20-%20About.png)

Why? - Providing Users with an overview of the website, setting correct and clear expectations as well as aiding those not as savvy to use the website features.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)
* User - UC 3 - CSS Modals (geoLocation already accepted)

What? - About which describes the use and navigation of the website.

How? - Index.html contains the FontAwesome exclamation-mark link icon that opens up the About CSS Modal with the content in index.html. The CSS Modal control and styling is defined in style.css.

Hovering over the FontAwesome exclamation-point icon scales it to 1.5 times the original size, clicking on it opens the About CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking of any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Hovering over the FontAwesome exclamation-point icon scales it to 1.5 times the original size, clicking on it opens the About CSS Modal.

```
<div class="footer  fixed-footer">
            <a href="#id01">
                <i class="fa fa-exclamation" id="fa-exclamation" aria-hidden="true"></i>
                <span class="sr-only">About</span>
            </a>
...
<section>
        <div id="id01" class="cssmodal">
            <div class="cssmodal-dialog">
                <div class="cssmodal-content">
                    <header class="cssmodal-container">
                        <h3><i class="fa fa-exclamation" id="fa-exclamation-css-modal" aria-hidden="true"></i>
                            <span class="sr-only">About</span>&nbsp;&nbsp;&nbsp;About</h3>
                    </header>
                    <div class="cssmodal-container">
                        <div>
                            <p>Please click on the Google Map Markers - <img src="../CitiesInCountries/assets/images/GoogleMapMarker.png"
                                    width="10" alt="Google Map Marker"> - for information on the Capital City of your
                                choice.</p>
                            <p>Click on the Overview button &nbsp; <button class="button">Overview</button>for Country
                                details, and click on the Statistics button &nbsp; <button
                                    class="button">Statistics</button>for simple statistics.</p>
                            <p>The Footer links are: About - <i class="fa fa-exclamation" aria-hidden="true"></i>
                                <span class="sr-only">About</span> - which is this modal, API's - <i
                                    class="fa fa-file-code-o" aria-hidden="true"></i><span class="sr-only">API's</span>
                                - providing links to the descriptions of the API's used on this website to provide data
                                and functionality, Code Snippets - <i class="fa fa-code" aria-hidden="true"></i>
                                <span class="sr-only">Code Snippets</span> - providing links to tutorials and courses
                                with knowledge and skills used on this website, Contact Form - <i
                                    class="fa fa-envelope-o" aria-hidden="true"></i>
                                <span class="sr-only">Contact Form</span> - to provide greatly appreciated feedback, and
                                About Me - <i class="fa fa-location-arrow" aria-hidden="true"></i> - to view my Resumé,
                                GitHub, and GaffCo for professional communication competence!</p>
                        </div>
                        <p style="text-align:right"><a href="#" class="button">Close</a></p>
                    </div>
                </div>
            </div>
        </div>
```

[Prodcution Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

CSS Modal animation, supporting all browser types as defined by the `...keyframes` definitions below.

The `.cssmodal...` elements and styling attributes style the CSS Modal according to the look-and-feel of the layout and design used throughout the website.

```
@-webkit-keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* Add animation (Standard syntax) */
@keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* The modal's background */
.cssmodal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}

/* Display the modal when targeted */
.cssmodal:target {
    display: table;
    position: absolute;
}

/* The modal box */
.cssmodal-dialog {
    display: table-cell;
    vertical-align: middle;
}

/* The modal's content */
.cssmodal-dialog .cssmodal-content {
    margin: auto;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    color: rgb(0, 0, 0);
    border-radius: 10px 10px 10px 10px;
    position: relative;
    padding: 0;
    outline: 0;
    text-align: justify;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 4;
    -webkit-animation-name: example;
    -webkit-animation-duration: 0.5s;
    animation-name: example;
    animation-duration: 0.5s;
}

.cssmodal-container {
    padding: 10px 16px;
    text-align: left;
}

.modal-link-text:active {
    color: rgb(255, 255, 255);
}
```

Styling of all CSS and JS Modal buttons (Close, Overview, Statistics). Using CSS Button Creator: https://cssbuttoncreator.com/ and some additional modification to get it "just right". Added 'outline: none' to remove ugly click outline.

```
.button {
    background: rgba(63, 135, 166, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    color: #FFFFFF;
    font-family: Raleway, sans-serif;
    font-size: 12px;
    font-weight: 100;
    padding: 3px 10px;
    text-shadow: 1px 1px 20px #000000;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
}

.button:hover {
    background: rgba(246, 157, 60, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-decoration: none;
}

.button:focus {
    outline: none;
}
```

#### --- * --- * === { CSS Modals - API's } === * --- * ---
![API's CSS Modal](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/6.%20FF%20CSS%20Modal%20-%20API's.png)

Why? - Providing Users with details of the API's used to provide the content of the website of interest to the Users, Collaborators, and Employers.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)
* 006 - User - UC 3 - CSS Modals (geoLocation already accepted)

What? - API's providing links to the descriptions of the API's used on this website to provide real-time dynamic data to the User via the JS Modals.

How? - Index.html contains the FontAwesome file-code-o link icon that opens up the API's CSS Modal with the content in index.html. The CSS Modal control and styling is defined in style.css.

Hovering over the FontAwesome file-code-o icon scales it to 1.5 times the original size, clicking on it opens the API's CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking of any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Clicking on the links opens up the external websites in new tabs `target=_blank`.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Hovering over the FontAwesome exclamation-point icon scales it to 1.5 times the original size, clicking on it opens the About CSS Modal.

```
<a href="#id02">
                <i class="fa fa-file-code-o" id="fa-file-code-o" aria-hidden="true"></i>
                <span class="sr-only">API's</span>
            </a>
...
<div id="id02" class="cssmodal">
            <div class="cssmodal-dialog">
                <div class="cssmodal-content">
                    <header class="cssmodal-container">
                        <h3><i class="fa fa-file-code-o" id="fa-file-code-o-css-modal" aria-hidden="true"></i>
                            <span class="sr-only">API's</span>&nbsp;&nbsp;&nbsp;Links&#58; Application Programming Interfaces</h3>
                    </header>
                    <div class="cssmodal-container">
                        <div><a href="https://developers.google.com/maps/documentation/javascript/tutorial"
                                target="_blank" class="modal-link-text">-> Google Maps JavaScript API Description - to
                                create the map and markers.</a></div>
                        <div><a href="https://openweathermap.org/api/one-call-api" target="_blank"
                                class="modal-link-text">-> OpenWeather API Description - adding real-time weather
                                information to the marker tool-tips.</a></div>
                        <div><a href="https://github.com/d3/d3/blob/master/API.md" target="_blank"
                                class="modal-link-text">-> D3 API Description - to display dynamic graphs and
                                statistics.</a></div>
                        <div><a href="https://www.emailjs.com/" target="_blank" class="modal-link-text">-> EmailJS API
                                Description - to enjoy user feedback to improve the website.</a></div>
                        <div><a href="https://firebase.google.com/" target="_blank" class="modal-link-text">-> "Built with
                                Firebase &reg;" - to store and retrieve D3 and City data.</a></div>
                        <div><a href="https://restcountries.eu/" target="_blank" class="modal-link-text">-> REST Countries
                                EU API Description - Global Country data for Overview and Statistics Modals.</a></div>
                        <p style="text-align:right"><a href="#" class="button">Close</a></p>
                    </div>
                </div>
            </div>
        </div>
```

[Prodcution Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

CSS Modal animation, supporting all browser types as defined by the `...keyframes` definitions below.

The `.cssmodal...` elements and styling attributes style the CSS Modal according to the look-and-feel of the layout and design used throughout the website.

```
@-webkit-keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* Add animation (Standard syntax) */
@keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* The modal's background */
.cssmodal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}

/* Display the modal when targeted */
.cssmodal:target {
    display: table;
    position: absolute;
}

/* The modal box */
.cssmodal-dialog {
    display: table-cell;
    vertical-align: middle;
}

/* The modal's content */
.cssmodal-dialog .cssmodal-content {
    margin: auto;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    color: rgb(0, 0, 0);
    border-radius: 10px 10px 10px 10px;
    position: relative;
    padding: 0;
    outline: 0;
    text-align: justify;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 4;
    -webkit-animation-name: example;
    -webkit-animation-duration: 0.5s;
    animation-name: example;
    animation-duration: 0.5s;
}

.cssmodal-container {
    padding: 10px 16px;
    text-align: left;
}

.modal-link-text:active {
    color: rgb(255, 255, 255);
}
```

Styling of all CSS and JS Modal buttons (Close, Overview, Statistics). Using CSS Button Creator: https://cssbuttoncreator.com/ and some additional modification to get it "just right". Added 'outline: none' to remove ugly click outline.

```
.button {
    background: rgba(63, 135, 166, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    color: #FFFFFF;
    font-family: Raleway, sans-serif;
    font-size: 12px;
    font-weight: 100;
    padding: 3px 10px;
    text-shadow: 1px 1px 20px #000000;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
}

.button:hover {
    background: rgba(246, 157, 60, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-decoration: none;
}

.button:focus {
    outline: none;
}
```

#### --- * --- * === { CSS Modals - Code Snippets } === * --- * ---
![Code Snippets CSS Modal](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/7.%20FF%20CSS%20Modal%20-%20Code%20Snippets.png)

Why? - Providing Users with details of the Code Snippets used to provide the content of the website of interest to the Users, Collaborators, and Employers. This includes the courses taken on "D3 & Firestore" and "JavaScript" on Udemy. This shows an interest above-and-beyond what is covered by the Diploma in Full Stack Development as well as an improvement on both knowledge and skills needed to create the features and functions of this website.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)
* 006 - User - UC 3 - CSS Modals (geoLocation already accepted)

What? - Code Snippets, Code Walkthroughs, and Udemy Courses providing both knowledge and skills to further my programming abilities.

How? - Index.html contains the FontAwesome fa-code link icon that opens up the API's CSS Modal with the content in index.html. The CSS Modal control and styling is defined in style.css.

Hovering over the FontAwesome fa-code icon scales it to 1.5 times the original size, clicking on it opens the Code Snippet CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking of any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Clicking on the links opens up the external websites in new tabs `target=_blank`.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Hovering over the FontAwesome exclamation-point icon scales it to 1.5 times the original size, clicking on it opens the About CSS Modal.

```
<a href="#id03">
                <i class="fa fa-code" id="fa-code" aria-hidden="true"></i>
                <span class="sr-only">Code Snippets</span>
            </a>
...
<div id="id03" class="cssmodal">
            <div class="cssmodal-dialog">
                <div class="cssmodal-content">
                    <header class="cssmodal-container">
                        <h3><i class="fa fa-code" id="fa-code-css-modal" aria-hidden="true"></i>
                            <span class="sr-only">Code Snippets</span>&nbsp;&nbsp;&nbsp;Links&#58; Code Snippets</h3>
                    </header>
                    <div class="cssmodal-container">
                        <div><a href="https://codeinstitute.net/" target="_blank" class="modal-link-text">-> Google Maps
                                API - Code Institute walkthrough by Matt Rudge.</a></div>
                        <div><a href="https://youtu.be/Zxf1mnP5zcw" target="_blank" class="modal-link-text">-> Google Maps
                                API - Bill Traversy @ Traversy Media.</a></div>
                        <div><a href="https://youtu.be/GXrDEA3SIOQ" target="_blank" class="modal-link-text">-> OpenWeather
                                API - OpenWeather API JavaScript example and walkthrough by Shanjah Raj.</a></div>
                        <div><a href="https://www.udemy.com/course/build-data-uis-with-d3-firebase/" target="_blank"
                                class="modal-link-text">-> Udemy Course on D3 & Firebase by Shaun Pelling.</a></div>
                        <div><a href="https://www.udemy.com/course-dashboard-redirect/?course_id=2508942"
                                target="_blank" class="modal-link-text">-> Udemy Course on JavaScript the Complete Guide
                                2020 by Maximilian Schwarzmüller.</a></div>
                        <p style="text-align:right"><a href="#" class="button">Close</a></p>
                    </div>
                </div>
            </div>
        </div>
```

[Prodcution Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

CSS Modal animation, supporting all browser types as defined by the `...keyframes` definitions below.

The `.cssmodal...` elements and styling attributes style the CSS Modal according to the look-and-feel of the layout and design used throughout the website.

```
@-webkit-keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* Add animation (Standard syntax) */
@keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* The modal's background */
.cssmodal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}

/* Display the modal when targeted */
.cssmodal:target {
    display: table;
    position: absolute;
}

/* The modal box */
.cssmodal-dialog {
    display: table-cell;
    vertical-align: middle;
}

/* The modal's content */
.cssmodal-dialog .cssmodal-content {
    margin: auto;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    color: rgb(0, 0, 0);
    border-radius: 10px 10px 10px 10px;
    position: relative;
    padding: 0;
    outline: 0;
    text-align: justify;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 4;
    -webkit-animation-name: example;
    -webkit-animation-duration: 0.5s;
    animation-name: example;
    animation-duration: 0.5s;
}

.cssmodal-container {
    padding: 10px 16px;
    text-align: left;
}

.modal-link-text:active {
    color: rgb(255, 255, 255);
}
```

Styling of all CSS and JS Modal buttons (Close, Overview, Statistics). Using CSS Button Creator: https://cssbuttoncreator.com/ and some additional modification to get it "just right". Added 'outline: none' to remove ugly click outline.

```
.button {
    background: rgba(63, 135, 166, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    color: #FFFFFF;
    font-family: Raleway, sans-serif;
    font-size: 12px;
    font-weight: 100;
    padding: 3px 10px;
    text-shadow: 1px 1px 20px #000000;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
}

.button:hover {
    background: rgba(246, 157, 60, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-decoration: none;
}

.button:focus {
    outline: none;
}
```

#### --- * --- * === { CSS Modals - Contact Form } === * --- * ---
![Contact Form CSS Modal](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/10.%20FF%20CSS%20Modal%20-%20Contact%20Form%20Filled%20and%20Sent.png)

![E-mail example](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/UC%2012%20Email.png)

Why? - Providing Users with the opportunity to contact me for work, collaboration, and feedback to further improve the website with additional features of value to the Users.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)
* 005 - User - UC 2 - Feedback Form (geoLocation already accepted)
* 006 - User - UC 3 - CSS Modals (geoLocation already accepted)
* 007 - User - UC 4 - Contact (geoLocation already accepted)
* 008 - Collaborator - UC 5 - Contact (geoLocation already accepted)
* 011 - Collaborator - UC 8 - Feedback Form (geoLocation already accepted)
* 015 - Employer - UC 12 - Feedback Form (geoLocation already accepted)

What? - Code Snippets, Code Walkthroughs, and Udemy Courses providing both knowledge and skills to further my programming abilities.

The EmailJS API is used and the HTML code and in-line JavaScript in index.html is from the API's documentation, as is the code in sendemail.js. A unique key is required, as is the creation of an e-mail template on the EmailJS website.

How? - Index.html contains the FontAwesome fa-envelope link icon that opens up the Contact Form CSS Modal with the content in index.html. The CSS Modal control and styling is defined in style.css.

Hovering over the FontAwesome fa-envelope icon scales it to 1.5 times the original size, clicking on it opens the Contact Form CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking of any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Clicking on the "Send Feedback" button without filling out the form fields will result in a message asking the User to "Please fill out this field." Filling out the form correctly and clicking the "Send Feedback" button sends the form details as an e-mail to me with the "Name, e-mail, and text." If the form submission is successful a message is displayed for 5 seconds below the form, "Thank you! Email sent successfully." and the form fields are cleared. If an error occurs, the message is "Apologies, something went wrong. Please try again."

When index.html is loaded the EmailJS script and function with my unique key are loaded together with [sendemail.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/sendemail.js).

Clicking on "Send Feedback" triggers `<form onsubmit="return sendMail(this);" id="feedbackform">` in index.html. That in turn calls on [sendemail.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/sendemail.js) to send the e-mail.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Hovering over the FontAwesome exclamation-point icon scales it to 1.5 times the original size, clicking on it opens the About CSS Modal.

```
<a href="#id04">
                <i class="fa fa-envelope-o" id="fa-envelope-o" aria-hidden="true"></i>
                <span class="sr-only">Contact Form</span>
            </a>
...
<div id="id04" class="cssmodal">
            <div class="cssmodal-dialog">
                <div class="cssmodal-content">
                    <header class="cssmodal-container">
                        <h3><i class="fa fa-envelope-o" id="fa-envelope-o-css-modal" aria-hidden="true"></i>
                            <span class="sr-only">Contact Form</span>&nbsp;&nbsp;&nbsp;Contact Form</h3>
                    </header>
                    <div class="cssmodal-container">
                        <div class="center-form">
                            <h4>Please get in touch!</h4>
                            <form onsubmit="return sendMail(this);" id="feedbackform">
                                <div><input type="text" name="name" class="form-control" id="fullname"
                                        placeholder="Name" required />
                                    <div>
                                        <div><input type="text" name="emailaddress" class="form-control"
                                                id="emailaddress" placeholder="Email: name@domain.com" required /></div>
                                        <span><textarea rows="3" cols="35" name="feedback" class="form-control"
                                                id="feedback" placeholder="Your comments and thoughts."
                                                required></textarea></span>
                                        <div><button type="submit" value="send" class="button" id="contactsubmit">Send
                                                Feedback</button>
                                            <p style="text-align: center;" id="sendmail-status"></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p style="text-align:right"><a href="#" class="button">Close</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
```

The EmailJS API with unique key and sendemail.js scripts.

```
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
<script>
    (function () {
        emailjs.init("user_Dhpon4lpXiEEQEGFYwVco");
    })();
</script>

<script src="../CitiesInCountries/assets/scripts/sendemail.js"></script>
```

[Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

CSS Modal animation, supporting all browser types as defined by the `...keyframes` definitions below.

The `.cssmodal...` elements and styling attributes style the CSS Modal according to the look-and-feel of the layout and design used throughout the website.

```
@-webkit-keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* Add animation (Standard syntax) */
@keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* The modal's background */
.cssmodal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}

/* Display the modal when targeted */
.cssmodal:target {
    display: table;
    position: absolute;
}

/* The modal box */
.cssmodal-dialog {
    display: table-cell;
    vertical-align: middle;
}

/* The modal's content */
.cssmodal-dialog .cssmodal-content {
    margin: auto;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    color: rgb(0, 0, 0);
    border-radius: 10px 10px 10px 10px;
    position: relative;
    padding: 0;
    outline: 0;
    text-align: justify;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 4;
    -webkit-animation-name: example;
    -webkit-animation-duration: 0.5s;
    animation-name: example;
    animation-duration: 0.5s;
}

.cssmodal-container {
    padding: 10px 16px;
    text-align: left;
}

.modal-link-text:active {
    color: rgb(255, 255, 255);
}
```

Styling of all CSS and JS Modal buttons (Close, Overview, Statistics). Using CSS Button Creator: https://cssbuttoncreator.com/ and some additional modification to get it "just right". Added 'outline: none' to remove ugly click outline.

```
.button {
    background: rgba(63, 135, 166, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    color: #FFFFFF;
    font-family: Raleway, sans-serif;
    font-size: 12px;
    font-weight: 100;
    padding: 3px 10px;
    text-shadow: 1px 1px 20px #000000;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
}

.button:hover {
    background: rgba(246, 157, 60, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-decoration: none;
}

.button:focus {
    outline: none;
}
```

Styling of the Contact Form fields and status message ("success or failure").

```
input[type=text],
textarea {
    width: 100%;
    padding: 4px 20px;
    margin: 4px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

#sendmail-status {
    font-size: 16px;
    padding-right: 12px;
}
```

[Production Code: sendemail.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/sendemail.js)

This code is a modified version of the EmailJS API documentation. It maps the HTML form to the EmailJS template defined on the EmailJS website, sends the form to the EmailJS website. On success ("Success OK 200") the script updates the Contact Form with the success message of "Thank you! Email sent successfully." for 5 seconds (long enough for the User to read and understand the message), and clears the form fields. If the sending of the form is unsuccessful the message on the Contact Form is "Apologies, something went wrong. Please try again." for 5 seconds, and retains the previosuly filled out form fields to allow the User to try again.

```
function sendMail(contactForm) {
    emailjs.send("gmail", "website_feedback_form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value
    })
        .then(function (response) {
            document.querySelector("#sendmail-status").innerHTML = "Thank you! Email sent successfully.";
            document.querySelector("#feedbackform").reset();
            setTimeout(() => {
                document.querySelector("#sendmail-status").innerHTML = "";
            }, 5000);
        }, function (error) {
            document.querySelector("#sendmail-status").innerHTML = "Apologies, something went wrong. Please try again.";
            setTimeout(() => {
                document.querySelector("#sendmail-status").innerHTML = "";
            }, 5000);
        });
    return false;
}
```

#### --- * --- * === { CSS Modals - Credibility (Naoise Olof Seán Gaffney) } === * --- * ---
![Credibility Modal](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/9.%20FF%20CSS%20Modal%20-%20Credibility.png)

Why? - Providing Users with access to the second Code Institute Milestone Project details (code, documentation, automated testing) to assess my knowledged and skills as a Front-End/Full-Stack Developer, access to my first Milestone Project, and my Resumé, all to add to my credibility.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)
* 006 - User - UC 3 - CSS Modals (geoLocation already accepted)
* 007 - User - UC 4 - Contact (geoLocation already accepted)
* 008 - Collaborator - UC 5 - Contact (geoLocation already accepted)
* 010 - Collaborator - UC 7 - GitHub Project II (geoLocation already accepted)
* 013 - Employer - UC 10 - GitHub Project II (geoLocation already accepted)
* 014 - Employer - UC 11 - GitHub Project MarkDown Documents (geoLocation already accepted)

What? - Link to my Resumé, my GitHub, this Milestone Project (HTML, CSS, and JavaScript), my first Milestone Project (HTML and CSS).

How? - Index.html contains the FontAwesome fa-user link icon that opens up the Credibility CSS Modal with the content in index.html. The CSS Modal control and styling is defined in style.css.

Hovering over the FontAwesome fa-user icon scales it to 1.5 times the original size, clicking on it opens the Credibility CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking of any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Clicking on the links opens up the external websites in new tabs `target=_blank`.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Hovering over the FontAwesome exclamation-point icon scales it to 1.5 times the original size, clicking on it opens the About CSS Modal.

```
<a href="#id05">
                <i class="fa fa-user" id="fa-user" aria-hidden="true"></i>
                <span class="sr-only">Naoise Olof Seán Gaffney</span>
            </a>
        </div>
    </div>
...
<div id="id05" class="cssmodal">
            <div class="cssmodal-dialog">
                <div class="cssmodal-content">
                    <header class="cssmodal-container">
                        <h3><i class="fa fa-user" id="fa-user-css-modal" aria-hidden="true"></i>
                            <span class="sr-only">Naoise Olof Seán Gaffney</span>&nbsp;&nbsp;&nbsp;Links&#58; Naoise Olof Seán
                            Gaffney</h3>
                    </header>
                    <div class="cssmodal-container">
                        <div><a href="https://naoisegaffney.github.io/Resume/index.html" target="_blank"
                                class="modal-link-text">-> My Resumé.</a></div>
                        <div><a href="https://github.com/NaoiseGaffney" target="_blank" class="modal-link-text">-> My
                                GitHub.</a></div>
                        <div><a href="https://github.com/NaoiseGaffney/CitiesInCountries" target="_blank"
                                class="modal-link-text">-> The
                                documentation and source code on GitHub of this website, my 2<sup>nd</sup> Code Institute Milestone Project.</a></div>
                        <div><a href="https://ptd--gaffco.repl.co/index.html" target="_blank"
                                class="modal-link-text">-> GaffCo Consulting Professional Communication Competence.</a>
                        </div>
                        <p style="text-align:right"><a href="#" class="button">Close</a></p>
                    </div>
                </div>
            </div>
        </div>

    </section>
```

[Prodcution Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

CSS Modal animation, supporting all browser types as defined by the `...keyframes` definitions below.

The `.cssmodal...` elements and styling attributes style the CSS Modal according to the look-and-feel of the layout and design used throughout the website.

```
@-webkit-keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* Add animation (Standard syntax) */
@keyframes example {
    from {
        top: -100px;
        opacity: 0;
    }

    to {
        top: 0px;
        opacity: 1;
    }
}

/* The modal's background */
.cssmodal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}

/* Display the modal when targeted */
.cssmodal:target {
    display: table;
    position: absolute;
}

/* The modal box */
.cssmodal-dialog {
    display: table-cell;
    vertical-align: middle;
}

/* The modal's content */
.cssmodal-dialog .cssmodal-content {
    margin: auto;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    color: rgb(0, 0, 0);
    border-radius: 10px 10px 10px 10px;
    position: relative;
    padding: 0;
    outline: 0;
    text-align: justify;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 4;
    -webkit-animation-name: example;
    -webkit-animation-duration: 0.5s;
    animation-name: example;
    animation-duration: 0.5s;
}

.cssmodal-container {
    padding: 10px 16px;
    text-align: left;
}

.modal-link-text:active {
    color: rgb(255, 255, 255);
}
```

Styling of all CSS and JS Modal buttons (Close, Overview, Statistics). Using CSS Button Creator: https://cssbuttoncreator.com/ and some additional modification to get it "just right". Added 'outline: none' to remove ugly click outline.

```
.button {
    background: rgba(63, 135, 166, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    color: #FFFFFF;
    font-family: Raleway, sans-serif;
    font-size: 12px;
    font-weight: 100;
    padding: 3px 10px;
    text-shadow: 1px 1px 20px #000000;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
}

.button:hover {
    background: rgba(246, 157, 60, 1);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-decoration: none;
}

.button:focus {
    outline: none;
}
```

### Google Map Markers
![Google Map Markers]()

Why? - 

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 003 - Features and Functions Overview - Samples (geoLocation accepted)
* 004 - User - UC 1 - Overview and Statistics (geoLocation already accepted)
* 009 - Collaborator - UC 6 - Overview and Statistics (geoLocation already accepted)
* 012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)

What? - 

How? -


Why? - Google Map is used to provide Map Markers with information about European capital cities and countries. The Map is the key display upon which further InfoViews and Modals are used to provide further details for the User to acquire basic knowledge of cities and countries.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* All General Cases and Use Cases (0 to 15).

What? - Google Map JavaScript API is used to create the Google Map, Navigational Controls, and Map Markers (together with an internal `markersArray[]`).

A Grid Layout, together with Flexbox is used on this website. The Grid Layout described below uses `grid-template-areas` as they're easy to understand and use (visually clear). The Map area uses 3 columns x 19 rows.

Background is set to `linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` which is the same used throughout the website to create a common look-and-feel.

How? - Some of the code snippets are taken from the Google Map JavaScript API documentation, and are used by the Code Institute and Bill Traversy walkthroughs. index.html has the map placeholder in `<div class="map" id="map"></div>` to display the map from maps.js, and styled by style.css. The linear-gradient background is enabled by the `backgroundColor: "none",` in initMap() and the `background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` in style.css of `html, body {...}`.

[Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Google Map placeholder used by maps.js to place the Google Map and Map Markers using the `#map` element.

`<div class="map" id="map"></div>`

[Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

Grid Layout for the Google Map and Fixed Footer. Using `grid-template-areas` as it's easy to understand this visual layout.

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

`#map` is the Google Map placeholder, the `height: 100%;` is a Google recommendation. The `html, body {...}` sets basic parameters, uses the Raleway Font and sets the linear-gradient used throughout the website.

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

The main Google Map initMap function, from the Google Map JavaScript API documentation. I've set `home` to my home address (the centre of my Universe :-) and the default map centre of Geo-Location isn't used). `disableDefaultUI: true,` disables the default Google Map controls, as I use customised ones instead to better align to website layout and design. `backgroundColor: "none",` disables the default Google Map background colour of grey, and is set to the linear-gradient used throughout the website in style.css.

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

### Google Map Marker InfoWindows and Content

Why? - 

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 

What? - 

How? -

### JS Overview Modal

Why? - 

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 

What? - 

How? -

### JS Statistics Modal

Why? - 

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 

What? - 

How? -

## </> HTML 5

### index.html

## .css{} CSS 3

### style.css

## (Js) JavaScript

### maps.js
### d3Stats.js
### mapControls.js
### sendemail.js




