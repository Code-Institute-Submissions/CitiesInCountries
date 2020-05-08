# Code Documentation and Walkthrough
This document is a code walkthrough covering the three languages HTML, CSS, and JavaScript, and how they provide the features & functions of the website as well as how they relate to the General Cases and Use Cases described in README.md and Testing.md.

Features & Functions section covers the code from the three languages, HTML, CSS, and JavaScript and how they relate to the "Why?", "What?", and "How?" of each feature & function of the website. Each section links the feature & function to one or more General Cases and/or Use Cases described in README.md and Testing.md.

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

What? - Map is centred on Firhouse, Dublin, Ireland, requesting Geo-Location access from the user, and when accepted centres the map on the user's location. If Geo-Location is not accepted or the browser doesn't support Geo-Location, the map is centred on Firhouse, Dublin, Ireland.

How? - `getCurrentLocation(map, home);` has 2 parameters, the Google Map Object `map`, and a location `home` (`let home = { lat: 53.274346, lng: -6.348835 };`). First a check is performed to see whether the browser supports Geo-Location, if not the map is centred on `home`. If Geo-Location is supported, then the browser requests the User's permission to use the current location. If accepted, the map is centred on the current location, and if not it's centred on the default which is `home`.

[(Js) - Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

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

How? - Some of the code snippets are taken from the Google Map JavaScript API documentation, and are used by the Code Institute and Bill Traversy walkthroughs. Index.html has the map placeholder in `<div class="map" id="map"></div>` to display the map from maps.js, and styled in style.css. The linear-gradient background is enabled by the `backgroundColor: "none",` in initMap() and the `background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` in style.css of `html, body {...}`.

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

Google Map placeholder used by maps.js to place the Google Map and Map Markers using the `#map` element.

`<div class="map" id="map"></div>`

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

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
@import url('https://fonts.googleapis.com/css?family=Raleway|&display=swap');
...
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

[(Js) - Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

The main Google Map initMap function, from the Google Map JavaScript API documentation. I've set `home` to my home address and the default map centre when Geo-Location isn't used. `disableDefaultUI: true,` disables the default Google Map controls, as I use customised ones instead to better align to website layout and design. `backgroundColor: "none",` disables the default Google Map background colour of grey, and is set to the linear-gradient used throughout the website in style.css.

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
To finally resolve the occasional "Uncaught..." error common to loading Google Maps, I control the loading of the `<script></script>` before `initMap()`. Courtesy of ["Prof3ssorSt3v3"](https://gist.github.com/prof3ssorSt3v3/e0e07e0fd0b293d043d4ff2504fc847b).

Removed the loading of the Google Map Script file from the HTML file, to dynamically create and load it before `initMap()` updating the HTML file dynamically. Removed the '&callback=initMap' from the URL, calling `initMap()` from maps.js instead. No need for the 'async', nor 'defer' attributes either.

We create the `<script>` element in index.html. We listen to the DOM, to make sure it's fully loaded. We load the Google Map JS Script:
`<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDKoKXKgFfLTb9SNLk0QEq1FmnNJD3hSg"></script>`. We then call `initMap()`.

```
let script = document.createElement("script");
document.addEventListener("DOMContentLoaded", () => {
    document.head.appendChild(script);
    script.addEventListener("load", () => {
        initMap();
    });
});
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDKoKXKgFfLTb9SNLk0QEq1FmnNJD3hSg`;
```

#### --- * --- * === { Navigational Controls } === * --- * ---
![Google Map, Map Type](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Google%20Nav%20Controls%20-%20Map%20Sattelite.png) ![Google Map Zoom Controls](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Google%20Map%20Nav%20Controls%20-%20Zoom.png)

Why? - To allow recognisable ways in which to navigate Google Maps, and creating a common look-and-feel of the website, custom controls are used, creating a better User Design Experience for the User.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 001 - Features and Functions Overview - Google Maps (geoLocation accepted)
* 012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)

What? - Customised, based off of Google Maps JavaScript API example for customised navigation controls, and styled using CSS.

How? - These code snippets are taken from the Google Maps JavaScript API documentation, and modified to suit my website. Index.html has the HTML tags for the Navigational Controls. These are styled by the CSS code which is from Google and modified to suit the website look-and-feel. Maps.js calls on the 2 functions in mapsControls.js, `function initZoomControl(map)` controls the zoom controls (+ and - buttons on the mid-right of the viewport). `function initMapTypeControl(map)` controls the map type selection, of Satellite or Map. The button borders and click status are set by `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`.

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

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

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
        </div>
```

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

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

[(Js) - Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

These 2 function calls are for the customised Navigational Controls and are saved in a separate file described below, mapControls.js.

```
	initZoomControl(map);
	initMapTypeControl(map);
```

[(Js) - Production Code: mapControls.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/mapControls.js)

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

Why? - Provide Users an unobtrusive fixed footer with a scrollable Google Map and CSS Modals to provide additional information regarding the use of the website (probably not required), links to the API's and Code Snippets used to the benefit of collaborating developers and employers, as well as a Contact Form to engage with me and a credibility modal ("Ego-page").

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

What? - CSS Modals with an About Modal describing how to navigate and use the website, an API Modal providing links to the API documentation of the API's used on this project/website, a Code Snipped Modal with links to resources and courses used to further my knowledge and skills to create this website, a Contact Form Modal for Users to engage with me, and a Credibility Modal to gain an understanding of who I am and with links to the Code Institute Milestone Projects.

How? - A Grid Layout, together with Flexbox is used on this website. The Grid Layout described below uses `grid-template-areas` as they're easy to understand and use (visually clear). The Fixed Footer area uses 3 columns x 1 row.

FontAwesome icons are used for the Fixed Footer links. Styling of the Fixed Footer with the linear-gradient feature and Raleway font.

Grid Layout for the Fixed Footer with the same linear-gradient used throughout the website, the Raleway Font, and 3D shadow giving the website a 3D look-and-feel.

The FontAwesome Fixed Footer links are styled by `a {...}` and `a i:hover` zooming in on the icons when hovered over to make them stand out as clickable elements.

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

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

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

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

How? - Hovering over the FontAwesome icons scales it to 1.5 times the original size, clicking on it opens the About CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Index.html contains the Fixed Footer FontAwesome links, and the CSS Modals and their content. Styling of the CSS Modals is specified in style.css. The only JavaScript component is the Contact Form sendemail.js script.

The code details are covered under each CSS Modal sub-heading (About, API's, Code Snippets, Contact Form, Credibility).

#### --- * --- * === { CSS Modals - About } === * --- * ---
![About CSS Modal](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/5.%20FF%20CSS%20Modal%20-%20About.png)

Why? - Providing Users with an overview of the website, setting correct and clear expectations as well as aiding those not as savvy to use the website features.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)
* User - UC 3 - CSS Modals (geoLocation already accepted)

What? - About, which describes the use and navigation of the website.

How? - Index.html contains the FontAwesome exclamation-mark link icon that opens up the About CSS Modal with the content in index.html. The CSS Modal control and styling is defined in style.css.

Hovering over the FontAwesome exclamation-point icon scales it to 1.5 times the original size, clicking on it opens the About CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

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

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

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
    background: rgba(0, 0, 0, 0.20);
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

Hovering over the FontAwesome file-code-o icon scales it to 1.5 times the original size, clicking on it opens the API's CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Clicking on the links opens up the external websites in new tabs `target=_blank`.

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

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

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

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
    background: rgba(0, 0, 0, 0.20);
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

Hovering over the FontAwesome fa-code icon scales it to 1.5 times the original size, clicking on it opens the Code Snippet CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Clicking on the links opens up the external websites in new tabs `target=_blank`.

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

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

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

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
    background: rgba(0, 0, 0, 0.20);
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

Hovering over the FontAwesome fa-envelope icon scales it to 1.5 times the original size, clicking on it opens the Contact Form CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Clicking on the "Send Feedback" button without filling out the form fields will result in a message asking the User to "Please fill out this field." Filling out the form correctly and clicking the "Send Feedback" button sends the form details as an e-mail to me with the "Name, e-mail, and text." If the form submission is successful a message is displayed for 5 seconds below the form, "Thank you! Email sent successfully." and the form fields are cleared. If an error occurs, the message is "Apologies, something went wrong. Please try again."

When index.html is loaded the EmailJS script and function with my unique key are loaded together with [(Js) - sendemail.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/sendemail.js).

Clicking on "Send Feedback" triggers `<form onsubmit="return sendMail(this);" id="feedbackform">` in index.html. That in turn calls on [(Js) - sendemail.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/sendemail.js) to send the e-mail.

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

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

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

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

[(Js) - Production Code: sendemail.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/sendemail.js)

This code is a modified version of the EmailJS API documentation. It maps the HTML form to the EmailJS template defined on the EmailJS website, sends the form to the EmailJS website. On success ("Success OK 200") the script updates the Contact Form with the success message of "Thank you! Email sent successfully." for 5 seconds (long enough for the User to read and understand the message), and clears the form fields. If the form is unsuccessful the message on the Contact Form is "Apologies, something went wrong. Please try again." for 5 seconds, and retains the previously filled out form fields to allow the User to try again.

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

Why? - Providing Users with access to the second Code Institute Milestone Project details (code, documentation, automated testing) to assess my knowledge and skills as a Front-End/Full-Stack Developer, access to my first Milestone Project, and my Resumé, all to add to my credibility.

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

Hovering over the FontAwesome fa-user icon scales it to 1.5 times the original size, clicking on it opens the Credibility CSS Modal. A CSS backdrop lies behind the CSS Modal disabling clicking any other links and buttons on the website. Only the Close button on the CSS Modal is clickable.

Clicking on the links opens up the external websites in new tabs `target=_blank`.

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

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

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

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
    background: rgba(0, 0, 0, 0.20);
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
![Google Map Markers](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/11.%20Google%20Map%20Markers.png)

Why? - The Google Map Markers provide information about European capital cities and countries that are of interest to the Users of the website.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 003 - Features and Functions Overview - Samples (geoLocation accepted)
* 004 - User - UC 1 - Overview and Statistics (geoLocation already accepted)
* 009 - Collaborator - UC 6 - Overview and Statistics (geoLocation already accepted)
* 012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)

What? - The Map Markers are positioned on the capital cities of Europe and are placed by the coordinates specified in the internal `markersArray[]` in maps.js.

How? - The Map Markers are positioned on the capital cities of Europe and are placed by the coordinates specified in the internal `markersArray[]` in maps.js. The `markersArray[]` is an expansion of the one provided by the Code Institute mini-project walkthrough by Matt Rudge. The `for (let i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    }` creates and adds the Google Map Markers to the Google Map. `markersArray.map(markerArrayItem => { addMarker(markerArrayItem); });` could be used instead, though I find the for-loop to be clearer in terms of what is done, while the `map()` is easier to read. :-)

[(Js) - Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

The internal `markersArray[]` in maps.js. In future it will be moved to a noSQL database such as Cloud Firestore or MongoDB.

Two constants are defined, one as a placeholder for the OpenWeather API, and the other for the InfoWindow (`toolTipButtons`) buttons for the JS Overview and Statistics Modals.

The array contains:

* European capital city coordinates.
* InfoWindow content such as city, country, and coordinates.
* Name used as an index for the D3 and REST Countries API's.
* Overview as a placeholder for the Overview JS Modal.
* D3 as a placeholder for the Statistics JS Modal.

```
const weatherInfo = `<div class="weather" id="weather"></div>`;
const toolTipButtons = `<br><div class="modalActions"><button class="button" id="buttonOver">Overview</button><button class="buttton" id="buttonStats">Statistics</button></div>`;

let markersArray = [
    {
        coords: { lat: 53.274346, lng: -6.348835 },
        content: `<p>Dublin, Ireland: 53.3498° N, 6.2603° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Dublin, Ireland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 51.5074, lng: 0.1278 },
        content: `<p>London, United Kingdom of Great Britain and Northern Ireland: 51.5074° N, 0.1278°</p>${weatherInfo} ${toolTipButtons}`,
        name: "London, United Kingdom of Great Britain and Northern Ireland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.3293, lng: 18.0686 },
        content: `<p>Stockholm, Sweden: 59.3293° N, 18.0686° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Stockholm, Sweden",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.9139, lng: 10.7522 },
        content: `<p>Oslo, Norway: 59.9139° N, 10.7522° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Oslo, Norway",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 55.6761, lng: 12.5683 },
        content: `<p>Copenhagen, Denmark: 55.6761° N, 12.5683° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Copenhagen, Denmark",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 60.1699, lng: 24.9384 },
        content: `<p>Helsinki, Finland: 60.1699° N, 24.9384° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Helsinki, Finland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.4370, lng: 24.7536 },
        content: `<p>Tallinn, Estonia: 59.4370° N, 24.7536° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tallinn, Estonia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 56.9496, lng: 24.1052 },
        content: `<p>Riga, Latvia: 56.9496° N, 24.1052° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Riga, Latvia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 54.6872, lng: 25.2797 },
        content: `<p>Vilnius, Lithuania: 54.6872° N, 25.2797° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vilnius, Lithuania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.2297, lng: 21.0122 },
        content: `<p>Warsaw, Poland: 52.2297° N, 21.0122° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Warsaw, Poland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.0755, lng: 14.4378 },
        content: `<p>Prague, Czech Republic: 50.0755° N, 14.4378° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Prague, Czech Republic",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 64.1466, lng: -21.9426 },
        content: `<p>Reykjavik, Iceland: 64.1466° N, 21.9426° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Reykjavik, Iceland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.8566, lng: 2.3522 },
        content: `<p>Paris, France: 48.8566° N, 2.3522° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Paris, France",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.8503, lng: 4.3517 },
        content: `<p>Brussels, Belgium: 50.8503° N, 4.3517° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Brussels, Belgium",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.4168, lng: -3.7038 },
        content: `<p>Madrid, Spain: 40.4168° N, 3.7038° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Madrid, Spain",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 38.7223, lng: -9.1393 },
        content: `<p>Lisbon, Portugal: 38.7223° N, 9.1393° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Lisbon, Portugal",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9028, lng: 12.4964 },
        content: `<p>Rome, Italy: 41.9028° N, 12.4964° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Rome, Italy",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 46.9480, lng: 7.4474 },
        content: `<p>Bern, Switzerland: 46.9480° N, 7.4474° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bern, Switzerland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.1660, lng: 9.5554 },
        content: `<p>Liechtenstein, Liechtenstein: 47.1660° N, 9.5554° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Liechtenstein, Liechtenstein",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 49.8153, lng: 6.1296 },
        content: `<p>Luxembourg, Luxembourg: 49.8153° N, 6.1296° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Luxembourg, Luxembourg",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.9424, lng: 12.4578 },
        content: `<p>San Marino, San Marino: 43.9424° N, 12.4578° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "San Marino, San Marino",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.5063, lng: 1.5218 },
        content: `<p>Andorra la Vella, Andorra: 42.5063° N, 1.5218° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Andorra, Andorra",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.7384, lng: 7.4246 },
        content: `<p>Monaco, Monaco: 43.7384° N, 7.4246° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Monaco, Monaco",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9029, lng: 12.4534 },
        content: `<p>Vatican City, Holy See: 41.9029° N, 12.4534° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vatican City, Holy See",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.3667, lng: 4.8945 },
        content: `<p>Amsterdam, Netherlands: 52.3667° N, 4.8945° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Amsterdam, Netherlands",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.5200, lng: 13.4050 },
        content: `<p>Berlin, Germany: 52.5200° N, 13.4050° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Berlin, Germany",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.2082, lng: 16.3738 },
        content: `<p>Vienna, Austria: 48.2082° N, 16.3738° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vienna, Austria",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 46.0569, lng: 14.5058 },
        content: `<p>Ljubljana, Slovenia: 46.0569° N, 14.5058° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Ljubljana, Slovenia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 45.8150, lng: 15.9819 },
        content: `<p>Zagreb, Croatia: 45.8150° N, 15.9819° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Zagreb, Croatia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.8563, lng: 18.4131 },
        content: `<p>Sarajevo, Bosnia and Herzegovina: 43.8563° N, 18.4131° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Sarajevo, Bosnia and Herzegovina",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.4304, lng: 19.2594 },
        content: `<p>Podgorica, Montenegro: 42.4304° N, 19.2594° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Podgorica, Montenegro",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9981, lng: 21.4254 },
        content: `<p>Skopje, Macedonia (the former Yugoslav Republic of): 41.9981° N, 21.4254° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Skopje, Macedonia (the former Yugoslav Republic of)",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.3275, lng: 19.8187 },
        content: `<p>Tirana, Albania: 41.3275° N, 19.8187° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tirana, Albania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 37.9838, lng: 23.7275 },
        content: `<p>Athens, Greece: 37.9838° N, 23.7275° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Athens, Greece",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.6977, lng: 23.3219 },
        content: `<p>Sofia, Bulgaria: 42.6977° N, 23.3219° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Sofia, Bulgaria",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 44.4268, lng: 26.1025 },
        content: `<p>Bucharest, Romania: 44.4268° N, 26.1025° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bucharest, Romania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 39.9334, lng: 32.8597 },
        content: `<p>Ankara, Turkey: 39.9334° N, 32.8597° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Ankara, Turkey",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.4979, lng: 19.0402 },
        content: `<p>Budapest, Hungary: 47.4979° N, 19.0402° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Budapest, Hungary",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.1486, lng: 17.1077 },
        content: `<p>Bratislava, Slovakia: 48.1486° N, 17.1077° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bratislava, Slovakia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.0105, lng: 28.8638 },
        content: `<p>Chisinau, Moldova (Republic of): 47.0105° N, 28.8638° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Chisinau, Moldova (Republic of)",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.4501, lng: 30.5234 },
        content: `<p>Kyiv, Ukraine: 50.4501° N, 30.5234° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Kyiv, Ukraine",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 55.7558, lng: 37.6173 },
        content: `<p>Moscow, Russian Federation: 55.7558° N, 37.6173° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Moscow, Russian Federation",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 35.8989, lng: 14.5146 },
        content: `<p>Valletta, Malta: 35.8989° N, 14.5146° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Valletta, Malta",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.6629, lng: 21.1655 },
        content: `<p>Prishtina,  Kosovo: 42.6629° N, 21.1655° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Prishtina,  Kosovo",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 51.1605, lng: 71.4704 },
        content: `<p>Nur-Sultan, Kazakhstan: 51.1605° N, 71.4704° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nur-Sultan, Kazakhstan",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.7151, lng: 44.8271 },
        content: `<p>Tbilisi, Georgia: 41.7151° N, 44.8271° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tbilisi, Georgia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 35.1856, lng: 33.3823 },
        content: `<p>Nicosia, Cyprus: 35.1856° N, 33.3823° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nicosia, Cyprus",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 53.9006, lng: 27.5590 },
        content: `<p>Minsk, Belarus: 53.9006° N, 27.5590° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Minsk, Belarus",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.4093, lng: 49.8671 },
        content: `<p>Baku, Azerbaijan: 40.4093° N, 49.8671° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Baku, Azerbaijan",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.1872, lng: 44.5152 },
        content: `<p>Yerevan, Armenia: 40.1872° N, 44.5152° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Yerevan, Armenia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 44.7866, lng: 20.4489 },
        content: `<p>Belgrade, Serbia: 44.7866° N, 20.4489° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Belgrade, Serbia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 64.1814, lng: -51.6941 },
        content: `<p>Nuuk, Greenland: 64.1814° N, 51.6941° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nuuk, Greenland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    }
];
```

The `for (let i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    }` creates and adds the Google Map Markers to the Google Map.

```
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

        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }
