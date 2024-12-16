
/* ==============================================
Google Maps
=============================================== */

function initialize() {
    var myLatlng = new google.maps.LatLng(43.648748, -79.370456); // 3 Lower Jarvis St, Toronto, ON M5A 3Y5 Latitude and Longitude
    var mapOptions = {
        zoom: 15,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Disabled Map Scroll in Contact Page 
    map.setOptions({'scrollwheel': false});

    // Black and White style for Google Map
    var styles = [
        {
            stylers: [
                { saturation: -100 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: -8 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
        }
    ];
    map.setOptions({styles: styles});

    // Google Map Marker 
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

