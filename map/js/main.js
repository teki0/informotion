// -- Mapbox, https://www.mapbox.com/mapbox.js/example/v1.0.0/
L.mapbox.accessToken = 'pk.eyJ1IjoidGVraTAiLCJhIjoiY2lqZXVwdzZ6MDAwaHR1bTVqMXd0eW1teiJ9.2_XymRTWvw6zIHYy0ywhDw';
    var map = L.mapbox.map('map', 'mapbox.streets',{
      zoomControl: false,
      minZoom: 9
    })
        .setView([52.373334, 4.894836], 9);

// -- Marker Clustering, https://www.mapbox.com/mapbox.js/example/v1.0.0/leaflet-markercluster/
var markersClusters = new L.MarkerClusterGroup();

for (var i = 0; i < markers.length; ++i) {
    var popup = markers[i].tweet;
    
    var m = L.marker( [markers[i].lat, markers[i].lng], {
        icon: L.mapbox.marker.icon({'marker-symbol': 'post', 'marker-color': '3D8CFF'}),
        iconSize: [25, 25]   
    }).bindPopup(popup);
    
    markersClusters.addLayer(m);
}

map.addLayer(markersClusters);

// -- Navigatie, https://www.mapbox.com/mapbox.js/example/v1.0.0/mapbox-directions/
map.attributionControl.setPosition('bottomleft');

var directions = L.mapbox.directions();

var directionsLayer = L.mapbox.directions.layer(directions)
    .addTo(map);

var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions)
    .addTo(map);

var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions)
    .addTo(map);

var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
    .addTo(map);

var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions)
    .addTo(map);