```

### Google Map Marker InfoWindows and Content
![Google Map Marker InfoWindow -  Paris, France](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Google%20Map%20Marker%20InfoWindow.png)

Why? - The Google Map Markers InfoWindows provide information about the city, country, city coordinates, real-time weather data, and two buttons to JS Modals with additional information of interest to the User. This dashboard approach means the Users navigate "in-place" with information provided in layers through InfoWindows and JS Modals.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 003 - Features and Functions Overview - Samples (geoLocation accepted)
* 004 - User - UC 1 - Overview and Statistics (geoLocation already accepted)
* 009 - Collaborator - UC 6 - Overview and Statistics (geoLocation already accepted)
* 012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)

What? - The Map Markers are positioned on the capital cities of Europe and when clicked open up InfoViews with the city, the country, the latitude and longitude of the city, all stored in the internal `markersArray[]` in maps.js. The weather information is populated dynamically in real-time, fetched from the OpenWeather API. Two buttons, Overview and Statistics open JS Modals with further details. The InfoWindow closes after 3 seconds, more than enough time to read the InfoWindow data and click on a button.

How? - The Google Map Marker InfoWindow the Google classes `.gm-style-iw, .gm-style-iw-c` are styled in the same linear-gradient used throughout the website. To make this work, some JavaScript statements remove the Google class `.gm-style-iw-d` and a padding of 12px is set `document.querySelector(".gm-style-iw-d").className = ""; document.querySelector(".gm-style-iw-c").style = "padding: 12px";`.

Background is set to `linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));` which is the same used throughout the website to create a common look-and-feel.

The city, country, coordinates are provided by the internal `markersArray[]` in maps.js. The weather information is fetched in real-time from the OpenWeather API. The two buttons are provided by the `markersArray[]` and styled in style.css.

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

The Google Map Marker InfoWindow the Google classes `.gm-style-iw, .gm-style-iw-c` are styled in the same linear-gradient used throughout the website.

The Raleway font is set for all elements to ensure consistency.

```
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

