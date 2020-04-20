/** Single Map Marker and infoWindow */

/* === WHY?
To place map markers of places I've travelled to in both business and pleasure, giving the audience of what I've done, where, and why.
Map Marker -- 'hover' --> Tool-tip -- 'click' --> Overview Modal -- 'click Detail Button' --> Detail Modal || 'click D3 Button' --> Graphs...


=== WHAT?
Google Maps API - Bill Traversy @ Traversy Media: https://www.youtube.com/watch?v=Zxf1mnP5zcw and Code Institute Walkthrough by Matt Rudge.
Added several Locations/Markers with iconImage, and Content ("tool-tips")
Added Mouseover and Mouseout as it's user-friendly and performs nicer than Click
Saving Click for JS Modal (Code Institute Milestone Project II)

=== HOW?
HTML: Create the navigation elements with relevant classes and id's, to be referenced by CSS and modified via JS.
CSS: Style the Google Maps navigation elements, .gm-style... classes.
JS: Create and call custom functions, ZoomControl, MapType Control, and FullScreenControl.
*/

function initMap() {
    var home = { lat: 53.274346, lng: -6.348835 }; // My home coords for centering the map, and for marking my home
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: home,
        disableDefaultUI: true,
    }); // Create a new Map and center on Home

    var markersArray = [
        {
            coords: home,
            iconImage: '/assets/images/150px-IRL_Dublin_flag.svg.png',
            content: `<h3>Dublin, Ireland</h3><hr><p>6 Oldcourt Close, Ballycullen, D24 RHY2</p><p>Dublin, Ireland</p>`
        },
        {
            coords: { lat: 51.5074, lng: 0.1278 },
            content: `London, England: 51.5074° N, 0.1278° W`
        },
        {
            coords: { lat: 54.5973, lng: -5.9301 },
            content: `Belfast, Northern Ireland: 54.5973° N, 5.9301° W`
        },
        {
            coords: { lat: 51.4816, lng: -3.1791 },
            content: `Cardiff, Wales: 51.4816° N, 3.1791° W`
        },
        {
            coords: { lat: 55.9533, lng: -3.1883 },
            content: `Edinburg, Scotland: 55.9533° N, 3.1883° W`
        },
        {
            coords: { lat: 1.3521, lng: 103.8198 },
            content: `Singapore, Singapore: 1.3521° N, 103.8198° E`
        },
        {
            coords: { lat: 59.3293, lng: 18.0686 },
            content: `Stockholm, Sweden: 59.3293° N, 18.0686° E`
        }
    ];

    for (var i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
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
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener("mouseover", function () {
                infoWindow.open(map, marker);
            });

            marker.addListener("mouseout", function () {
                infoWindow.close(map, marker);
            });
        }
    }

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
    var mapTypeControlDiv = document.querySelector('.maptype-control');
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
    var elementToSendFullscreen = map.getDiv().firstChild;
    var fullscreenControl = document.querySelector('.fullscreen-control');
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