[(Js) - Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

The internal `markersArray[]` in maps.js. In future it will be moved to a noSQL database such as Cloud Firestore or MongoDB.

Two constants are defined, one as a placeholder for the OpenWeather API, and the other for the InfoWindow (`toolTipButtons`) buttons for the JS Overview and Statistics Modals.

The array contains:

* European capital city coordinates.
* InfoWindow content such as city, country, and coordinates.
* Name used as an index for the D3 and REST Countries API's.
* Overview as a placeholder for the Overview JS Modal.
* D3 as a placeholder for the Statistics JS Modal.

```
const weatherInfo = `<div class="weather" id="weather"></div>`;
const toolTipButtons = `<br><div class="modalActions"><button class="button" id="buttonOver">Overview</button><button class="buttton" id="buttonStats">Statistics</button></div>`;

let markersArray = [
    {
        coords: { lat: 53.274346, lng: -6.348835 },
        content: `<p>Dublin, Ireland: 53.3498° N, 6.2603° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Dublin, Ireland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 51.5074, lng: 0.1278 },
        content: `<p>London, United Kingdom of Great Britain and Northern Ireland: 51.5074° N, 0.1278°</p>${weatherInfo} ${toolTipButtons}`,
        name: "London, United Kingdom of Great Britain and Northern Ireland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.3293, lng: 18.0686 },
        content: `<p>Stockholm, Sweden: 59.3293° N, 18.0686° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Stockholm, Sweden",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.9139, lng: 10.7522 },
        content: `<p>Oslo, Norway: 59.9139° N, 10.7522° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Oslo, Norway",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 55.6761, lng: 12.5683 },
        content: `<p>Copenhagen, Denmark: 55.6761° N, 12.5683° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Copenhagen, Denmark",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 60.1699, lng: 24.9384 },
        content: `<p>Helsinki, Finland: 60.1699° N, 24.9384° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Helsinki, Finland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.4370, lng: 24.7536 },
        content: `<p>Tallinn, Estonia: 59.4370° N, 24.7536° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tallinn, Estonia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 56.9496, lng: 24.1052 },
        content: `<p>Riga, Latvia: 56.9496° N, 24.1052° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Riga, Latvia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 54.6872, lng: 25.2797 },
        content: `<p>Vilnius, Lithuania: 54.6872° N, 25.2797° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vilnius, Lithuania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.2297, lng: 21.0122 },
        content: `<p>Warsaw, Poland: 52.2297° N, 21.0122° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Warsaw, Poland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.0755, lng: 14.4378 },
        content: `<p>Prague, Czech Republic: 50.0755° N, 14.4378° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Prague, Czech Republic",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 64.1466, lng: -21.9426 },
        content: `<p>Reykjavik, Iceland: 64.1466° N, 21.9426° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Reykjavik, Iceland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.8566, lng: 2.3522 },
        content: `<p>Paris, France: 48.8566° N, 2.3522° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Paris, France",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.8503, lng: 4.3517 },
        content: `<p>Brussels, Belgium: 50.8503° N, 4.3517° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Brussels, Belgium",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.4168, lng: -3.7038 },
        content: `<p>Madrid, Spain: 40.4168° N, 3.7038° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Madrid, Spain",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 38.7223, lng: -9.1393 },
        content: `<p>Lisbon, Portugal: 38.7223° N, 9.1393° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Lisbon, Portugal",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9028, lng: 12.4964 },
        content: `<p>Rome, Italy: 41.9028° N, 12.4964° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Rome, Italy",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 46.9480, lng: 7.4474 },
        content: `<p>Bern, Switzerland: 46.9480° N, 7.4474° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bern, Switzerland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.1660, lng: 9.5554 },
        content: `<p>Liechtenstein, Liechtenstein: 47.1660° N, 9.5554° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Liechtenstein, Liechtenstein",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 49.8153, lng: 6.1296 },
        content: `<p>Luxembourg, Luxembourg: 49.8153° N, 6.1296° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Luxembourg, Luxembourg",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.9424, lng: 12.4578 },
        content: `<p>San Marino, San Marino: 43.9424° N, 12.4578° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "San Marino, San Marino",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.5063, lng: 1.5218 },
        content: `<p>Andorra la Vella, Andorra: 42.5063° N, 1.5218° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Andorra, Andorra",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.7384, lng: 7.4246 },
        content: `<p>Monaco, Monaco: 43.7384° N, 7.4246° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Monaco, Monaco",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9029, lng: 12.4534 },
        content: `<p>Vatican City, Holy See: 41.9029° N, 12.4534° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vatican City, Holy See",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.3667, lng: 4.8945 },
        content: `<p>Amsterdam, Netherlands: 52.3667° N, 4.8945° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Amsterdam, Netherlands",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.5200, lng: 13.4050 },
        content: `<p>Berlin, Germany: 52.5200° N, 13.4050° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Berlin, Germany",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.2082, lng: 16.3738 },
        content: `<p>Vienna, Austria: 48.2082° N, 16.3738° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vienna, Austria",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 46.0569, lng: 14.5058 },
        content: `<p>Ljubljana, Slovenia: 46.0569° N, 14.5058° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Ljubljana, Slovenia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 45.8150, lng: 15.9819 },
        content: `<p>Zagreb, Croatia: 45.8150° N, 15.9819° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Zagreb, Croatia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.8563, lng: 18.4131 },
        content: `<p>Sarajevo, Bosnia and Herzegovina: 43.8563° N, 18.4131° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Sarajevo, Bosnia and Herzegovina",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.4304, lng: 19.2594 },
        content: `<p>Podgorica, Montenegro: 42.4304° N, 19.2594° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Podgorica, Montenegro",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9981, lng: 21.4254 },
        content: `<p>Skopje, Macedonia (the former Yugoslav Republic of): 41.9981° N, 21.4254° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Skopje, Macedonia (the former Yugoslav Republic of)",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.3275, lng: 19.8187 },
        content: `<p>Tirana, Albania: 41.3275° N, 19.8187° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tirana, Albania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 37.9838, lng: 23.7275 },
        content: `<p>Athens, Greece: 37.9838° N, 23.7275° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Athens, Greece",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.6977, lng: 23.3219 },
        content: `<p>Sofia, Bulgaria: 42.6977° N, 23.3219° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Sofia, Bulgaria",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 44.4268, lng: 26.1025 },
        content: `<p>Bucharest, Romania: 44.4268° N, 26.1025° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bucharest, Romania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 39.9334, lng: 32.8597 },
        content: `<p>Ankara, Turkey: 39.9334° N, 32.8597° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Ankara, Turkey",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.4979, lng: 19.0402 },
        content: `<p>Budapest, Hungary: 47.4979° N, 19.0402° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Budapest, Hungary",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.1486, lng: 17.1077 },
        content: `<p>Bratislava, Slovakia: 48.1486° N, 17.1077° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bratislava, Slovakia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.0105, lng: 28.8638 },
        content: `<p>Chisinau, Moldova (Republic of): 47.0105° N, 28.8638° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Chisinau, Moldova (Republic of)",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.4501, lng: 30.5234 },
        content: `<p>Kyiv, Ukraine: 50.4501° N, 30.5234° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Kyiv, Ukraine",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 55.7558, lng: 37.6173 },
        content: `<p>Moscow, Russian Federation: 55.7558° N, 37.6173° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Moscow, Russian Federation",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 35.8989, lng: 14.5146 },
        content: `<p>Valletta, Malta: 35.8989° N, 14.5146° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Valletta, Malta",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.6629, lng: 21.1655 },
        content: `<p>Prishtina,  Kosovo: 42.6629° N, 21.1655° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Prishtina,  Kosovo",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 51.1605, lng: 71.4704 },
        content: `<p>Nur-Sultan, Kazakhstan: 51.1605° N, 71.4704° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nur-Sultan, Kazakhstan",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.7151, lng: 44.8271 },
        content: `<p>Tbilisi, Georgia: 41.7151° N, 44.8271° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tbilisi, Georgia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 35.1856, lng: 33.3823 },
        content: `<p>Nicosia, Cyprus: 35.1856° N, 33.3823° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nicosia, Cyprus",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 53.9006, lng: 27.5590 },
        content: `<p>Minsk, Belarus: 53.9006° N, 27.5590° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Minsk, Belarus",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.4093, lng: 49.8671 },
        content: `<p>Baku, Azerbaijan: 40.4093° N, 49.8671° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Baku, Azerbaijan",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.1872, lng: 44.5152 },
        content: `<p>Yerevan, Armenia: 40.1872° N, 44.5152° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Yerevan, Armenia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 44.7866, lng: 20.4489 },
        content: `<p>Belgrade, Serbia: 44.7866° N, 20.4489° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Belgrade, Serbia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 64.1814, lng: -51.6941 },
        content: `<p>Nuuk, Greenland: 64.1814° N, 51.6941° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nuuk, Greenland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    }
];
```

The `for (let i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    }` creates and adds the Google Map Markers to the Google Map.

```
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

        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }
```

These JavaScript statements remove the Google class `.gm-style-iw-d` and add a padding of 12px to the InfoWindow.

```
	document.querySelector(".gm-style-iw-d").className = "";
	document.querySelector(".gm-style-iw-c").style = "padding: 12px";
```

They work in conjunction with the CSS styling mentioned above:

```
.gm-style-iw,
.gm-style-iw-c {
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
}
```
If there is content then an InfoWindow is created and populated with the content in the `markersArray[]`. The `marker.addListener("click"...` listens for a "click" on the Google Map Marker.

When a Google Map Marker is clicked the coordinates of the current Google Map Marker is converted to a string, the opening and closing parenthesis are removed together with a space, and the string split into two: latitude and longitude. For example, `(41.9981, 21.4254)` becomes correctly formatted `markerString = ["41.9981","21.4254"];` to be used by the `fetch()` URL string.

The `fetch()` calls the OpenWeather API for the current weather information. The JSON data is converted and some of the values received stored in variables for use to populate the Google Map Marker InfoWindow.

The weather data gives us a good idea of what it's currently like in the European City we clicked on:

* tempValue contains the temperature converted from a float to an integer as it looks nicer when displayed.
* descValue contains the weather description.
* airPressure contains the air pressure.
* nameValue is the name of the place at the coordinates, and this is used to create unique JS Overview and Statistics Modals referenced by `document.getElementById`.

The `if (document.getElementById("weather"))...` checks whether this is the first time this Google Map Marker has been clicked on, and sets the `weatherID` of the InfoWindow to a unique ID based on the nameValue received from the OpenWeather API. The two InfoView buttons to the JS Overview and Statistics modals are also provided unique ID's to ensure the correct information is populated in the JS Modals.

The event handlers for the buttons function is called with two parameters, `buttonIDOver, buttonIDStats`.

The real-time weather data populates the InfoWindow:

```
document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
```

Any `fetch()` errors are caught and if no data received the weather info in the InfoWindow is blank.

A timeout of 3 seconds is set before the InfoWindow is closed.

```
if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener("click", () => {

                let markerString = String(marker.position);
                markerString = markerString.replace(/[() ]/g, "");
                markerStringArray = markerString.split(",");

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${markerStringArray[0]}&lon=${markerStringArray[1]}&units=metric&appid=4788a47d724b35cf9cc4e281a1893b4c`)
                    .then(response => response.json())
                    .then(data => {
                        let tempValue = parseInt(data.main.temp);
                        let descValue = data.weather[0].description;
                        let airPressure = data.main.pressure;
                        let nameValue = data.name;

                        document.querySelector(".gm-style-iw-d").className = "";
                        document.querySelector(".gm-style-iw-c").style = "padding: 12px";

                        if (document.getElementById("weather")) {
                            let weatherID = document.getElementById("weather").id = "weather" + nameValue;
                            let buttonIDOver = document.getElementById("buttonOver").id = "buttonOver" + nameValue;
                            let buttonIDStats = document.getElementById("buttonStats").id = "buttonStats" + nameValue;
                            document.getElementById(buttonIDOver).className = "button";
                            document.getElementById(buttonIDStats).className = "button";
                            configureButtonEventHandlers(buttonIDOver, buttonIDStats);
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                        } else {
                            let weatherID = "weather" + nameValue;
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                        }
                    })
                    .catch(err => console.log(err));

                setTimeout(() => {
                    infoWindow.close(map, marker);
                }, 3000);
                infoWindow.open(map, marker);
            });
        }
```

The `configureButtonEventHandlers` is called from within the `addListener()` with two parameters `buttonIDOver, buttonIDStats` referencing the HTML ID's of the InfoWindow buttons. Two Event Listeners with associated Handlers are created for the two InfoWindow buttons.

When either button is clicked the backdrop is toggled, dimming the background (style.css) and stops all clicking on anything "behind" the JS Modal. It references the modal defined in index.html (please see details below, JS Overview Modal and JS Statistics Modal).

```
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
                document.getElementById("modal-content").innerHTML = `<h4>Overview: ${marker.name}</h4> ${marker.overview}`;
                let cityArray = marker.name.split(", ");
                fetchCountry(cityArray[1], displayCountry);
            };
            buttonOverview.addEventListener("click", overviewModalHandler);

            const statisticsModalHandler = () => {
                toggleBackdrop();
                toggleModal();
                document.getElementById("modal-content").innerHTML = `<h4>Statistics: ${marker.name}</h4><div class="canvas"></div><div>${marker.d3}`;
                let cityArray = marker.name.split(", ");
                d3Stats(cityArray[0], 200, 200, "M", "rgb(0, 0, 0)");
                fetchCountry(cityArray[1], displayStats);
            };
            buttonStats.addEventListener("click", statisticsModalHandler);
        };

        document.getElementById("close").onclick = () => { closeModal(); };

        const closeModal = () => {
            toggleModal();
            toggleBackdrop();
        };
```

### JS Overview Modal
![JS Overview Modal: Paris, France](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/JS%20Overview%20Modal%20for%20Paris.png)

Why? - Provides country data which is of use or interest to a User.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 003 - Features and Functions Overview - Samples (geoLocation accepted)
* 004 - User - UC 1 - Overview and Statistics (geoLocation already accepted)
* 009 - Collaborator - UC 6 - Overview and Statistics (geoLocation already accepted)
* 012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)

What? - Provides country data, the flag, native name, regions, languages, currencies, and calling code, which is of use or interest to a User.

How? - The data is created in real-time from data fetched from the REST Countries API and the internal `markersArray[]` (please see above, Google Map Marker InfoWindows and Content for details).

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

This is the JS Modal used by maps.js and styled by style.css. It includes a placeholder for innerHTML and a close button ("x" in the top-right corner).

```
    <aside class="modal card" id="add-modal">
        <div class="modal__content" id="modal-content">
            <p>Modal Content Here!</p>
        </div>
        <div class="modal__actions">
            <button class="button" id="close" onclick="closeModal()">Close</button>
        </div>
    </aside>
```

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

Displays details without leaving the page, providing a clear and clean navigation option. A backdrop, similar to the CSS Modal is styled with the same look-and-feel though created and controlled by JS in maps.js.

```
.card {
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.modal {
    position: fixed;
    z-index: 100;
    width: 80%;
    top: 5vh;
    left: 10%;
    display: none;
    font-family: Raleway, sans-serif;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    overflow-y: auto;
    max-height: 90vh;
}

.modal.visible {
    display: block;
    animation: fade-slide-in 0.3s ease-out forwards;
}

.modal .modal__title {
    margin: 0;
    padding: 1rem;
    border-bottom: 1px solid rgb(0, 50, 158);
    background: rgb(0, 50, 158);
    color: rgb(0, 0, 0);
    border-radius: 10px 10px 0 0;
}

.modal .modal__content {
    padding: 1rem;
    font-family: inherit;
    border-radius: 10px 10px 0 0;
}

.modal .modal__actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
}

#add-modal .modal__content {
    display: flex;
    flex-direction: column;
}

hr {
    width: 80%;
    height: 2px;
    margin-left: auto;
    margin-right: auto;
    background-color: #666;
    border: 0 none;
    margin-top: 5px;
    margin-bottom: 5px;
}

.flag,
svg {
    margin-top: 5px;
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

[(Js) - Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

The `configureButtonEventHandlers` is called from within the `addListener()` with two parameters `buttonIDOver, buttonIDStats` referencing the HTML ID's of the InfoWindow buttons. Two Event Listeners with associated Handlers are created for the two InfoWindow buttons.

When either button is clicked the backdrop is toggled (`toggleBackdrop();`), dimming the background (style.css) and stops all clicking on anything "behind" the JS Modal. It references the modal defined in index.html and is made visible by `toggleModal();`.

The JS Overview Modal is updated with ```document.getElementById("modal-content").innerHTML = `<h4>Overview: ${marker.name}</h4> ${marker.overview}`;```, for example "Overview: Dublin, Ireland" and a placeholder is created for the real-time content from the REST Countries API. `let cityArray = marker.name.split(", ");` splits the city and country to use the country as a parameter in `fetchCountry(cityArray[1], displayCountry);` followed by `displayCountry();`.

`fetchCountry(cityArray[1], displayCountry);` is called with two parameters, the country and the name of the `functionCall` to call (`displayCountry` for the JS Overview Modal or `displayStats` for the JS Statistics Modal). It checks if `findCountryObject` is populated (=== 0), if so `fetch()` from the REST Countries API is called to populate `findCountryObject` else the existing data is used (previously fetched).

`displayCountry()` checks the languages and currencies arrays for multiple objects and creates the relevant object (for example, "Irish, English." and "Euro, Dollars.") to make it look good when displayed to the User.

Using `document,querySelector("#...").innerHTML = ...;` the JS Overview Modal is populated with the flag, native name, regions, languages, currencies, and calling code.

```
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
                document.getElementById("modal-content").innerHTML = `<h4>Overview: ${marker.name}</h4> ${marker.overview}`;
                let cityArray = marker.name.split(", ");
                fetchCountry(cityArray[1], displayCountry);
            };
            buttonOverview.addEventListener("click", overviewModalHandler);

            const statisticsModalHandler = () => {
                toggleBackdrop();
                toggleModal();
                document.getElementById("modal-content").innerHTML = `<h4>Statistics: ${marker.name}</h4><div class="canvas"></div><div>${marker.d3}`;
                let cityArray = marker.name.split(", ");
                d3Stats(cityArray[0], 200, 200, "M", "rgb(0, 0, 0)");
                fetchCountry(cityArray[1], displayStats);
            };
            buttonStats.addEventListener("click", statisticsModalHandler);
        };

        document.getElementById("close").onclick = () => { closeModal(); };

        const closeModal = () => {
            toggleModal();
            toggleBackdrop();
        };
```

The `findCountryObject` is declared and populated with data from the REST Countries API using `fetch().then().then()`.

```
let findCountryObject = {};

        let displayCountry = () => {
            let languages = "";

            for (let i = 0; i < findCountryObject.languages.length; i++) {
                if (i === (findCountryObject.languages.length - 1)) {
                    languages += `${findCountryObject.languages[i].name}.`;
                } else {
                    languages += `${findCountryObject.languages[i].name}, `;
                }
            }

            let currencies = "";

            for (let i = 0; i < findCountryObject.currencies.length; i++) {
                if (i === (findCountryObject.currencies.length - 1)) {
                    currencies += `${findCountryObject.currencies[i].name}.`;
                } else {
                    currencies += `${findCountryObject.currencies[i].name}, `;
                }
            }

            document.querySelector("#flag").innerHTML = `<img src="${findCountryObject.flag}" width="150" style="border:2px solid black"></a>`;
            document.querySelector("#overview").innerHTML = `<p>Native Name: "${findCountryObject.nativeName}" => ${findCountryObject.name} --> ${findCountryObject.subregion} --> ${findCountryObject.region}</p>
                <p>Language(s): ${languages} - Currencie(s): ${currencies} - Calling Code: +${findCountryObject.callingCodes[0]}</p>`;
        };

        let fetchCountry = (country, functionCall) => {
            if ((Object.keys(findCountryObject).length) === 0) {
                fetch(`https://restcountries.eu/rest/v2/all`)
                    .then(data => data.json())
                    .then(data => {
                        findCountryObject = data.find(data => data.name === country);
                        functionCall();
                    }).catch(err => console.log(err));
            } else {
                functionCall();
            }
        };


        let displayStats = () => {
            let borders = "";

            for (let i = 0; i < findCountryObject.borders.length; i++) {
                if (i === (findCountryObject.borders.length - 1)) {
                    borders += `${findCountryObject.borders[i]}.`;
                } else {
                    borders += `${findCountryObject.borders[i]}, `;
                }
            }

            if (findCountryObject.gini === null) {
                findCountryObject.gini = "None";
            }
            findCountryObject.population = findCountryObject.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
            findCountryObject.area = findCountryObject.area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

            document.querySelector("#d3").innerHTML = `<p>Population: "${findCountryObject.population}", Area: ${findCountryObject.area} km<sup>2</sup></p>
                <p>Bordering Countrie(s): ${borders}</p><p>Gini Coefficient: ${findCountryObject.gini}, this is a measurement of inequality. The lower the better (< 35).</p>`;
        };
```

### JS Statistics Modal
![JS Statistics Modal: Paris, France](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/JS%20Statistics%20Modal%20for%20Paris.png)

Why? - Provides country statistics which is of use or interest to a User.

Use Case cross-reference ([please see main README.md for details](https://github.com/NaoiseGaffney/CitiesInCountries#processes)):

* 003 - Features and Functions Overview - Samples (geoLocation accepted)
* 004 - User - UC 1 - Overview and Statistics (geoLocation already accepted)
* 009 - Collaborator - UC 6 - Overview and Statistics (geoLocation already accepted)
* 012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)

What? - Provides a real-time dynamic D3 Graph (D3 API) of population data from a Cloud Firestore noSQL database, as well as statistics from the REST Countries API.

How? - The data is created in real-time from data fetched from the Cloud Firestore noSQL database via the D3 API, a graph is created by D3, and the REST Countries API.

[</> - Production Code: index.html](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/index.html)

This is the JS Modal used by maps.js and styled by style.css. It includes a placeholder for innerHTML and a close button ("x" in the top-right corner).

```
    <aside class="modal card" id="add-modal">
        <div class="modal__content" id="modal-content">
            <p>Modal Content Here!</p>
        </div>
        <div class="modal__actions">
            <button class="button" id="close" onclick="closeModal()">Close</button>
        </div>
    </aside>
```

[.css{} - Production Code: style.css](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/styles/style.css)

Displays details without leaving the page, providing a clear and clean navigation option. A backdrop, similar to the CSS Modal is styled with the same look-and-feel though created and controlled by JS in maps.js.

```
.card {
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.modal {
    position: fixed;
    z-index: 100;
    width: 80%;
    top: 5vh;
    left: 10%;
    display: none;
    font-family: Raleway, sans-serif;
    background: linear-gradient(0.25turn, rgba(63, 135, 166, 0.9), rgba(235, 248, 225, 0.9), rgba(246, 157, 60, 0.9));
    overflow-y: auto;
    max-height: 90vh;
}

.modal.visible {
    display: block;
    animation: fade-slide-in 0.3s ease-out forwards;
}

.modal .modal__title {
    margin: 0;
    padding: 1rem;
    border-bottom: 1px solid rgb(0, 50, 158);
    background: rgb(0, 50, 158);
    color: rgb(0, 0, 0);
    border-radius: 10px 10px 0 0;
}

.modal .modal__content {
    padding: 1rem;
    font-family: inherit;
    border-radius: 10px 10px 0 0;
}

.modal .modal__actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
}

#add-modal .modal__content {
    display: flex;
    flex-direction: column;
}

hr {
    width: 80%;
    height: 2px;
    margin-left: auto;
    margin-right: auto;
    background-color: #666;
    border: 0 none;
    margin-top: 5px;
    margin-bottom: 5px;
}

.flag,
svg {
    margin-top: 5px;
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

[(Js) - Production Code: maps.js](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/assets/scripts/maps.js)

The `configureButtonEventHandlers` is called from within the `addListener()` with two parameters `buttonIDOver, buttonIDStats` referencing the HTML ID's of the InfoWindow buttons. Two Event Listeners with associated Handlers are created for the two InfoWindow buttons.

When either button is clicked the backdrop is toggled (`toggleBackdrop();`), dimming the background (style.css) and stops all clicking on anything "behind" the JS Modal. It references the modal defined in index.html and is made visible by `toggleModal();`.

The JS Statistics Modal is updated with ```document.getElementById("modal-content").innerHTML = `<h4>Statistics: ${marker.name}</h4><div class="canvas"></div><div>${marker.d3}`;```, for example "Statistics: Dublin, Ireland" and a placeholder is created for the real-time content from the REST Countries API. `let cityArray = marker.name.split(", ");` splits the city and country to use the country as a parameter in `fetchCountry(cityArray[1], displayStats);` followed by `displayStats();`.

The following code snippet splits the city and country into an array with two values to use the city as a parameter when calling `d3Stats();`. `d3Stats()` is flexible as it takes several parameters to create the Scalable Vector Graphic used to populate the JS Statistics Modal. The parameters are:

* city (`cityArray[0]`), for example "Dublin" which is used as the index for the noSQL database Firestore to collect population data for city and country.
*  width (`200`) in pixels to set the width of the SVG graph.
*  height (`200`) in pixels to set the height of the SVG graph.
*  tickFormat (`"M"`) is the text or symbol used for the Y-axis. In this case "M" = Millions.
*  fillColour (`"rgb(0, 0, 0)"`) is the colour used for the D3 graph. In this case "black" as it contrasts nicely on the linear-gradient background.

```
	let cityArray = marker.name.split(", ");
	d3Stats(cityArray[0], 200, 200, "M", "rgb(0, 0, 0)");
```

`fetchCountry(cityArray[1], displayStats);` is called with two parameters, the country and the name of the `functionCall` to call (`displayCountry` for the JS Overview Modal or `displayStats` for the JS Statistics Modal). It checks if `findCountryObject` is populated (=== 0), if so `fetch()` from the REST Countries API is called to populate `findCountryObject` else the existing data is used (previously fetched).

`displayStats()` checks the bordering countries array for multiple objects and creates the relevant object (for example, "FRA, DEU, LUX, NLD." for Brussels, Belgium) to make it look good when displayed to the User.

The population and area numbers are separated by a space at every 1000 using a regular expression. It looks nicer (for example, from "1234567" to "1 234 567" ) and negates the need to support regional differences in using "," or "." as a separator.

```
	findCountryObject.population = findCountryObject.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
	findCountryObject.area = findCountryObject.area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
```

Using `document,querySelector("#...").innerHTML = ...;` the JS Overview Modal is populated with the flag, native name, regions, languages, currencies, and calling code.

```
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
                document.getElementById("modal-content").innerHTML = `<h4>Overview: ${marker.name}</h4> ${marker.overview}`;
                let cityArray = marker.name.split(", ");
                fetchCountry(cityArray[1], displayCountry);
            };
            buttonOverview.addEventListener("click", overviewModalHandler);

            const statisticsModalHandler = () => {
                toggleBackdrop();
                toggleModal();
                document.getElementById("modal-content").innerHTML = `<h4>Statistics: ${marker.name}</h4><div class="canvas"></div><div>${marker.d3}`;
                let cityArray = marker.name.split(", ");
                d3Stats(cityArray[0], 200, 200, "M", "rgb(0, 0, 0)");
                fetchCountry(cityArray[1], displayStats);
            };
            buttonStats.addEventListener("click", statisticsModalHandler);
        };

        document.getElementById("close").onclick = () => { closeModal(); };

        const closeModal = () => {
            toggleModal();
            toggleBackdrop();
        };
```

The `findCountryObject` is declared and populated with data from the REST Countries API using `fetch().then().then().catch()`.

```
let findCountryObject = {};

        let displayCountry = () => {
            let languages = "";

            for (let i = 0; i < findCountryObject.languages.length; i++) {
                if (i === (findCountryObject.languages.length - 1)) {
                    languages += `${findCountryObject.languages[i].name}.`;
                } else {
                    languages += `${findCountryObject.languages[i].name}, `;
                }
            }

            let currencies = "";

            for (let i = 0; i < findCountryObject.currencies.length; i++) {
                if (i === (findCountryObject.currencies.length - 1)) {
                    currencies += `${findCountryObject.currencies[i].name}.`;
                } else {
                    currencies += `${findCountryObject.currencies[i].name}, `;
                }
            }

            document.querySelector("#flag").innerHTML = `<img src="${findCountryObject.flag}" width="150" style="border:2px solid black"></a>`;
            document.querySelector("#overview").innerHTML = `<p>Native Name: "${findCountryObject.nativeName}" => ${findCountryObject.name} --> ${findCountryObject.subregion} --> ${findCountryObject.region}</p>
                <p>Language(s): ${languages} - Currencie(s): ${currencies} - Calling Code: +${findCountryObject.callingCodes[0]}</p>`;
        };

        let fetchCountry = (country, functionCall) => {
            if ((Object.keys(findCountryObject).length) === 0) {
                fetch(`https://restcountries.eu/rest/v2/all`)
                    .then(data => data.json())
                    .then(data => {
                        findCountryObject = data.find(data => data.name === country);
                        functionCall();
                    }).catch(err => console.log(err));
            } else {
                functionCall();
            }
        };


        let displayStats = () => {
            let borders = "";

            for (let i = 0; i < findCountryObject.borders.length; i++) {
                if (i === (findCountryObject.borders.length - 1)) {
                    borders += `${findCountryObject.borders[i]}.`;
                } else {
                    borders += `${findCountryObject.borders[i]}, `;
                }
            }

            if (findCountryObject.gini === null) {
                findCountryObject.gini = "None";
            }
            findCountryObject.population = findCountryObject.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
            findCountryObject.area = findCountryObject.area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

            document.querySelector("#d3").innerHTML = `<p>Population: "${findCountryObject.population}", Area: ${findCountryObject.area} km<sup>2</sup></p>
                <p>Bordering Countrie(s): ${borders}</p><p>Gini Coefficient: ${findCountryObject.gini}, this is a measurement of inequality. The lower the better (< 35).</p>`;
        };
```

[(Js) - Production Code: d3Stats.js]()

This is inspired by the Udemy course on D3 and Firestore by Shaun Pelling. The processes and pattern are the same for all D3 graphing. I've added the flexibility of supplying parameters so I won't have to modify this file every time I want to change colour or size or tickCounter, and call it using a city as an index to the Cloud Firestore.

The D3 3-step Process:

1. Setup the graph style.
2. Access the JSON data (file or database or API).
3. Call the update().

The D3 Update Pattern:

1. Update scales (domains) if they rely on our data.
2. Join updated data to elements.
3. Remove unwanted, if any, shapes using the exit selection.
4. Update current shapes in the DOM.
5. Append the enter selection to the DOM.

```
// Select the SVG element <div class="canvas"> to append SVG

const d3Stats = (city, width, height, tickFormat, fillColour) => {
    const svg = d3.select(".canvas")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    // Create margins and dimensions for our graph, for axis information
    const margin = { top: 5, right: 5, bottom: 40, left: 40 };
    const graphWidth = 200 - margin.left - margin.right;
    const graphHeight = 200 - margin.top - margin.bottom;
    const graph = svg.append("g")
        .attr("width", graphWidth)
        .attr("height", graphHeight)
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    // Create x- and y-axis groups and provide elements
    const xAxisGroup = graph.append("g")
        .attr("transform", `translate(0, ${graphHeight})`); // Reverse axis from top to bottom
    const yAxisGroup = graph.append("g");
    // Scales
    // Domain: input value range --> Range: scale value range
    const y = d3.scaleLinear()
        .range([graphHeight, 0]);
    // Map Object to an Array of items (in this case names)
    // .domain(data.map(item => item.name)) -->
    // ["veg soup", "veg curry", "veg pasta", "veg surprise"]
    const x = d3.scaleBand()
        .range([0, graphWidth])
        .paddingInner(0.2)
        .paddingOuter(0.2);
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickFormat(d => d + ` ${tickFormat}`);

    const t = d3.transition().duration(3000);


    /* === D3 Update Function === === === === === === === === === === === */
    const update = (data) => {
        // D3 Update Step 1: Update scales (domains) if they rely on our data
        y.domain([0, d3.max(data, d => d.population)]);
        x.domain(data.map(item => item.name));
        // D3 Update Step 2: Join the updated data array (JSON) to rects
        const rects = graph.selectAll("rect")
            .data(data);
        // D3 Update Step 3: Remove the exit  selection
        rects.exit().remove();
        // D3 Update Step 4: Add attrs to rects already in the DOM (innerHTML)
        rects.attr("width", x.bandwidth)
            .attr("fill", fillColour)
            .attr("x", d => x(d.name))
            .transition(t)
            .attr("height", d => graphHeight - y(d.population))
            .attr("y", d => y(d.population));
        // D3 Update Step 5: Append the enter selection to the DOM (outerHTML and innerHTML)
        rects.enter()
            .append("rect")
            .attr("width", 0)
            .attr("height", d => 0)
            .attr("fill", fillColour)
            .attr("x", (d) => x(d.name))
            .attr("y", d => graphHeight)
            .transition(t)
            .attrTween("width", widthTween)
            .attr("height", d => graphHeight - y(d.population))
            .attr("y", d => y(d.population));
        // Call axes
        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
    };
    // Get data from Firestore (previously a local JSON file) when a change  occurs, this onSnapshot() is triggered.
    let dataArray = [];
    // Firestore change listener triggers a dataArray[] update (added, modified, removed).
    db.collection(city).onSnapshot(response => {
        //console.log(response.docChanges());
        // Cycling through every change that occurs in the database.
        response.docChanges().forEach(change => {
            //console.log(change.doc.data());
            // Create a doc object based on the changes in the database, getting the data and document id.
            const doc = { ...change.doc.data(), id: change.doc.id };
            
            // Check change type using a switch statement.
            switch (change.type) {
                case "added":
                    dataArray.push(doc);
                    break;
                case "modified":
                    const index = dataArray.findIndex(item => item.id == doc.id);
                    dataArray[index] = doc;
                    break;
                case "removed":
                    dataArray = dataArray.filter(item => item.id !== doc.id);
                    break;
                default:
                    break;
            }
        });
        update(dataArray);

        xAxisGroup.selectAll("text")
            .attr("transform", "rotate(-10)")
            .attr("text-anchor", "end")
            .attr("fill", fillColour);

    });
    // Tweens: timer to update attributes over time.
    const widthTween = (d) => {
        // Define interpolation. d3.interpolate returns a function we call 'i' (a value from 0 to 1)
        let i = d3.interpolate(0, x.bandwidth());
        // Return function with time ticker 't'
        return function (t) {
            // Return the value from passign the ticker into the interpolation
            return i(t);
        };
    };
}
```

![noSQl database Firebase Firestore](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/12.%20Firebase%20Firestore%20for%20%20D3.png)

The Database Consists of several Capital City Collections, and each City Collection has one to three Documents, and each Document has two fields, name: (String) and Population: (Number). This is the data used by the D3 API to create the dynamic graphs in the JS Statistics Modals.

## </> HTML 5

### index.html

An overview of the internal and external CSS and JavaScript files, CDN's, icons, and API's referenced in index.html.

* External: .css{} - FontAwesome icons version 4.7.0 used for the Fixed Footer links, and the CSS Modals. A CSS file loaded from a CDN.

```
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet” type="text/css">
```

* Internal: .css{} - CSS file created by me to provide the layout, design, and style of the website.
* External: It loads `@import url('https://fonts.googleapis.com/css?family=Raleway|&display=swap');`, the Raleway font from Google Fonts.

```
<link rel="stylesheet" href="../CitiesInCountries/assets/styles/style.css">
```

* Internal: [i] - Favicon for the website, a simple white G on a light blue background.

```
<link rel="icon" type="image/png" sizes="16x16" href="../CitiesInCountries/assets/images/favicon-16x16.png">
```

The EmailJS is configured according to the EmailJS API documentation, though I keep the sending code in the sendemail.js file that is called when the User clicks on the "Send Feedback" button.

* External: (Js) - EmailJS API.
* Internal: (Js) - In-line internal component containing my unique ID.
* Internal: (Js) - The sendemail.js file contains the JS to send the Contact Form data via the EmailJS API as an e-mail to me.

```
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
<script>(function () {emailjs.init("user_Dhpon4lpXiEEQEGFYwVco");})();</script><script src="../CitiesInCountries/assets/scripts/sendemail.js"></script>
```

Google Cloud Firestore for the D3 API data, the bar graphs in the JS Statistics Modals.

* External: (Js) - 3 JS scripts as per the Google Cloud Firestore documentation.
* Internal: (Js) - my variable to access my database, used by d3Stats.js.

```
<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script><script>var firebaseConfig = {…}; </script>
```

* External: (Js) - D3 API for the bar graphs in the JS Statistics Modals.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.js"></script>
```

* Internal: (Js) - Google Maps JavaScript API code for the customised Navigational Controls. This is copied from the Google Maps JavaScript API documentation, and modified to suit my website requirements (map type controls (Map / Satellite), and zoom controls (+ -)).

```
<script src="../CitiesInCountries/assets/scripts/mapControls.js" defer></script>
```

* Internal: (Js) - my main JavaScript file, maps.js.

```
<script src="../CitiesInCountries/assets/scripts/maps.js" defer></script>
```

* Internal: (Js) - D3 code for fetching, updating, and styling the real-time dynamic SVG bar graphs in the JS Statistics Modals.

```
<script src="../CitiesInCountries/assets/scripts/d3Stats.js"></script>
```

* External: (Js) - Google Maps JavaScript API, created dynamically to ensure the DOM is fully loaded before calling `initMap()` from maps.js. This is done to avoid common "Uncaught...initMap() not a function..." error messages that stop the page from loading.  This is from "Prof3ssorSt3v3".

```
let script = document.createElement("script");
document.addEventListener("DOMContentLoaded", () => {
    document.head.appendChild(script);
    script.addEventListener("load", () => {
        initMap();
    });
});
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDKoKXKgFfLTb9SNLk0QEq1FmnNJD3hSg`;
```

## .css{} CSS 3

### style.css

An overview of the main styling sections of style.css.

* Google Font Raleway: `@import url('https://fonts.googleapis.com/css?family=Raleway|&display=swap');` used throughout the website as it's an easy font to read, and easy on the eyes.
* Main section for setting basic parameters `* {...}`, and `html, body {...}` to set font and background to the linear-gradient used throughout the website.
* Google Map height definition, from the Google Map JavaScript API documentation, `#map`.
* Google Map Navigational Control styles from the Google Map JavaScript API with modifications to suit the overall design of the website, `.gm-style...{...}`.
* Grid Layout for the map and footer, using `grid-template-areas`. 3 columns x 20 rows, of which the Fixed Footer use one row of 3 columns, and the rest is real estate for Google Maps.
* Fixed Footer styling of FontAwesome icon links.
* CSS Modal backdrop styling and toggling.
* JavaScript Modal, backdrop, modals, and SVG flag.
* CSS Modal styling for the Fixed Footer FontAwesome icon links.
* Buttons, all Close buttons, JS Modal Overview and Statistics buttons.
* Responsive Web Design, for laptops and desktops with plenty of "real estate".

## (Js) JavaScript

### maps.js

All the fetching of data (data-at-rest), processing of data (data-in-motion), and displaying of data (data presentation) is driven by this maps.js JavaScript.

The main JavaScript file, maps.js, contains the logic for loading the Google Maps API, creating a new Google Map, adding Google Map Markers, InfoViews with both static and dynamic data from the internal `markersArray[]` and the OpenWeather API.

The JS Overview and Statistics Modals are created in this script, and populated with data fetched from numerous API's (OpenWeather, Google Maps, D3, EmailJS, REST Countries, and Cloud Firestore).

All other JavaScripts, except sendemail.js, are called from this main script.

### d3Stats.js

This script contains the D3 API and logic to fetch D3 population data from the Cloud Firestore, create the D3 dynamic bar graph displayed in the JS Statistics Modals.

### mapControls.js

This script contains the Google Map JavaScript API for the customised Navigational Controls. The two used  are for map types and zoom controls.

### sendemail.js

This script contains the EmailJS send Contact Form to e-mail logic triggered by the "Send Feedback" button on the Contact Form. This is from the EmailJS API documentation.




